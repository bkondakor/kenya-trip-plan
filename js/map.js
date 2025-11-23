// Destinations Data with Coordinates
const destinations = [
    {
        id: 1,
        name: "Nairobi",
        coordinates: [-1.2921, 36.8219],
        dates: "January 17 & 31, 2026",
        category: "cultural",
        order: 1,
        shortDescription: "Kenya's vibrant capital serves as your gateway. Modern hotels provide comfortable rest before and after your wilderness adventures.",
        activities: [
            "Airport transfers and rest before safari",
            "Optional: Giraffe Centre visit",
            "Optional: David Sheldrick Elephant Orphanage",
            "Dining at local restaurants"
        ],
        icon: "🏙️"
    },
    {
        id: 2,
        name: "Laikipia Plateau / Lewa",
        coordinates: [0.2167, 37.4500],
        dates: "January 18-20, 2026",
        category: "wildlife",
        order: 2,
        shortDescription: "A UNESCO World Heritage Site protecting 10% of Kenya's entire rhino population. Experience exclusive wildlife encounters with minimal vehicle congestion.",
        activities: [
            "Rhino tracking on foot with expert guides",
            "Game drives across 65,000 acres",
            "Camel walks through conservancy",
            "Samburu cultural visits",
            "Horseback safari at Lewa Wilderness"
        ],
        icon: "🦏"
    },
    {
        id: 3,
        name: "Samburu / Sera",
        coordinates: [0.9333, 37.5333],
        dates: "January 21-23, 2026",
        category: "wildlife",
        order: 3,
        shortDescription: "Home to East Africa's first and only community-owned black rhino sanctuary. Track rhinos on foot through doum palm groves.",
        activities: [
            "On-foot black rhino tracking (only place in East Africa)",
            "Samburu Special Five wildlife viewing",
            "Reteti Elephant Sanctuary visit",
            "Singing Wells - ancient Samburu tradition",
            "Game drives along Ewaso Nyiro River"
        ],
        icon: "🦒"
    },
    {
        id: 4,
        name: "Matthews Range",
        coordinates: [1.4500, 37.4000],
        dates: "January 24, 2026",
        category: "mountains",
        order: 4,
        shortDescription: "A pristine 'sky island' with tropical highland forest evolved in isolation for 10,000+ years. Home to 400+ forest elephants and melanistic leopards.",
        activities: [
            "Guided forest walks through ancient cedar forests",
            "Wildlife viewing including forest elephants",
            "Mountain stream swimming in crystal-clear pools",
            "Bird watching (200+ species)",
            "Camel-supported camping expeditions"
        ],
        icon: "⛰️"
    },
    {
        id: 5,
        name: "Loita Hills",
        coordinates: [-1.5833, 35.6667],
        dates: "January 25-26, 2026",
        category: "cultural",
        order: 5,
        shortDescription: "Experience the sacred 'Forest of the Lost Child' with authentic Maasai cultural immersion. 100% community-owned tourism.",
        activities: [
            "Multi-day hiking through sacred Maasai forest",
            "Maasai cultural immersion",
            "Entasopia Falls swimming and exploration",
            "Medicinal plant identification with healers",
            "Traditional ceremonies (when timing allows)"
        ],
        icon: "🌳"
    },
    {
        id: 6,
        name: "Lamu",
        coordinates: [-2.2717, 40.9020],
        dates: "January 27-31, 2026",
        category: "coastal",
        order: 6,
        shortDescription: "A UNESCO World Heritage Site with over 700 years of Swahili culture. Lamu Old Town remains car-free, navigated only by donkeys and dhows.",
        activities: [
            "Dhow sailing on traditional wooden vessels",
            "Lamu Old Town UNESCO heritage exploration",
            "Shela Beach relaxation and swimming",
            "Snorkeling in crystal-clear waters",
            "Swahili cooking class"
        ],
        icon: "⛵"
    },
    {
        id: 7,
        name: "Masai Mara National Reserve",
        coordinates: [-1.5, 35.15],
        dates: "July - October (Great Migration)",
        category: "wildlife",
        order: 7,
        shortDescription: "Kenya's most celebrated safari destination, home to the world-famous Great Migration and exceptional Big Five sightings.",
        activities: [
            "Game drives tracking the Big Five",
            "Great Migration river crossings (July-October)",
            "Hot air balloon safari at sunrise",
            "Maasai village cultural visits",
            "Photography safaris with expert guides",
            "Sundowner bush dinners under the stars"
        ],
        icon: "🦁"
    },
    {
        id: 8,
        name: "Amboseli National Park",
        coordinates: [-2.65, 37.25],
        dates: "June - October & January - February",
        category: "wildlife",
        order: 8,
        shortDescription: "Land of the Giants featuring iconic elephant herds against the backdrop of Mount Kilimanjaro. Home to over 1,000 elephants.",
        activities: [
            "Elephant watching with the largest herds in Kenya",
            "Kilimanjaro photography at sunrise and sunset",
            "Bird watching with over 400 species",
            "Maasai cultural experiences",
            "Observation Hill hikes for panoramic views",
            "Game drives through diverse habitats"
        ],
        icon: "🐘"
    },
    {
        id: 9,
        name: "Diani Beach",
        coordinates: [-4.29, 39.58],
        dates: "July - March",
        category: "coastal",
        order: 9,
        shortDescription: "Kenya's tropical paradise featuring 17 kilometers of pristine white sand beaches and crystal-clear turquoise waters.",
        activities: [
            "Snorkeling and diving on vibrant coral reefs",
            "Kitesurfing with world-class conditions",
            "Dolphin spotting and marine wildlife encounters",
            "Kaya Kinondo sacred forest walks",
            "Colobus Conservation sanctuary visits",
            "Deep sea fishing expeditions"
        ],
        icon: "🏖️"
    },
    {
        id: 10,
        name: "Lake Nakuru National Park",
        coordinates: [-0.3667, 36.0833],
        dates: "Year-round, June - March peak",
        category: "wildlife",
        order: 10,
        shortDescription: "The Pink Paradise featuring millions of flamingos and one of Africa's finest rhino sanctuaries in the Great Rift Valley.",
        activities: [
            "Flamingo spectacle viewing with millions of birds",
            "Rhino tracking in premier sanctuary",
            "Bird watching paradise with 450+ species",
            "Scenic viewpoints at Baboon Cliff and Lion Hill",
            "Wildlife game drives for Big Five",
            "Photography safari opportunities"
        ],
        icon: "🦩"
    },
    {
        id: 11,
        name: "Tsavo National Parks",
        coordinates: [-3.0, 38.5],
        dates: "June - October & January - March",
        category: "wildlife",
        order: 11,
        shortDescription: "Kenya's largest wilderness featuring the legendary red elephants and untamed African landscapes across nearly 22,000 square kilometers.",
        activities: [
            "Red elephant encounters in vast herds",
            "Mzima Springs exploration with underwater viewing",
            "Volcanic landscapes and Sheitani lava flows",
            "Big cat tracking including legendary lions",
            "Lugard Falls and Galana River visits",
            "Bird watching with 500+ species"
        ],
        icon: "🐘"
    },
    {
        id: 12,
        name: "Mount Kenya",
        coordinates: [-0.1521, 37.3084],
        dates: "January - February & July - October",
        category: "mountains",
        order: 12,
        shortDescription: "Africa's second-highest mountain, a UNESCO World Heritage Site with glaciers, alpine lakes, and unique afro-alpine ecosystems.",
        activities: [
            "Point Lenana summit trek (4,985m)",
            "Technical climbing to Batian and Nelion peaks",
            "Afro-alpine ecosystem exploration",
            "Glaciers and alpine lakes viewing",
            "Wildlife encounters in montane forests",
            "High-altitude bird watching with 130+ species"
        ],
        icon: "🏔️"
    },
    {
        id: 13,
        name: "Hell's Gate National Park",
        coordinates: [-0.9167, 36.3167],
        dates: "Year-round, June - March ideal",
        category: "wildlife",
        order: 13,
        shortDescription: "Kenya's only park where you can walk, cycle, and climb among wild animals. Dramatic gorges and geothermal activity.",
        activities: [
            "Cycling safari among zebras and giraffes",
            "Hell's Gate Gorge hiking through narrow canyon",
            "Rock climbing on Fischer's Tower and Central Tower",
            "Bird watching with 100+ species",
            "Geothermal exploration of steam vents",
            "Wildlife photography on foot"
        ],
        icon: "🚴"
    },
    {
        id: 14,
        name: "Lake Naivasha",
        coordinates: [-0.7667, 36.3667],
        dates: "Year-round, November - March peak birds",
        category: "wildlife",
        order: 14,
        shortDescription: "Freshwater oasis in the Rift Valley with boat safaris, Crescent Island walks among wildlife, and over 400 bird species.",
        activities: [
            "Boat safari to observe hippos and birdlife",
            "Crescent Island walking safari among wildlife",
            "Bird watching with 400+ species",
            "Elsamere Conservation Centre visit",
            "Hell's Gate National Park day trips",
            "Fishing for black bass and tilapia"
        ],
        icon: "🦛"
    }
];

