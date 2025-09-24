# Wertvoll Dienstleistungen GmbH - Asbestsanierung Website

Eine moderne, SEO-optimierte Website für Asbestsanierungsdienstleistungen, entwickelt mit Next.js 14.

## Features

- ⚡ **Next.js 14** mit App Router
- 🎨 **Tailwind CSS** für modernes Design
- 📱 **Vollständig Responsive** für alle Geräte
- 🔍 **SEO-optimiert** mit lokalem Fokus
- 🚀 **Performance-optimiert** mit Lazy Loading
- 🛡️ **TypeScript** für Type Safety
- 🗺️ **Interaktive Standortseiten** für lokale SEO

## Installation

1. Repository klonen:
```bash
git clone [repository-url]
cd asbest-sanierung
```

2. Dependencies installieren:
```bash
npm install
```

3. Environment Variables einrichten:
```bash
cp .env.example .env.local
# Dann die Werte in .env.local anpassen
```

4. Development Server starten:
```bash
npm run dev
```

## Deployment

### Vercel (Empfohlen)

1. Projekt zu GitHub pushen
2. Bei [Vercel](https://vercel.com) anmelden
3. Neues Projekt importieren
4. Environment Variables hinzufügen
5. Deploy!

### Andere Hosting-Provider

```bash
# Production Build erstellen
npm run build

# Build lokal testen
npm run start
```

## Struktur

```
/app
  ├── /components     # Wiederverwendbare Komponenten
  ├── /standorte      # Dynamische Städteseiten
  ├── /leistungen     # Service-Seiten
  ├── layout.tsx      # Root Layout
  └── page.tsx        # Homepage

/public
  ├── /images         # Bilder und Assets
  └── robots.txt      # SEO Konfiguration
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Die URL der Website
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Google Maps API Key (optional)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics ID (optional)

## Kontakt

**Wertvoll Dienstleistungen GmbH**  
Waldbadstraße 9–13  
33803 Steinhagen  
Tel: 0800 0060970  
Email: info@abriss-schmiede.de

## Lizenz

© 2024 Wertvoll Dienstleistungen GmbH. Alle Rechte vorbehalten.# Trigger Vercel Deploy
