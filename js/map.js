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
                <a href="places.html#${dest.id}" class="popup-link">View Full Details →</a>
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

    // Add arrow decorators for direction
    const arrowDecorator = L.polylineDecorator(routeLine, {
        patterns: [
            {
                offset: '50%',
                repeat: 200,
                symbol: L.Symbol.arrowHead({
                    pixelSize: 12,
                    polygon: false,
                    pathOptions: {
                        stroke: true,
                        weight: 2,
                        color: '#047857'
                    }
                })
            }
        ]
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
