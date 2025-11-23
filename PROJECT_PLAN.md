# Kenya Trip Webapp - Project Plan

## Overview
Creating a static webapp to display Kenya 2026 trip itinerary with interactive features.

## Tech Stack
- **Framework**: Vanilla HTML/CSS/JavaScript (lightweight, perfect for GitHub Pages)
- **Styling**: Tailwind CSS (CDN for quick setup)
- **Map**: Leaflet.js (open source, free, no API key needed)
- **Deployment**: GitHub Pages
- **Build**: No build step needed (static files)

## Features

### 1. Pro Tips Page
- Display all practical tips from pro-tips.md
- Organized sections: Booking, Money, Packing, Health, Weather, Photography, etc.
- Clean, readable layout

### 2. Interactive Places Page
- Cards for each major destination:
  - Laikipia Plateau
  - Samburu/Sera
  - Matthews Range
  - Loita Hills
  - Lamu Coast
- Each card includes:
  - Description from hidden-gems.md
  - Placeholder for images (can be replaced with real photos)
  - Links to accommodations and reservation sites
  - Activities available

### 3. Interactive Map
- Leaflet.js map centered on Kenya
- Markers for each location from itinerary
- Popup with details when clicked
- Color-coded by type (wildlife, coast, cultural, etc.)

### 4. GitHub Pages Deployment
- GitHub Actions workflow
- Auto-deploy on push to main branch
- Serve from docs/ or gh-pages branch

## File Structure
```
/
├── index.html              # Home/landing page
├── pro-tips.html          # Pro tips page
├── places.html            # Interactive places page
├── map.html               # Interactive map page
├── css/
│   └── styles.css         # Custom styles
├── js/
│   ├── places.js          # Places page logic
│   └── map.js             # Map functionality
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## Implementation Strategy
1. Use subagents to build individual components
2. Commit after each major feature
3. Push regularly to track progress
4. Test locally before deploying

## Data Extraction
Key locations from itinerary:
1. Nairobi (arrival/departure)
2. Laikipia Plateau (Il Ngwesi/Lewa)
3. Samburu/Sera (Saruni Rhino)
4. Matthews Range (Sarara/Kitich)
5. Loita Hills (Maji Moto)
6. Lamu Coast (Peponi Hotel/The Majlis)

## Status
- [x] Plan created
- [ ] Basic structure
- [ ] Pro tips page
- [ ] Places page
- [ ] Map page
- [ ] GitHub Pages workflow
- [ ] Testing & deployment
