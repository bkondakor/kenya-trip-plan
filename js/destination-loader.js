// destination-loader.js - Dynamically loads and renders destination pages

// Get destination slug from URL parameter
function getDestinationSlug() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('slug') || urlParams.get('id');
}

// Get category color based on category type
function getCategoryColor(category) {
    const colors = {
        wildlife: '#059669',
        cultural: '#d97706',
        coastal: '#0ea5e9',
        mountains: '#7c3aed'
    };
    return colors[category] || '#059669';
}

// Load destinations from JSON file
async function loadDestinations() {
    try {
        const response = await fetch('data/destinations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.destinations;
    } catch (error) {
        console.error('Error loading destinations:', error);
        throw error;
    }
}

// Find destination by slug
function findDestinationBySlug(destinations, slug) {
    return destinations.find(dest =>
        dest.slug === slug ||
        dest.slug.toLowerCase() === slug.toLowerCase() ||
        dest.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
    );
}

// Render destination page
function renderDestination(destination) {
    const category = destination.category;
    const categoryColor = getCategoryColor(category);

    // Update page title
    document.getElementById('pageTitle').textContent = `${destination.name} - Kenya 2026 Adventure`;

    // Update breadcrumb
    document.getElementById('breadcrumbName').textContent = destination.name;
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.style.color = categoryColor;
    });

    // Update hero section
    const heroSection = document.getElementById('heroSection');
    heroSection.className = `hero-destination ${category}`;
    document.getElementById('heroTitle').textContent = `${destination.icon} ${destination.name}`;
    document.getElementById('heroDates').textContent = destination.dates;
    document.getElementById('heroShort').textContent = destination.shortDescription;

    // Update about section
    document.getElementById('aboutTitle').textContent = `About ${destination.name}`;
    document.getElementById('aboutTitle').style.color = categoryColor;
    document.getElementById('aboutContent').textContent = destination.fullDescription;

    // Update info box
    document.getElementById('infoDates').textContent = destination.dates;

    // Update activities section
    document.getElementById('activitiesTitle').textContent = 'Activities & Experiences';
    document.getElementById('activitiesTitle').style.color = categoryColor;

    const activitiesList = document.getElementById('activitiesList');
    activitiesList.innerHTML = destination.activities.map(activity => `
        <div class="activity-item ${category}">
            <span class="activity-icon ${category}">${destination.icon}</span>
            <div>
                <p class="text-gray-700">${activity}</p>
            </div>
        </div>
    `).join('');

    // Update lodges section
    document.getElementById('lodgesTitle').textContent = 'Where to Stay';
    document.getElementById('lodgesTitle').style.color = categoryColor;

    const lodgesList = document.getElementById('lodgesList');
    lodgesList.innerHTML = destination.lodges.map(lodge => `
        <div class="lodge-card ${category}">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">${lodge.name}</h3>
            <p class="text-gray-700 mb-4">${lodge.description}</p>
            <a href="${lodge.link}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition" style="background-color: ${categoryColor}">
                Visit Website →
            </a>
        </div>
    `).join('');

    // Update amenities section
    document.getElementById('amenitiesTitle').textContent = 'What Makes It Special';
    document.getElementById('amenitiesTitle').style.color = categoryColor;

    const amenitiesGrid = document.getElementById('amenitiesGrid');
    amenitiesGrid.innerHTML = destination.amenities.map(amenity => `
        <div class="p-4 rounded-lg text-center" style="background-color: ${categoryColor}15">
            <div class="text-3xl mb-2">${destination.icon}</div>
            <div class="font-semibold text-gray-900">${amenity}</div>
        </div>
    `).join('');

    // Update links section
    document.getElementById('linksTitle').textContent = 'Useful Links';
    document.getElementById('linksTitle').style.color = categoryColor;

    const linksList = document.getElementById('linksList');
    linksList.innerHTML = destination.links.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition" style="background-color: ${categoryColor}15; color: ${categoryColor}">
            <span>${link.icon}</span>
            <span>${link.text}</span>
        </a>
    `).join('') + `
        <a href="places.html" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
            <span>📍</span>
            <span>Back to All Places</span>
        </a>
        <a href="map.html" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
            <span>🗺️</span>
            <span>View on Map</span>
        </a>
    `;

    // Show main content
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

// Show error state
function showError() {
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('errorState').classList.remove('hidden');
}

// Initialize page on load
async function initializePage() {
    const slug = getDestinationSlug();

    if (!slug) {
        console.error('No destination slug provided');
        showError();
        return;
    }

    try {
        const destinations = await loadDestinations();
        const destination = findDestinationBySlug(destinations, slug);

        if (!destination) {
            console.error('Destination not found:', slug);
            showError();
            return;
        }

        renderDestination(destination);
    } catch (error) {
        console.error('Error initializing page:', error);
        showError();
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
