# CLAUDE.md - AI Assistant Guide

This document provides context for AI assistants working on the Kenya Trip Plan project.

## Project Overview

**Kenya Trip Plan** is a static web application designed to help plan and explore a trip to Kenya in 2026. The application features:

- Interactive map with destination markers
- Comprehensive destination information pages
- Travel tips and practical advice
- Responsive design for desktop and mobile
- Automated deployment to GitHub Pages

## Project Type

- **Type**: Static Web Application
- **Target**: GitHub Pages Deployment
- **Build**: No build step required (pure HTML/CSS/JS)
- **Framework**: Vanilla JavaScript (no framework dependencies)

## Technology Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Custom styling (css/styles.css)
- **JavaScript**: Vanilla JS for interactivity
- **Leaflet.js**: Open-source mapping library
- **GitHub Actions**: Automated deployment
- **GitHub Pages**: Hosting platform

## File Structure

```
kenya-trip-plan/
├── index.html                 # Landing page with trip overview
├── map.html                   # Interactive Leaflet map with markers
├── places.html                # Directory of destinations
├── pro-tips.html              # Travel advice page
├── destination.html           # ✨ Dynamic destination page (all destinations)
├── data/
│   ├── categories.json        # Category definitions (colors, icons)
│   └── destinations/
│       ├── index.json         # 📝 List of all destinations (lightweight)
│       ├── nairobi.json       # 📝 Individual destination files
│       ├── laikipia.json
│       ├── samburu.json
│       └── ...                # One file per destination
├── css/
│   └── styles.css             # Custom styles and responsive design
├── js/
│   ├── destination-loader.js  # ✨ Loads individual destination files
│   ├── map.js                 # Leaflet map (loads from index)
│   └── places.js              # Places page (loads from index)
├── images/                    # Destination images
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment workflow
└── Documentation:
    ├── README.md              # User-facing documentation
    ├── CLAUDE.md              # This file - AI assistant guide
    ├── CONTENT_GUIDE.md       # 📖 How to add/edit destinations
    ├── PROJECT_PLAN.md        # Original project plan and status
    ├── DEPLOYMENT_GUIDE.md    # Deployment instructions
    ├── IMAGE_SOURCES.md       # Image attribution
    ├── hidden-gems.md         # Source content for destinations
    ├── pro-tips.md            # Source content for travel tips
    └── itinerary-plan-1.md    # Trip itinerary data
```

**Important**: This project uses a modular data structure with split JSON files. Individual destination HTML files are no longer used. Each destination is stored in its own JSON file within `data/destinations/`, and a lightweight index file (`data/destinations/index.json`) lists all destinations for efficient loading.

## Key Features

### 1. Interactive Map (map.html)
- Uses Leaflet.js for rendering
- Markers for each destination with popups
- Configured in `js/map.js`
- Coordinates and data for destinations

### 2. Destination Pages
- **Dynamic single-page system**: All destinations use `destination.html`
- Content loaded from individual JSON files (`data/destinations/{slug}.json`) based on URL parameter
- URL format: `destination.html?slug=destination-name`
- Images stored in `/images/` directory
- No code changes needed to add new destinations

### 3. Places Directory (places.html)
- Card-based layout of all destinations
- Links to detailed destination pages
- Logic in `js/places.js`

### 4. Travel Tips (pro-tips.html)
- Practical advice organized by category
- Source content in `pro-tips.md`

## Development Workflow

### Local Development
```bash
# Serve locally using Python
python -m http.server 8000

# Or using Node.js
npx http-server

# Then navigate to http://localhost:8000
```

### Making Changes

1. **Adding a New Destination** (NO CODE CHANGES REQUIRED):
   - Create new file: `data/destinations/{slug}.json`
   - Add destination entry to `data/destinations/index.json`
   - Follow the structure documented in `CONTENT_GUIDE.md`
   - Add image to `images/` directory (named `{slug}.jpg`)
   - Destination automatically appears on map, places page, and has its own page
   - **See `CONTENT_GUIDE.md` for complete instructions**

2. **Modifying Existing Destination**:
   - Edit the individual file: `data/destinations/{slug}.json`
   - If changing metadata (name, coordinates, etc.), also update `data/destinations/index.json`
   - Changes apply immediately to all pages (map, places, destination page)

3. **Modifying Styles**:
   - Edit `css/styles.css`
   - Follow existing CSS conventions
   - Test responsiveness on mobile and desktop

4. **Advanced Changes** (requires code modification):
   - Adding new features: Edit relevant HTML/JS files
   - Modifying page layouts: Edit HTML templates
   - Changing map behavior: Edit `js/map.js`

### Git Workflow

- **Current Branch**: `claude/add-claude-md-01Wt69va8N6ricaVjhEk2WqS`
- **Main Branch**: Used for production deployments
- **Branch Naming**: Claude branches follow pattern `claude/*-[session-id]`

### Committing Changes
```bash
git add .
git commit -m "Description of changes"
git push -u origin claude/add-claude-md-01Wt69va8N6ricaVjhEk2WqS
```

## Deployment

### Automatic Deployment
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Triggers on push to `main` or development branches
- Deploys all static files to GitHub Pages
- No build step required

### Manual Deployment
- Can be triggered via GitHub Actions UI
- Select "Run workflow" from Actions tab

### Deployment URL
- Format: `https://<username>.github.io/kenya-trip-plan/`
- Check Settings → Pages for exact URL

## Code Conventions

### HTML
- Semantic HTML5 elements
- Consistent structure across pages
- Responsive meta tags included
- External CSS and JS linked in `<head>`

### CSS
- Single stylesheet: `css/styles.css`
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Consistent color scheme and typography

### JavaScript
- Vanilla JS (no frameworks)
- Modular organization (separate files per feature)
- Clear variable naming
- Comments for complex logic

### Images
- Store in `/images/` directory
- Use descriptive filenames (e.g., `masai-mara.jpg`)
- Optimize for web (reasonable file sizes)
- Attribution tracked in `IMAGE_SOURCES.md`

## Important Notes

### What to Avoid
- Don't add build steps or dependencies
- Don't introduce frameworks (React, Vue, etc.)
- Don't use Node.js dependencies
- Keep it simple and static

### Best Practices
- Test changes locally before committing
- Follow existing code patterns
- Keep HTML pages consistent
- Optimize images before adding
- Write clear commit messages

### Permissions
- Repository requires public visibility for free GitHub Pages
- Workflow has permissions: `contents: read`, `pages: write`, `id-token: write`

## Destinations Included

Current destinations with dedicated pages:
1. Nairobi (capital city)
2. Masai Mara (wildlife reserve)
3. Amboseli (elephants & Mt. Kilimanjaro views)
4. Lake Nakuru (flamingos)
5. Lake Naivasha (freshwater lake)
6. Hell's Gate (national park)
7. Mount Kenya (mountain trekking)
8. Laikipia Plateau (conservancies)
9. Samburu (wildlife & culture)
10. Matthews Range (remote wilderness)
11. Loita Hills (Maasai culture)
12. Tsavo (largest national park)
13. Diani Beach (coastal paradise)
14. Lamu (historic island)

## Getting Help

- Check existing documentation files (README.md, DEPLOYMENT_GUIDE.md)
- Review existing code patterns in similar files
- Test locally before pushing changes
- Use git log to see recent changes and patterns

## Project Status

This is an active project with regular updates. Recent additions include:
- Multiple destination pages with images
- Interactive map with all destinations
- Responsive design improvements
- Automated GitHub Pages deployment

When making changes, ensure they align with the project's goal of being a simple, beautiful, and informative travel planning tool.
