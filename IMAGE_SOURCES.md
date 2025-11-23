# Image Sources for Kenya Trip Webapp

This document provides direct links to free, high-quality images for each destination in the webapp.

## Free Image Resources

All images below are from these sources with free licenses:
- **[Unsplash](https://unsplash.com)** - Free to use, no attribution required
- **[Pexels](https://www.pexels.com)** - Free to use, no attribution required
- **[Pixabay](https://pixabay.com)** - Royalty-free, no attribution required
- **[Wikimedia Commons](https://commons.wikimedia.org)** - Various Creative Commons licenses

## Recommended Images by Destination

### 1. Laikipia Plateau / Lewa Conservancy

**Search Terms**: "Lewa Conservancy", "Kenya rhino", "Laikipia wildlife"

**Recommended Images**:
- [Unsplash: Kenya Safari Collection](https://unsplash.com/s/photos/kenya-safari)
- [Pixabay: Kenya Wildlife - 100,000+ images](https://pixabay.com/images/search/kenya%20wildlife/)
- Specific searches: "black rhino Kenya", "white rhino Lewa", "Kenya savanna"

**What to look for**:
- Wide savanna landscapes
- Rhinos (black or white)
- Mount Kenya in background
- Elephants on plains
- Acacia trees

**Suggested filename**: `laikipia-landscape.jpg`, `lewa-rhino.jpg`

---

### 2. Samburu & Sera Reserve

**Search Terms**: "Samburu Kenya", "reticulated giraffe", "Grevy zebra", "Samburu landscape"

**Recommended Images**:
- [Pixabay: Samburu - 70+ free images](https://pixabay.com/images/search/samburu/)
- [Pixabay: Samburu National Reserve - 20,000+ images](https://pixabay.com/images/search/samburu%20national%20reserve/)
- [Pixabay: Giraffe Kenya Safari](https://pixabay.com/p-562391)

**What to look for**:
- Reticulated giraffes (distinctive geometric patterns)
- Grevy's zebra (narrow stripes, large ears)
- Gerenuk standing on hind legs
- Samburu warriors/culture
- Desert landscape with doum palms
- Elephants at Ewaso Nyiro River

**Suggested filename**: `samburu-giraffe.jpg`, `samburu-landscape.jpg`, `grevys-zebra.jpg`

---

### 3. Matthews Range

**Search Terms**: "Matthews Range Kenya", "Kenya mountain forest", "Kenya cedar forest", "northern Kenya mountains"

**Recommended Images**:
- [Unsplash: African mountains](https://unsplash.com/s/photos/african-mountains)
- Search: "Kenya forest", "tropical mountain Kenya"

**What to look for**:
- Mountain peaks
- Dense forest canopy
- Highland landscapes
- Mist-covered mountains
- Ancient cedar trees

**Suggested filename**: `matthews-range.jpg`, `kenya-mountain-forest.jpg`

---

### 4. Loita Hills

**Search Terms**: "Loita Hills", "Maasai culture", "Kenya highlands", "Maasai warriors"

**Recommended Images**:
- [Unsplash: Maasai](https://unsplash.com/s/photos/maasai)
- Search: "Maasai beadwork", "Maasai manyatta", "Kenya rolling hills"

**What to look for**:
- Rolling green hills
- Maasai in traditional dress
- Traditional manyatta (homesteads)
- Maasai beadwork (close-up of colorful jewelry)
- Highland forest landscapes

**Suggested filename**: `loita-hills.jpg`, `maasai-culture.jpg`, `maasai-beadwork.jpg`

---

### 5. Lamu Archipelago

**Search Terms**: "Lamu Kenya", "Lamu dhow", "Lamu old town", "Swahili coast Kenya"

**Recommended Images**:
- [Pexels: Lamu Island in Kenya - 60,000+ images](https://www.pexels.com/search/lamu%20island%20in%20kenya/)
- Search: "dhow boat Kenya", "Swahili architecture", "Lamu beach"

**What to look for**:
- Traditional dhow sailboats (triangular sails)
- Lamu Old Town coral stone buildings
- Wooden carved doors with brass studs
- White sand beaches
- Narrow streets with donkeys
- Sunset over Indian Ocean
- Swahili coastal village

**Suggested filename**: `lamu-dhow.jpg`, `lamu-old-town.jpg`, `lamu-beach.jpg`, `swahili-door.jpg`

---

### 6. Nairobi

**Search Terms**: "Nairobi skyline", "Nairobi city", "Nairobi National Park"

**Recommended Images**:
- [Unsplash: Nairobi](https://unsplash.com/s/photos/nairobi)
- [Pixabay: Nairobi](https://pixabay.com/images/search/nairobi/)

**What to look for**:
- City skyline
- Modern buildings
- Nairobi National Park (wildlife with city in background)
- Busy streets and markets

**Suggested filename**: `nairobi-skyline.jpg`, `nairobi-city.jpg`

---

## How to Download and Add Images

### Step 1: Download Images

1. Visit the recommended link for each destination
2. Search using the provided search terms
3. Select high-quality images (minimum 1920x1080px recommended)
4. Download to the `images/` directory
5. Rename according to suggested filenames above

### Step 2: Optimize Images (Optional but Recommended)

Use online tools to compress images without losing quality:
- [TinyPNG](https://tinypng.com) - PNG compression
- [Squoosh](https://squoosh.app) - Various formats
- [ImageOptim](https://imageoptim.com) - Mac app

Target file size: 200-500 KB per image for web optimization

### Step 3: Update the Webapp

Images are referenced in `js/places.js`. Replace the placeholders:

```javascript
// Current (gradient placeholder):
image: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'

// Replace with (actual image):
image: 'images/laikipia-landscape.jpg'
```

### Step 4: Commit Changes

```bash
git add images/
git commit -m "Add destination photos"
git push
```

## Quick Download Commands

Once you have direct image URLs, you can download using `curl`:

```bash
# Example:
curl -o images/lamu-dhow.jpg "https://example.com/image-url.jpg"
```

## Attribution (If Required)

While Unsplash, Pexels, and Pixabay don't require attribution, it's good practice to credit photographers.

You can add credits to the footer or create a separate credits page:

```html
<div class="photo-credits">
  <h3>Photo Credits</h3>
  <ul>
    <li>Lamu Dhow: Photo by [Photographer] on Unsplash</li>
    <li>Samburu Giraffe: Photo by [Photographer] on Pixabay</li>
  </ul>
</div>
```

## Curated Collections

### Entire Collections to Browse:

1. **[Unsplash: Kenyan Safari](https://unsplash.com/s/photos/kenyan-safari)** - 100+ images
2. **[Unsplash: African Wildlife](https://unsplash.com/s/photos/african-wildlife)** - 500+ images
3. **[Pixabay: Kenya Safari](https://pixabay.com/images/search/kenya%20safari/)** - 10,000+ images
4. **[Pixabay: Kenya Wildlife](https://pixabay.com/images/search/kenya%20wildlife/)** - 100,000+ images
5. **[Pexels: Lamu Island](https://www.pexels.com/search/lamu%20island%20in%20kenya/)** - 60,000+ images

## Copyright & Licensing

✅ **Safe to use without attribution:**
- Unsplash (Unsplash License)
- Pexels (Pexels License)
- Pixabay (Pixabay License)

⚠️ **Check license before using:**
- Wikimedia Commons (various CC licenses - check each image)
- Getty Images, iStock, Shutterstock (requires purchase/license)

## Alternative: AI-Generated Images

If you prefer AI-generated images:
- [DALL-E 3](https://openai.com/dall-e-3) - High quality AI images
- [Midjourney](https://www.midjourney.com) - Artistic AI images

Example prompts:
- "Reticulated giraffe in Samburu National Reserve Kenya, photorealistic"
- "Traditional dhow sailboat at sunset in Lamu Kenya, photography"
- "Aerial view of Loita Hills Kenya with Maasai manyatta, drone photography"

---

**Last Updated**: November 2025
**Maintained by**: Kenya Trip Webapp Team
