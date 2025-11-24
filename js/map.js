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
let customRouteLine;
let activeFilters = new Set(['wildlife', 'cultural', 'coastal', 'mountains']);

// Trip planner state
let myTrip = {
    destinations: [], // Array of destination IDs in custom order
    name: 'My Kenya Adventure',
    createdDate: new Date().toISOString()
};

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
                <button
                    id="tripBtn-${dest.id}"
                    class="popup-trip-btn"
                    onclick="toggleDestinationInTrip(${dest.id})"
                    style="margin-bottom: 8px;">
                    <span class="trip-btn-icon">✈️</span>
                    <span class="trip-btn-text">Add to My Trip</span>
                </button>
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

// ========================================
// TRIP PLANNER FUNCTIONS
// ========================================

// Load trip from localStorage
function loadTripFromStorage() {
    const savedTrip = localStorage.getItem('kenyaTripPlan');
    if (savedTrip) {
        try {
            myTrip = JSON.parse(savedTrip);
            updateTripUI();
        } catch (e) {
            console.error('Failed to load trip from storage:', e);
        }
    }
}

// Save trip to localStorage
function saveTripToStorage() {
    try {
        localStorage.setItem('kenyaTripPlan', JSON.stringify(myTrip));
    } catch (e) {
        console.error('Failed to save trip to storage:', e);
    }
}

// Check if destination is in trip
function isInTrip(destId) {
    return myTrip.destinations.includes(destId);
}

// Add destination to trip
function addDestinationToTrip(destId) {
    if (!isInTrip(destId)) {
        myTrip.destinations.push(destId);
        saveTripToStorage();
        updateTripUI();
        updateMarkerStyles();
        updateCustomRoute();
    }
}

// Remove destination from trip
function removeDestinationFromTrip(destId) {
    const index = myTrip.destinations.indexOf(destId);
    if (index > -1) {
        myTrip.destinations.splice(index, 1);
        saveTripToStorage();
        updateTripUI();
        updateMarkerStyles();
        updateCustomRoute();
    }
}

// Toggle destination in trip (add if not present, remove if present)
function toggleDestinationInTrip(destId) {
    if (isInTrip(destId)) {
        removeDestinationFromTrip(destId);
    } else {
        addDestinationToTrip(destId);
    }
}

