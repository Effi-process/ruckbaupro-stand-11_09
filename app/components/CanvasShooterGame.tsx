'use client';

import React from "react";

export default function CanvasShooterGame() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const CONFIG = React.useMemo(() => ({
    text: "RÜCKBAUPRO",            // <- Zieltext
    bg: "#1a1a2e",                // Dunkler Hintergrund
    player: {                     // Schutzanzug-Figur (Hazmat)
      suit: "#e6e7eb",
      outline: "#2b2f38",
      visor: "#7fb6ff",
      accent: "#ffb000",
    },
    bulletColor: "#ff7a00",
    blockColor: "#ffffff",        // Weiße Blöcke für "RÜCKBAUPRO"
    sample: 6,                    // Abtast-Raster (größer = gröber)
    blockSize: 12,                // Größe der Text-Blöcke
    fireRateMs: 120,              // Schuss-Rate
    bulletSpeed: 8,
  }), []);

  // Intersection Observer für Lazy Loading
  React.useEffect(() => {
    const wrapper = wrapRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return; // Game startet nur wenn sichtbar
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // Mobile Detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let W = 800, H = 400;

    /** --- Spielzustand --- */
    const bullets: Array<{x: number, y: number, w: number, h: number}> = [];
    const blocks: Array<{x: number, y: number, w: number, h: number, dead: boolean}> = [];
    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number, color: string, life: number, maxLife: number, type: 'spark' | 'fire' | 'debris'}> = [];
    const player = { x: W / 2, y: H - 50, w: 24, h: 32 };

    function resize() {
      const wrap = wrapRef.current;
      if (!wrap || !canvas) return;
      const w = Math.min(wrap.clientWidth, 800);
      const ratio = w / 800;
      W = Math.round(800 * ratio);
      H = Math.round(400 * ratio);
      canvas.width = W;
      canvas.height = H;
      // Player unten neu positionieren
      player.y = H - 50;
    }
    resize();

    // Pixel-Text -> Blöcke (optimiert für Mobile)
    function buildBlocks() {
      blocks.length = 0;
      
      // Mobile: weniger Blöcke für bessere Performance
      if (isMobile) {
        // Einfachere Block-Generierung für Mobile
        const text = CONFIG.text;
        const spacing = 15;
        const blockW = 8;
        const startX = (W - text.length * spacing) / 2;
        const startY = 60;
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char !== ' ') {
            // Pro Buchstabe nur wenige Blöcke
            for (let row = 0; row < 3; row++) {
              for (let col = 0; col < 2; col++) {
                blocks.push({ 
                  x: startX + i * spacing + col * blockW, 
                  y: startY + row * blockW, 
                  w: blockW, 
                  h: blockW, 
                  dead: false 
                });
              }
            }
          }
        }
        return;
      }
      
      // Desktop: Original-Verhalten
      const off = document.createElement("canvas");
      const octx = off.getContext("2d");
      if (!octx) return;
      
      off.width = 1600;
      off.height = 400;
      octx.clearRect(0, 0, off.width, off.height);
      octx.fillStyle = "#000";
      octx.font = "bold 120px Arial";
      octx.textBaseline = "top";

      const metrics = octx.measureText(CONFIG.text);
      const textW = metrics.width;
      const scale = Math.min((0.8 * W) / textW, 1);

      octx.setTransform(scale, 0, 0, scale, 0, 0);
      octx.fillText(CONFIG.text, 40, 40);

      const step = CONFIG.sample;
      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          const pixel = octx.getImageData(x, y, 1, 1);
          const a = pixel.data[3];
          if (a > 10) {
            const bx = x * scale + (W - textW * scale) / 2;
            const by = y * scale + 30 * scale;
            const s = CONFIG.blockSize * scale * 0.8;
            blocks.push({ x: bx, y: by, w: s, h: s, dead: false });
          }
        }
      }
    }
    buildBlocks();

    /** --- Eingaben --- */
    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      player.x = Math.max(10, Math.min(W - player.w - 10, mx - player.w / 2));
    }
    function onClick() { shoot(); }
    
    // Touch-Steuerung für Mobile
    function onTouchMove(e: TouchEvent) {
      if (!canvas) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const tx = touch.clientX - rect.left;
      player.x = Math.max(10, Math.min(W - player.w - 10, tx - player.w / 2));
    }
    function onTouchStart(e: TouchEvent) {
      e.preventDefault();
      shoot();
    }
    
    if (isMobile) {
      // Mobile: Touch Events
      // @ts-ignore - canvas is already checked above
      canvas.addEventListener("touchmove", onTouchMove, { passive: false });
      canvas.addEventListener("touchstart", onTouchStart, { passive: false });
      canvas.addEventListener("touchend", (e) => e.preventDefault(), { passive: false });
    } else {
      // Desktop: Mouse Events
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("click", onClick);
    }

    const keys: {[key: string]: boolean} = {};
    function onKey(e: KeyboardEvent) { keys[e.key.toLowerCase()] = e.type === "keydown"; }
    
    if (!isMobile) {
      // Keyboard nur auf Desktop
      window.addEventListener("keydown", onKey);
      window.addEventListener("keyup", onKey);
    }

    /** --- Particle System --- */
    function createExplosion(x: number, y: number) {
      // Viel mehr Funken-Partikel für spektakuläre Zerstörung
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.8;
        const speed = 3 + Math.random() * 6;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 3 + Math.random() * 5,
          color: ['#ff4500', '#ff6000', '#ffaa00', '#ffff00', '#ff2200'][Math.floor(Math.random() * 5)],
          life: 80,
          maxLife: 80,
          type: 'spark'
        });
      }

      // Mehr Feuer-Partikel für intensive Zerstörung
      for (let i = 0; i < 12; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 4,
          vy: -2 - Math.random() * 4,
          size: 4 + Math.random() * 6,
          color: ['#ff1500', '#ff4500', '#ff8800', '#ffaa00'][Math.floor(Math.random() * 4)],
          life: 60,
          maxLife: 60,
          type: 'fire'
        });
      }

      // Viel mehr Trümmer-Partikel
      for (let i = 0; i < 15; i++) {
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: -2 - Math.random() * 5,
          size: 2 + Math.random() * 4,
          color: ['#ffffff', '#cccccc', '#dddddd'][Math.floor(Math.random() * 3)],
          life: 50,
          maxLife: 50,
          type: 'debris'
        });
      }

      // Extra Ring von Explosions-Partikeln
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const speed = 1 + Math.random() * 2;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 6 + Math.random() * 4,
          color: ['#ff3300', '#ff5500', '#ff7700'][Math.floor(Math.random() * 3)],
          life: 45,
          maxLife: 45,
          type: 'fire'
        });
      }
    }

    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Apply gravity to debris
        if (p.type === 'debris') {
          p.vy += 0.1;
        }
        
        // Fade fire upwards
        if (p.type === 'fire') {
          p.vy -= 0.05;
        }
        
        // Fade sparks
        if (p.type === 'spark') {
          p.vx *= 0.98;
          p.vy *= 0.98;
        }
        
        // Update life
        p.life--;
        
        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
    }

    function drawParticles() {
      for (const p of particles) {
        const alpha = p.life / p.maxLife;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (p.type === 'fire') {
          // Feuer mit Glow-Effekt
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'spark') {
          // Funken als kleine Linien
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 2, p.y - p.vy * 2);
          ctx.stroke();
        } else {
          // Trümmer als kleine Rechtecke
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
        }
        
        ctx.restore();
      }
    }

    /** --- Schießen --- */
    let lastShot = 0;
    function shoot() {
      const now = performance.now();
      if (now - lastShot < CONFIG.fireRateMs) return;
      lastShot = now;
      
      // Mündungsfeuer beim Schießen
      const muzzleX = player.x + player.w / 2;
      const muzzleY = player.y;
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: muzzleX + (Math.random() - 0.5) * 6,
          y: muzzleY - 5,
          vx: (Math.random() - 0.5) * 2,
          vy: -1 - Math.random(),
          size: 2 + Math.random() * 2,
          color: ['#ff4500', '#ff6000', '#ffaa00'][Math.floor(Math.random() * 3)],
          life: 15,
          maxLife: 15,
          type: 'fire'
        });
      }
      
      bullets.push({ x: player.x + player.w / 2 - 2, y: player.y - 6, w: 4, h: 8 });
    }

    /** --- Zeichnet den Hazmat-Spieler --- */
    function drawPlayer() {
      ctx.save();
      ctx.translate(player.x, player.y);

      const px = 1;
      const o = CONFIG.player.outline;
      const suit = CONFIG.player.suit;
      const visor = CONFIG.player.visor;
      const accent = CONFIG.player.accent;

      // sanftes „Atmen"
      const t = performance.now() * 0.003;
      const bobY = Math.sin(t) * 0.5;

      function fillRect(x: number, y: number, w: number, h: number, fill: string) {
        x = Math.round(x); y = Math.round(y + bobY);
        ctx.fillStyle = o;    ctx.fillRect(x - 1, y - 1, w + 2, h + 2); // Outline
        ctx.fillStyle = fill; ctx.fillRect(x, y, w, h);
      }

      // Beine
      fillRect(4 * px, 18 * px, 5 * px, 8 * px, suit);
      fillRect(12 * px, 18 * px, 5 * px, 8 * px, suit);
      // Schuhe
      fillRect(3.5 * px, 26 * px, 6 * px, 2 * px, accent);
      fillRect(11.5 * px, 26 * px, 6 * px, 2 * px, accent);
      // Torso + Gurt
      fillRect(3 * px, 8 * px, 15 * px, 12 * px, suit);
      fillRect(3 * px, 14 * px, 15 * px, 2 * px, accent);
      // Arme
      fillRect(0 * px, 10 * px, 3 * px, 6 * px, suit);
      fillRect(18 * px, 10 * px, 3 * px, 6 * px, suit);
      // Kopf + Visier
      fillRect(5 * px, 0 * px, 11 * px, 8 * px, suit);
      fillRect(6 * px, 2 * px, 9 * px, 4 * px, visor);
      // Blaster oben
      fillRect(9 * px, 5 * px, 5 * px, 3 * px, o);

      ctx.restore();
    }

    /** --- Loop --- */
    let raf = 0;
    function tick() {
      // Auto-Shoot für Mobile (kontinuierliches Schießen)
      if (isMobile) {
        shoot();
      } else if (keys[" "]) {
        shoot();
      }

      // Bullets bewegen (auf Mobile langsamer)
      const bulletSpeed = isMobile ? CONFIG.bulletSpeed * 0.6 : CONFIG.bulletSpeed;
      for (const b of bullets) b.y -= bulletSpeed;
      for (let i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].y + bullets[i].h < 0) bullets.splice(i, 1);
      }

      // Kollisionen mit Explosion-Effekten
      for (const b of bullets) {
        for (const bl of blocks) {
          if (!bl.dead && b.x < bl.x + bl.w && b.x + b.w > bl.x && b.y < bl.y + bl.h && b.y + b.h > bl.y) {
            // Explosion erstellen
            createExplosion(bl.x + bl.w / 2, bl.y + bl.h / 2);
            
            bl.dead = true;
            b.y = -9999; // Bullet „verbraucht"
            break;
          }
        }
      }

      // Partikel-System updaten
      updateParticles();

      // Render
      ctx.fillStyle = CONFIG.bg; 
      ctx.fillRect(0, 0, W, H);

      // Blocks zeichnen
      ctx.fillStyle = CONFIG.blockColor;
      for (const bl of blocks) {
        if (!bl.dead) {
          ctx.fillRect(bl.x, bl.y, bl.w, bl.h);
        }
      }

      // Player zeichnen
      drawPlayer();

      // Partikel-Effekte zeichnen (hinter Bullets)
      drawParticles();

      // Bullets zeichnen mit Glow-Effekt
      ctx.save();
      ctx.shadowColor = CONFIG.bulletColor;
      ctx.shadowBlur = 8;
      ctx.fillStyle = CONFIG.bulletColor;
      for (const b of bullets) {
        ctx.fillRect(b.x, b.y, b.w, b.h);
      }
      ctx.restore();

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    // Resize neu sampeln
    const ro = new ResizeObserver(() => { 
      resize(); 
      buildBlocks(); 
    });
    if (wrapRef.current) {
      ro.observe(wrapRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      
      if (canvas) {
        if (isMobile) {
          canvas.removeEventListener("touchmove", onTouchMove);
          canvas.removeEventListener("touchstart", onTouchStart);
          canvas.removeEventListener("touchend", (e) => e.preventDefault());
        } else {
          canvas.removeEventListener("mousemove", onMouseMove);
          canvas.removeEventListener("click", onClick);
          window.removeEventListener("keydown", onKey);
          window.removeEventListener("keyup", onKey);
        }
      }
      
      ro.disconnect();
    };
  }, [isVisible, CONFIG]);

  return (
    <div ref={wrapRef} className="w-full h-full">
      {isVisible ? (
        <canvas ref={canvasRef} className="block w-full h-full" />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Spiel wird geladen...</p>
          </div>
        </div>
      )}
    </div>
  );
}