// Category configurations
const categories = {
    wildlife: {
        name: "Wildlife & Safari",
        color: "#059669",
        count: 0,
        icon: "🦁"
    },
    cultural: {
        name: "Cultural",
        color: "#d97706",
        count: 0,
        icon: "🎭"
    },
    coastal: {
        name: "Coastal",
        color: "#0ea5e9",
        count: 0,
        icon: "🏖️"
    },
    mountains: {
        name: "Mountains",
        color: "#7c3aed",
        count: 0,
        icon: "⛰️"
    }
};

// Calculate category counts
destinations.forEach(dest => {
    categories[dest.category].count++;
});

// Map state
let map;
let markers = {};
let routeLine;
let activeFilters = new Set(['wildlife', 'cultural', 'coastal', 'mountains']);

// Initialize the map
function initMap() {
    // Create map centered on Kenya
    map = L.map('map', {
        center: [0.0236, 37.9062],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 5
    }).addTo(map);

    // Add markers for all destinations
    addMarkers();

    // Add route line
    updateRouteLine();

    // Hide loading overlay
    document.getElementById('loadingOverlay').classList.add('hidden');

    // Fit bounds to show all markers
    fitMapToMarkers();
}

// Create custom marker icon
function createCustomIcon(category, icon) {
    const color = categories[category].color;
    const iconHtml = `
        <div style="
            background: ${color};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border: 3px solid white;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        ">${icon}</div>
    `;

    return L.divIcon({
        html: iconHtml,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
}

// Add markers to map
function addMarkers() {
    destinations.forEach(dest => {
        const marker = L.marker(dest.coordinates, {
            icon: createCustomIcon(dest.category, dest.icon),
            title: dest.name
        });

        // Create popup content
        // Map destination IDs to their dedicated page URLs
        const destinationPages = {
            1: 'nairobi.html',
            2: 'laikipia.html',
            3: 'samburu.html',
            4: 'matthews.html',
            5: 'loita.html',
            6: 'lamu.html',
            7: 'masai-mara.html',
            8: 'amboseli.html',
            9: 'diani.html',
            10: 'lake-nakuru.html',
            11: 'tsavo.html',
            12: 'mount-kenya.html',
            13: 'hells-gate.html',
            14: 'lake-naivasha.html'
        };

        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${dest.icon} ${dest.name}</div>
                <div class="popup-dates">📅 ${dest.dates}</div>
                <div class="popup-description">${dest.shortDescription}</div>
                <div class="popup-activities">
                    <h4>Key Activities:</h4>
                    ${dest.activities.slice(0, 3).map(activity =>
                        `<div class="popup-activity">${activity}</div>`
                    ).join('')}
                    ${dest.activities.length > 3 ?
                        `<div class="popup-activity">+ ${dest.activities.length - 3} more activities</div>`
                        : ''
                    }
                </div>
                <a href="${destinationPages[dest.id]}" class="popup-link">View Full Details →</a>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });

        marker.addTo(map);
        markers[dest.id] = marker;
    });
}

