// ASBEST BATTERY SAVING MODE - CONSTRUCTION SITE POWER MANAGEMENT
class AsbestBatterySaver {
  constructor() {
    this.battery = null;
    this.isBatterySavingActive = false;
    
    this.init();
  }
  
  async init() {
    console.log('🔋 Initializing Asbest Battery Saver');
    
    try {
      this.battery = await navigator.getBattery();
      this.monitorBatteryStatus();
    } catch (error) {
      console.log('Battery API not supported, using manual controls');
    }
    
    this.setupManualToggle();
  }
  
  monitorBatteryStatus() {
    if (!this.battery) return;
    
    const checkBattery = () => {
      const level = this.battery.level;
      const charging = this.battery.charging;
      
      // Auto-enable at 20% or below
      if (level <= 0.2 && !charging && !this.isBatterySavingActive) {
        this.enableBatterySaving('auto');
      }
      
      // Auto-disable when charging above 50%
      if (level > 0.5 && charging && this.isBatterySavingActive) {
        this.disableBatterySaving('auto');
      }
    };
    
    checkBattery();
    this.battery.addEventListener('levelchange', checkBattery);
    this.battery.addEventListener('chargingchange', checkBattery);
  }
  
  enableBatterySaving(trigger = 'manual') {
    if (this.isBatterySavingActive) return;
    
    console.log(`🔋 Enabling battery saving mode (triggered by: ${trigger})`);
    
    this.isBatterySavingActive = true;
    document.body.classList.add('battery-saving-mode');
    
    // Disable animations
    document.documentElement.style.setProperty('--animation-duration', '0s');
    
    // Pause videos
    document.querySelectorAll('video').forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
    
    // Reduce polling frequency
    if (window.pollInterval) {
      clearInterval(window.pollInterval);
      window.pollInterval = setInterval(window.pollFunction, 60000);
    }
    
    this.showBatterySavingNotification(trigger);
  }
  
  disableBatterySaving(trigger = 'manual') {
    if (!this.isBatterySavingActive) return;
    
    console.log(`🔋 Disabling battery saving mode (triggered by: ${trigger})`);
    
    this.isBatterySavingActive = false;
    document.body.classList.remove('battery-saving-mode');
    
    // Restore animations
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
  }
  
  setupManualToggle() {
    const toggle = document.createElement('div');
    toggle.className = 'battery-saving-toggle';
    toggle.innerHTML = `
      <button id="battery-toggle" class="battery-toggle-btn">
        <span>🔋</span>
        <span>Batteriesparung</span>
      </button>
    `;
    
    document.body.appendChild(toggle);
    
    document.getElementById('battery-toggle').addEventListener('click', () => {
      if (this.isBatterySavingActive) {
        this.disableBatterySaving('manual');
      } else {
        this.enableBatterySaving('manual');
      }
    });
  }
  
  showBatterySavingNotification(trigger) {
    const batteryLevel = this.battery ? Math.round(this.battery.level * 100) : 'unbekannt';
    
    const notification = document.createElement('div');
    notification.className = 'battery-notification';
    notification.innerHTML = `
      <div>
        <strong>🔋 Batteriesparung aktiviert</strong>
        <small>Akku: ${batteryLevel}% • ${trigger === 'auto' ? 'Automatisch' : 'Manuell'}</small>
      </div>
      <button onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }
}

// Initialize battery saver
new AsbestBatterySaver();

console.log('✅ Asbest Battery Saver Ready - Auto-enables at 20%');