// Reorder destination in trip
function reorderTripDestination(oldIndex, newIndex) {
    const [removed] = myTrip.destinations.splice(oldIndex, 1);
    myTrip.destinations.splice(newIndex, 0, removed);
    saveTripToStorage();
    updateTripUI();
    updateCustomRoute();
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Calculate total trip distance and travel time
function calculateTripStats() {
    if (myTrip.destinations.length < 2) {
        return { totalDistance: 0, totalTime: 0, legs: [] };
    }

    let totalDistance = 0;
    const legs = [];

    for (let i = 0; i < myTrip.destinations.length - 1; i++) {
        const currentDest = destinations.find(d => d.id === myTrip.destinations[i]);
        const nextDest = destinations.find(d => d.id === myTrip.destinations[i + 1]);

        if (currentDest && nextDest) {
            const distance = calculateDistance(
                currentDest.coordinates[0],
                currentDest.coordinates[1],
                nextDest.coordinates[0],
                nextDest.coordinates[1]
            );
            totalDistance += distance;
            legs.push({
                from: currentDest.name,
                to: nextDest.name,
                distance: distance
            });
        }
    }

    // Estimate travel time (assuming average speed of 60 km/h)
    const totalTime = totalDistance / 60;

    return { totalDistance, totalTime, legs };
}

// Update trip UI
function updateTripUI() {
    const emptyState = document.getElementById('emptyTripState');
    const tripList = document.getElementById('tripDestinationsList');
    const tripSummary = document.getElementById('tripSummary');
    const clearBtn = document.getElementById('clearTripBtn');
    const exportBtn = document.getElementById('exportTripBtn');

    if (myTrip.destinations.length === 0) {
        emptyState.style.display = 'block';
        tripList.innerHTML = '';
        tripSummary.classList.add('hidden');
        clearBtn.disabled = true;
        exportBtn.disabled = true;
    } else {
        emptyState.style.display = 'none';
        clearBtn.disabled = false;
        exportBtn.disabled = false;

        // Render trip destinations
        tripList.innerHTML = myTrip.destinations.map((destId, index) => {
            const dest = destinations.find(d => d.id === destId);
            if (!dest) return '';

            // Calculate distance from previous destination
            let distanceInfo = '';
            if (index > 0) {
                const prevDest = destinations.find(d => d.id === myTrip.destinations[index - 1]);
                if (prevDest) {
                    const distance = calculateDistance(
                        prevDest.coordinates[0],
                        prevDest.coordinates[1],
                        dest.coordinates[0],
                        dest.coordinates[1]
                    );
                    const travelTime = distance / 60;
                    distanceInfo = `${Math.round(distance)} km (~${travelTime.toFixed(1)}h from previous)`;
                }
            } else {
                distanceInfo = 'Starting point';
            }

            return `
                <div class="trip-destination-item" draggable="true" data-dest-id="${destId}" data-index="${index}">
                    <div class="trip-dest-number">${index + 1}</div>
                    <div class="trip-dest-icon ${dest.category}">${dest.icon}</div>
                    <div class="trip-dest-info">
                        <div class="trip-dest-name">${dest.name}</div>
                        <div class="trip-dest-distance">${distanceInfo}</div>
                    </div>
                    <button class="trip-dest-remove" onclick="removeDestinationFromTrip(${destId})" title="Remove">✕</button>
                </div>
            `;
        }).join('');

        // Setup drag and drop
        setupDragAndDrop();

        // Update summary
        const stats = calculateTripStats();
        tripSummary.classList.remove('hidden');
        document.getElementById('tripDestCount').textContent = myTrip.destinations.length;
        document.getElementById('tripTotalDistance').textContent = `${Math.round(stats.totalDistance)} km`;
        document.getElementById('tripTravelTime').textContent = `${stats.totalTime.toFixed(1)} hours`;
    }
}

// Setup drag and drop for trip items
function setupDragAndDrop() {
    const tripItems = document.querySelectorAll('.trip-destination-item');

    tripItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.trip-destination-item').forEach(item => {
        item.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    if (this !== draggedElement) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (draggedElement !== this) {
        const oldIndex = parseInt(draggedElement.dataset.index);
        const newIndex = parseInt(this.dataset.index);
        reorderTripDestination(oldIndex, newIndex);
    }

    return false;
}

// Update marker styles based on trip selection
function updateMarkerStyles() {
    destinations.forEach(dest => {
        const marker = markers[dest.id];
        if (marker) {
            const isSelected = isInTrip(dest.id);
            const markerElement = marker.getElement();

            if (markerElement) {
                if (isSelected) {
                    markerElement.classList.add('marker-selected');
                } else {
                    markerElement.classList.remove('marker-selected');
                }
            }
        }
    });

    // Update popup button states
    updatePopupButtons();
}

// Update popup button states
function updatePopupButtons() {
    destinations.forEach(dest => {
        const btn = document.getElementById(`tripBtn-${dest.id}`);
        if (btn) {
            const inTrip = isInTrip(dest.id);
            const textSpan = btn.querySelector('.trip-btn-text');
            const iconSpan = btn.querySelector('.trip-btn-icon');

            if (inTrip) {
                btn.classList.add('in-trip');
                if (textSpan) textSpan.textContent = 'Remove from Trip';
                if (iconSpan) iconSpan.textContent = '✓';
            } else {
                btn.classList.remove('in-trip');
                if (textSpan) textSpan.textContent = 'Add to My Trip';
                if (iconSpan) iconSpan.textContent = '✈️';
            }
        }
    });
}

// Update custom route line
function updateCustomRoute() {
    // Remove existing custom route
    if (customRouteLine) {
        map.removeLayer(customRouteLine);
        customRouteLine = null;
    }

    // Only draw if we have 2+ destinations
    if (myTrip.destinations.length < 2) {
        return;
    }

    // Get coordinates in trip order
    const routeCoordinates = myTrip.destinations
        .map(destId => {
            const dest = destinations.find(d => d.id === destId);
            return dest ? dest.coordinates : null;
        })
        .filter(coord => coord !== null);

    if (routeCoordinates.length < 2) {
        return;
    }

    // Create custom polyline (different style from default route)
    customRouteLine = L.polyline(routeCoordinates, {
        color: '#3b82f6',
        weight: 4,
        opacity: 0.9,
        lineJoin: 'round',
        lineCap: 'round'
    }).addTo(map);

    // Bring custom route to front so it's always visible
    customRouteLine.bringToFront();
}

// Clear trip
function clearTrip() {
    if (myTrip.destinations.length === 0) return;

    if (confirm('Are you sure you want to clear your entire trip plan?')) {
        myTrip.destinations = [];
        saveTripToStorage();
        updateTripUI();
        updateMarkerStyles();
        updateCustomRoute();
    }
}

// Export functions
function openExportModal() {
    if (myTrip.destinations.length === 0) {
        alert('Please add some destinations to your trip before exporting.');
        return;
    }
    document.getElementById('exportModal').classList.remove('hidden');
}

function closeExportModal() {
    document.getElementById('exportModal').classList.add('hidden');
}

function exportAsJSON() {
    const tripData = {
        ...myTrip,
        destinations: myTrip.destinations.map(destId => {
            const dest = destinations.find(d => d.id === destId);
            return {
                id: destId,
                name: dest.name,
                coordinates: dest.coordinates,
                category: dest.category
            };
        }),
        stats: calculateTripStats(),
        exportedDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(tripData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-kenya-trip.json';
    link.click();
    URL.revokeObjectURL(url);

    closeExportModal();
    alert('✅ Trip exported successfully!');
}

function copyTripText() {
    const stats = calculateTripStats();
    const tripText = `
MY KENYA TRIP PLAN
==================

${myTrip.destinations.map((destId, index) => {
    const dest = destinations.find(d => d.id === destId);
    return `${index + 1}. ${dest.name} (${dest.category})`;
}).join('\n')}

TRIP SUMMARY
------------
Total Destinations: ${myTrip.destinations.length}
Total Distance: ${Math.round(stats.totalDistance)} km
Estimated Travel Time: ${stats.totalTime.toFixed(1)} hours

ROUTE DETAILS
-------------
${stats.legs.map((leg, i) =>
    `${i + 1}. ${leg.from} → ${leg.to}: ${Math.round(leg.distance)} km`
).join('\n')}

Created: ${new Date(myTrip.createdDate).toLocaleDateString()}
Exported: ${new Date().toLocaleDateString()}
    `.trim();

    navigator.clipboard.writeText(tripText).then(() => {
        closeExportModal();
        alert('✅ Trip details copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('❌ Failed to copy to clipboard');
    });
}

function printTrip() {
    const stats = calculateTripStats();
    const printWindow = window.open('', '_blank');

    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Kenya Trip Plan</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    line-height: 1.6;
                }
                h1 {
                    color: #047857;
                    border-bottom: 3px solid #10b981;
                    padding-bottom: 10px;
                }
                h2 {
                    color: #059669;
                    margin-top: 30px;
                }
                .destination {
                    padding: 15px;
                    margin: 10px 0;
                    background: #f0fdf4;
                    border-left: 4px solid #10b981;
                    border-radius: 4px;
                }
                .destination-number {
                    display: inline-block;
                    background: #059669;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 30px;
                    font-weight: bold;
                    margin-right: 10px;
                }
                .stats {
                    background: #ecfdf5;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }
                .stat-item {
                    padding: 10px;
                    background: white;
                    border-radius: 4px;
                }
                .stat-label {
                    font-size: 14px;
                    color: #6b7280;
                }
                .stat-value {
                    font-size: 24px;
                    font-weight: bold;
                    color: #047857;
                }
                .route-leg {
                    padding: 10px;
                    margin: 5px 0;
                    background: white;
                    border-radius: 4px;
                    border: 1px solid #d1fae5;
                }
                @media print {
                    body {
                        margin: 0;
                        padding: 20px;
                    }
                }
            </style>
        </head>
        <body>
            <h1>🦁 My Kenya Trip Plan</h1>

            <div class="stats">
                <h2>Trip Summary</h2>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-label">Destinations</div>
                        <div class="stat-value">${myTrip.destinations.length}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Total Distance</div>
                        <div class="stat-value">${Math.round(stats.totalDistance)} km</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Est. Travel Time</div>
                        <div class="stat-value">${stats.totalTime.toFixed(1)} hrs</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Created</div>
                        <div class="stat-value" style="font-size: 16px;">${new Date(myTrip.createdDate).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>

            <h2>Destinations</h2>
            ${myTrip.destinations.map((destId, index) => {
                const dest = destinations.find(d => d.id === destId);
                return `
                    <div class="destination">
                        <span class="destination-number">${index + 1}</span>
                        <strong>${dest.name}</strong> - ${dest.category}
                        <br>
                        <small>📅 ${dest.dates}</small>
                    </div>
                `;
            }).join('')}

            <h2>Route Details</h2>
            ${stats.legs.map((leg, i) => `
                <div class="route-leg">
                    ${i + 1}. ${leg.from} → ${leg.to}: <strong>${Math.round(leg.distance)} km</strong> (~${(leg.distance / 60).toFixed(1)} hours)
                </div>
            `).join('')}

            <p style="margin-top: 40px; text-align: center; color: #6b7280;">
                Generated on ${new Date().toLocaleString()}
            </p>

            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    closeExportModal();
}

function shareTrip() {
    // Encode trip data in URL
    const tripIds = myTrip.destinations.join(',');
    const shareUrl = `${window.location.origin}${window.location.pathname}?trip=${tripIds}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
        closeExportModal();
        alert(`✅ Shareable link copied to clipboard!\n\n${shareUrl}\n\nAnyone with this link can view your trip plan.`);
    }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback: show URL in prompt
        prompt('Copy this shareable link:', shareUrl);
        closeExportModal();
    });
}

// Load trip from URL parameters
function loadTripFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const tripParam = urlParams.get('trip');

    if (tripParam) {
        const destIds = tripParam.split(',').map(id => parseInt(id)).filter(id => !isNaN(id));
        if (destIds.length > 0) {
            myTrip.destinations = destIds;
            saveTripToStorage();
            updateTripUI();
            updateMarkerStyles();
            updateCustomRoute();
        }
    }
}

// ========================================
// END TRIP PLANNER FUNCTIONS
// ========================================

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

    // Initialize trip planner
    loadTripFromStorage();
    loadTripFromURL();
    updateTripUI();
    updateMarkerStyles();
    updateCustomRoute();

    // Setup trip planner event listeners
    document.getElementById('clearTripBtn').addEventListener('click', clearTrip);
    document.getElementById('exportTripBtn').addEventListener('click', openExportModal);

    // Add resize handler to adjust map
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
});
