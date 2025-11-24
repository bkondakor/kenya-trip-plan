# Content Management Guide

## Overview

This website has been refactored to support **dynamic content loading**. You can now add, edit, or remove destinations without modifying any code. All destination data is managed through a single JSON file.

## Table of Contents

1. [Quick Start: Adding a New Destination](#quick-start-adding-a-new-destination)
2. [File Structure](#file-structure)
3. [Destination Data Format](#destination-data-format)
4. [Field Descriptions](#field-descriptions)
5. [Categories](#categories)
6. [Images](#images)
7. [Testing Your Changes](#testing-your-changes)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start: Adding a New Destination

### Step 1: Edit the JSON File

Open `data/destinations.json` and add a new destination object to the `destinations` array:

```json
{
  "id": 15,
  "slug": "new-destination",
  "name": "New Destination Name",
  "coordinates": [-1.2921, 36.8219],
  "dates": "Best visiting dates",
  "category": "wildlife",
  "order": 15,
  "icon": "🦁",
  "shortDescription": "Brief 1-2 sentence description",
  "fullDescription": "Detailed multi-paragraph description...",
  "activities": [
    "Activity 1",
    "Activity 2",
    "Activity 3"
  ],
  "lodges": [
    {
      "name": "Lodge Name",
      "description": "Lodge description",
      "link": "https://www.lodgewebsite.com"
    }
  ],
  "links": [
    {
      "text": "Official Website",
      "url": "https://www.example.com",
      "icon": "🌍"
    }
  ],
  "amenities": ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Step 2: Save and Test

1. Save the `destinations.json` file
2. Open your website in a browser
3. Your new destination will automatically appear on:
   - The interactive map (`map.html`)
   - The places directory (`places.html`)
   - Its own dedicated page (`destination.html?slug=new-destination`)

**That's it! No code changes needed.**

---

## File Structure

### Key Files

```
kenya-trip-plan/
├── data/
│   └── destinations.json          # 📝 EDIT THIS FILE to manage content
├── destination.html                # Dynamic destination page template
├── js/
│   ├── destination-loader.js      # Loads destination data dynamically
│   ├── map.js                     # Map functionality (auto-loads from JSON)
│   └── places.js                  # Places page (auto-loads from JSON)
├── images/                        # Destination images
└── CONTENT_GUIDE.md              # This file
```

### What You Edit

- **`data/destinations.json`** - All destination content (the only file you need to edit)
- **`images/`** - Add destination images here

### What You Don't Touch

- `destination.html` - Template that renders all destinations
- `js/*.js` - JavaScript files that load and display the JSON data
- Other HTML files

---

## Destination Data Format

### Complete Example

Here's a fully documented example of a destination object:

```json
{
  "id": 1,
  "slug": "nairobi",
  "name": "Nairobi",
  "coordinates": [-1.2921, 36.8219],
  "dates": "January 17 & 31, 2026",
  "category": "cultural",
  "order": 1,
  "icon": "🏙️",
  "shortDescription": "Kenya's vibrant capital serves as your gateway.",
  "fullDescription": "Detailed multi-paragraph description of the destination...",
  "activities": [
    "Airport transfers and rest",
    "Optional: Giraffe Centre visit",
    "Optional: David Sheldrick Elephant Orphanage"
  ],
  "lodges": [
    {
      "name": "Eka Hotel",
      "description": "Modern airport hotel with excellent amenities",
      "link": "https://www.eka.co.ke"
    }
  ],
  "links": [
    {
      "text": "Visit Nairobi",
      "url": "https://www.kws.go.ke",
      "icon": "🏙️"
    }
  ],
  "amenities": ["Airport Access", "Modern Hotels", "City Dining"]
}
```

---

## Field Descriptions

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | Number | Unique identifier (increment from highest existing ID) | `15` |
| `slug` | String | URL-friendly identifier (lowercase, hyphens only) | `"masai-mara"` |
| `name` | String | Full destination name | `"Masai Mara National Reserve"` |
| `coordinates` | Array | [Latitude, Longitude] for map placement | `[-1.5, 35.15]` |
| `dates` | String | Best visiting dates or season | `"July - October"` |
| `category` | String | Must be one of: `wildlife`, `cultural`, `coastal`, `mountains` | `"wildlife"` |
| `order` | Number | Display order (lower numbers appear first) | `7` |
| `icon` | String | Emoji representing the destination | `"🦁"` |
| `shortDescription` | String | 1-2 sentence summary (used in cards and map popups) | `"Kenya's most celebrated safari..."` |
| `fullDescription` | String | Full multi-paragraph description | `"The Masai Mara National Reserve..."` |
| `activities` | Array | List of activities available | `["Game drives", "Hot air balloon"]` |
| `lodges` | Array | Accommodation options (see structure below) | See lodge structure |
| `links` | Array | Useful external links (see structure below) | See link structure |
| `amenities` | Array | Key features/highlights | `["Big Five", "Great Migration"]` |

### Lodge Structure

```json
{
  "name": "Lodge Name",
  "description": "Brief description of the lodge",
  "link": "https://www.lodgewebsite.com"
}
```

### Link Structure

```json
{
  "text": "Link display text",
  "url": "https://www.example.com",
  "icon": "🌍"
}
```

---

## Categories

Destinations must belong to one of these four categories:

| Category | Color | Icon | Usage |
|----------|-------|------|-------|
| `wildlife` | Green (#059669) | 🦁 | Safari destinations, national parks, wildlife reserves |
| `cultural` | Orange (#d97706) | 🎭 | Cultural sites, cities, Maasai villages |
| `coastal` | Blue (#0ea5e9) | 🏖️ | Beaches, islands, coastal destinations |
| `mountains` | Purple (#7c3aed) | ⛰️ | Mountain destinations, trekking sites |

Categories determine:
- Color scheme on the destination page
- Filter groups on the map and places page
- Visual styling throughout the site

---

## Images

### Adding Destination Images

1. **Name your image file** to match the destination slug:
   - Destination: `"Masai Mara National Reserve"`
   - Slug: `"masai-mara"`
   - Image file: `images/masai-mara.jpg`

2. **Supported formats**: JPG, PNG, WebP

3. **Recommended specs**:
   - Width: 1200-1600px
   - Height: 800-1000px
   - File size: < 500KB (optimize for web)
   - Aspect ratio: 16:9 or 3:2

4. **Image attribution**: Document sources in `IMAGE_SOURCES.md`

### Image Loading Logic

The system automatically looks for images using this pattern:
```
images/{destination-slug}.jpg
```

If the slug is `masai-mara`, it loads `images/masai-mara.jpg`.

---

## Testing Your Changes

### Local Testing

1. **Serve the site locally**:
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node.js
   npx http-server
   ```

2. **Open in browser**: `http://localhost:8000`

3. **Test these pages**:
   - **Places Page** (`places.html`) - Check if your destination appears in the grid
   - **Interactive Map** (`map.html`) - Verify the marker appears at correct coordinates
   - **Destination Page** (`destination.html?slug=your-slug`) - View the full page

### Validation Checklist

- [ ] Destination appears on places page
- [ ] Destination marker appears on map at correct location
- [ ] Map popup shows correct information
- [ ] Clicking place card navigates to destination page
- [ ] Destination page loads without errors
- [ ] All sections render correctly (activities, lodges, amenities, links)
- [ ] Category colors display correctly
- [ ] Images load properly
- [ ] External links work
- [ ] No console errors in browser developer tools

---

## Troubleshooting

### Destination Not Appearing

**Problem**: Added a destination but it doesn't show up

**Solutions**:
1. Check JSON syntax - use a JSON validator (https://jsonlint.com)
2. Ensure all required fields are present
3. Verify the `id` is unique
4. Check that `category` is one of: `wildlife`, `cultural`, `coastal`, `mountains`
5. Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Map Marker in Wrong Location

**Problem**: Marker appears in the wrong place

**Solutions**:
1. Verify coordinates format: `[latitude, longitude]`
2. Check coordinate values:
   - Latitude: Kenya ranges from approximately -4.5° to 5.0°
   - Longitude: Kenya ranges from approximately 34.0° to 42.0°
3. Use Google Maps to find exact coordinates (right-click → "What's here?")

### Images Not Loading

**Problem**: Images don't display on destination pages

**Solutions**:
1. Verify image filename matches slug exactly: `images/{slug}.jpg`
2. Check image format (JPG, PNG, WebP supported)
3. Ensure image is in the `images/` directory
4. Check file permissions (should be readable)
5. Try lowercase filename with no spaces or special characters

### JSON Syntax Errors

**Problem**: "Error loading destination data" alert appears

**Solutions**:
1. **Validate JSON**: Copy your `destinations.json` content to https://jsonlint.com
2. **Common mistakes**:
   - Missing comma between objects
   - Trailing comma after last item
   - Unescaped quotes in strings (use `\"` for quotes in text)
   - Missing closing brackets `]` or braces `}`
3. **Fix format**: Use a code editor with JSON validation (VS Code, Sublime Text)

### Destination Page Shows Error

**Problem**: "Destination Not Found" message appears

**Solutions**:
1. Check URL parameter: `destination.html?slug=correct-slug`
2. Verify slug in JSON matches URL slug exactly (case-sensitive)
3. Ensure slug contains only lowercase letters, numbers, and hyphens
4. Check browser console for error messages (F12 → Console tab)

---

## Examples

### Example 1: Wildlife Safari Destination

```json
{
  "id": 16,
  "slug": "meru-national-park",
  "name": "Meru National Park",
  "coordinates": [0.0536, 38.1908],
  "dates": "July - October & January - March",
  "category": "wildlife",
  "order": 16,
  "icon": "🐘",
  "shortDescription": "Remote wilderness park featured in Born Free, with diverse wildlife and pristine landscapes.",
  "fullDescription": "Meru National Park, located east of Meru Town, is one of Kenya's lesser-known gems. Made famous by the book and film 'Born Free,' this 870-square-kilometer park offers an authentic wilderness experience with minimal tourist traffic. The park features a rich diversity of wildlife including lions, leopards, cheetahs, elephants, and over 400 bird species. The landscape varies from woodlands and grasslands to riverine forests along the Tana River.",
  "activities": [
    "Game drives with minimal vehicle congestion",
    "Visit Elsa's grave from Born Free fame",
    "Adamson's Falls viewing",
    "Bird watching with 400+ species",
    "Bush walks with armed ranger escorts"
  ],
  "lodges": [
    {
      "name": "Elsa's Kopje",
      "description": "Luxury lodge built into a hillside with panoramic views",
      "link": "https://www.elsaskopje.com"
    }
  ],
  "links": [
    {
      "text": "Kenya Wildlife Service",
      "url": "https://www.kws.go.ke/content/meru-national-park",
      "icon": "🌍"
    }
  ],
  "amenities": ["Born Free History", "Low Tourism", "Big Five", "Pristine Wilderness", "400+ Birds"]
}
```

### Example 2: Coastal Beach Destination

```json
{
  "id": 17,
  "slug": "watamu",
  "name": "Watamu",
  "coordinates": [-3.3612, 40.0351],
  "dates": "October - March",
  "category": "coastal",
  "order": 17,
  "icon": "🏝️",
  "shortDescription": "Pristine marine park with coral reefs, sea turtles, and some of Kenya's most beautiful beaches.",
  "fullDescription": "Watamu is a small coastal town located 90 miles north of Mombasa, renowned for its stunning white sand beaches and vibrant marine life. The Watamu Marine National Park protects one of East Africa's most spectacular coral reef ecosystems. The area is particularly famous for sea turtle conservation, with the Local Ocean Trust operating a turtle watch program. Watamu's three main beaches - Watamu Bay, Turtle Bay, and Blue Lagoon - offer pristine sand and crystal-clear waters perfect for swimming and snorkeling.",
  "activities": [
    "Snorkeling and diving in marine park",
    "Sea turtle conservation volunteering",
    "Dhow sailing excursions",
    "Visit Gede Ruins ancient Swahili settlement",
    "Mida Creek kayaking through mangroves",
    "Deep sea fishing"
  ],
  "lodges": [
    {
      "name": "Hemingways Watamu",
      "description": "Boutique beachfront resort with 76 rooms and dive center",
      "link": "https://www.hemingways-collection.com/watamu"
    },
    {
      "name": "Turtle Bay Beach Club",
      "description": "Family-friendly resort on Turtle Bay beach",
      "link": "https://www.turtlebay-kenya.com"
    }
  ],
  "links": [
    {
      "text": "Watamu Marine Park",
      "url": "https://www.kws.go.ke/content/watamu-marine-national-park",
      "icon": "🌊"
    },
    {
      "text": "Local Ocean Trust",
      "url": "https://www.localocean.org",
      "icon": "🐢"
    }
  ],
  "amenities": ["Marine Park", "Coral Reefs", "Sea Turtles", "White Sand Beaches", "Mangrove Kayaking", "Ancient Ruins"]
}
```

### Example 3: Mountain/Trekking Destination

```json
{
  "id": 18,
  "slug": "chyulu-hills",
  "name": "Chyulu Hills",
  "coordinates": [-2.6667, 37.8833],
  "dates": "Year-round, June - October dry season",
  "category": "mountains",
  "order": 18,
  "icon": "🌋",
  "shortDescription": "Young volcanic hills with world's longest lava tube, grasslands, and views of Kilimanjaro.",
  "fullDescription": "The Chyulu Hills are a picturesque range of volcanic hills stretching southeast from Nairobi. These are some of the youngest mountains on Earth, formed by volcanic activity less than 500 years ago. The hills contain Leviathan Cave, one of the world's longest lava tubes at 11 kilometers. The Chyulu Hills National Park protects rolling grasslands, indigenous forests, and remarkable biodiversity. On clear mornings, Mount Kilimanjaro dominates the southern horizon, while to the north, Mount Kenya is visible.",
  "activities": [
    "Leviathan Cave exploration with expert guides",
    "Multi-day hiking through volcanic landscapes",
    "Mountain biking on park trails",
    "Wildlife viewing including elephants and buffalo",
    "Kilimanjaro photography from grasslands",
    "Camping under the stars"
  ],
  "lodges": [
    {
      "name": "Ol Donyo Lodge",
      "description": "Luxury eco-lodge with 10 suites and private plunge pools",
      "link": "https://www.greatplainsconservation.com/ol-donyo"
    },
    {
      "name": "Campi ya Kanzi",
      "description": "Maasai-owned eco-lodge with spectacular views",
      "link": "https://www.maasai.com"
    }
  ],
  "links": [
    {
      "text": "Chyulu Hills Conservation",
      "url": "https://www.kws.go.ke/content/chyulu-hills-national-park",
      "icon": "🌋"
    }
  ],
  "amenities": ["Volcanic Landscapes", "Lava Tubes", "Kilimanjaro Views", "Mountain Biking", "Young Mountains", "Eco-Lodges"]
}
```

---

## Best Practices

### Writing Descriptions

**Short Description (160-200 characters)**:
- One or two punchy sentences
- Highlight the most unique or compelling feature
- Use active, engaging language
- Example: "Home to the world-famous Great Migration and exceptional Big Five sightings."

**Full Description (3-5 paragraphs)**:
- First paragraph: Overview and location
- Second paragraph: Key features and attractions
- Third paragraph: Wildlife/activities/culture
- Fourth paragraph: Best time to visit and practical info
- Use specific numbers and facts when possible

### Activity Lists

- Start with most popular/unique activities first
- Be specific: "Hot air balloon safari at sunrise" vs. "Balloon ride"
- Include 5-8 activities per destination
- Mention difficulty levels when relevant

### Lodge Selection

- Include 2-4 lodges per destination
- Provide variety: budget, mid-range, luxury
- Include direct booking links when available
- Keep descriptions concise (10-15 words)

### Amenities

- List 4-6 key highlights
- Use short phrases (2-4 words)
- Make them scannable and enticing
- Examples: "Big Five", "UNESCO Heritage", "Pristine Beaches"

---

## Need Help?

### Resources

- **JSON Validation**: https://jsonlint.com
- **Find Coordinates**: https://www.google.com/maps (right-click → "What's here?")
- **Emoji Picker**: https://emojipedia.org
- **Image Optimization**: https://tinypng.com

### Support

If you encounter issues not covered in this guide:

1. Check browser console for error messages (F12 → Console)
2. Validate your JSON syntax
3. Compare your destination structure to existing examples
4. Check that all file paths are correct
5. Verify the website is being served (not opened as file://)

---

## Version History

- **v2.0** (2025-11-24) - Refactored to dynamic JSON-based content system
- **v1.0** - Initial static HTML version with individual destination pages

---

**Last Updated**: November 24, 2025

**Remember**: You only need to edit `data/destinations.json` to manage all destination content. No code changes required!