// Update route line
function updateRouteLine() {
    // Remove existing route line
    if (routeLine) {
        map.removeLayer(routeLine);
    }

    // Check if route should be shown
    const routeToggle = document.getElementById('routeToggle');
    if (!routeToggle.checked) {
        return;
    }

    // Get coordinates in chronological order
    const routeCoordinates = destinations
        .sort((a, b) => a.order - b.order)
        .filter(dest => activeFilters.has(dest.category))
        .map(dest => dest.coordinates);

    if (routeCoordinates.length < 2) {
        return;
    }

    // Create polyline
    routeLine = L.polyline(routeCoordinates, {
        color: '#059669',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
        lineJoin: 'round'
    }).addTo(map);
}

// Fit map to show all visible markers
function fitMapToMarkers() {
    const visibleCoordinates = destinations
        .filter(dest => activeFilters.has(dest.category))
        .map(dest => dest.coordinates);

    if (visibleCoordinates.length === 0) {
        return;
    }

    const bounds = L.latLngBounds(visibleCoordinates);
    map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 10
    });
}

// Render legend
function renderLegend() {
    const legendContainer = document.getElementById('legendContainer');
    legendContainer.innerHTML = Object.entries(categories).map(([key, category]) => `
        <div class="legend-item" data-category="${key}">
            <div class="legend-marker ${key}">${category.icon}</div>
            <div class="legend-text">
                <div class="legend-name">${category.name}</div>
                <div class="legend-count">${category.count} destination${category.count !== 1 ? 's' : ''}</div>
            </div>
        </div>
    `).join('');
}

// Render filters
function renderFilters() {
    const filterContainer = document.getElementById('filterContainer');
    filterContainer.innerHTML = Object.entries(categories).map(([key, category]) => `
        <div class="filter-checkbox">
            <input type="checkbox" id="filter-${key}" value="${key}" checked>
            <label for="filter-${key}">${category.icon} ${category.name}</label>
        </div>
    `).join('');

    // Add event listeners
    filterContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
}

// Render destinations list
function renderDestinationsList() {
    const destinationsList = document.getElementById('destinationsList');

    const sortedDestinations = [...destinations].sort((a, b) => a.order - b.order);

    destinationsList.innerHTML = sortedDestinations.map(dest => `
        <div class="destination-list-item ${activeFilters.has(dest.category) ? '' : 'hidden'}"
             data-id="${dest.id}"
             data-category="${dest.category}">
            <div class="destination-icon ${dest.category}">${dest.icon}</div>
            <div class="destination-info">
                <h4>${dest.name}</h4>
                <p>${dest.dates}</p>
            </div>
        </div>
    `).join('');

    // Add click event listeners
    destinationsList.querySelectorAll('.destination-list-item').forEach(item => {
        item.addEventListener('click', () => {
            const destId = parseInt(item.dataset.id);
            focusOnDestination(destId);
        });
    });
}

// Focus on a specific destination
function focusOnDestination(destId) {
    const dest = destinations.find(d => d.id === destId);
    if (!dest || !markers[destId]) {
        return;
    }

    // Center map on marker
    map.setView(dest.coordinates, 10, {
        animate: true,
        duration: 1
    });

    // Open popup
    setTimeout(() => {
        markers[destId].openPopup();
    }, 500);
}

// Handle filter changes
function handleFilterChange(e) {
    const category = e.target.value;

    if (e.target.checked) {
        activeFilters.add(category);
    } else {
        activeFilters.delete(category);
    }

    updateMapVisibility();
}

// Update map marker visibility
function updateMapVisibility() {
    destinations.forEach(dest => {
        const marker = markers[dest.id];
        if (activeFilters.has(dest.category)) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }
        } else {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        }
    });

    // Update route line
    updateRouteLine();

    // Update destinations list
    document.querySelectorAll('.destination-list-item').forEach(item => {
        const category = item.dataset.category;
        if (activeFilters.has(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    // Fit map to visible markers
    fitMapToMarkers();
}

// Setup view toggle
function setupViewToggle() {
    const toggleBtns = document.querySelectorAll('.view-toggle-btn');
    const mapContainer = document.getElementById('map').parentElement;
    const sidebar = document.querySelector('.map-sidebar');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;

            // Update active state
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle view
            if (view === 'list') {
                mapContainer.style.display = 'none';
                sidebar.style.width = '100%';
                sidebar.style.maxHeight = 'none';
            } else {
                mapContainer.style.display = 'block';
                if (window.innerWidth > 1024) {
                    sidebar.style.width = '350px';
                } else {
                    sidebar.style.width = '100%';
                }
                sidebar.style.maxHeight = '';

                // Refresh map after visibility change
                setTimeout(() => {
                    map.invalidateSize();
                    fitMapToMarkers();
                }, 100);
            }
        });
    });
}

// Setup route toggle
function setupRouteToggle() {
    const routeToggle = document.getElementById('routeToggle');
    routeToggle.addEventListener('change', () => {
        updateRouteLine();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    initMap();

    // Render UI components
    renderLegend();
    renderFilters();
    renderDestinationsList();

    // Setup interactive elements
    setupViewToggle();
    setupRouteToggle();

    // Add resize handler to adjust map
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
});
