// Destinations Data - Loaded from JSON file
let destinations = [];
let categoriesData = {};

// Load destinations from index file
async function loadDestinations() {
    try {
        // Load destinations index
        const destResponse = await fetch('data/destinations/index.json');
        if (!destResponse.ok) {
            throw new Error(`HTTP error! status: ${destResponse.status}`);
        }
        const destData = await destResponse.json();
        destinations = destData.destinations;

        // Load categories
        const catResponse = await fetch('data/categories.json');
        if (!catResponse.ok) {
            throw new Error(`HTTP error! status: ${catResponse.status}`);
        }
        const catData = await catResponse.json();
        categoriesData = catData.categories;

        // Merge category data into categories object
        Object.keys(categories).forEach(key => {
            if (categoriesData[key]) {
                categories[key] = { ...categories[key], ...categoriesData[key] };
            }
            categories[key].count = 0;
        });

        // Calculate category counts
        destinations.forEach(dest => {
            if (categories[dest.category]) {
                categories[dest.category].count++;
            }
        });

        return true;
    } catch (error) {
        console.error('Error loading destinations:', error);
        alert('Error loading destination data. Please refresh the page.');
        return false;
    }
}

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
function createCustomIcon(category, icon, isSelected = false) {
    const color = categories[category].color;
    const size = isSelected ? 48 : 40;
    const borderColor = isSelected ? '#3b82f6' : 'white';
    const borderWidth = isSelected ? '4px' : '3px';
    const boxShadow = isSelected ? '0 4px 20px rgba(59, 130, 246, 0.6), 0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 3px 10px rgba(0,0,0,0.3)';
    const transform = isSelected ? 'scale(1.1)' : 'scale(1)';
    const badge = isSelected ? '<div style="position: absolute; top: -5px; right: -5px; background: #3b82f6; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">✓</div>' : '';

    const iconHtml = `
        <div style="
            background: ${color};
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${isSelected ? 24 : 20}px;
            border: ${borderWidth} solid ${borderColor};
            box-shadow: ${boxShadow};
            transform: ${transform};
            transition: all 0.3s ease;
            position: relative;
        ">${icon}${badge}</div>
    `;

    return L.divIcon({
        html: iconHtml,
        className: 'custom-marker' + (isSelected ? ' marker-selected' : ''),
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
    });
}

// Add markers to map
function addMarkers() {
    destinations.forEach(dest => {
        const marker = L.marker(dest.coordinates, {
            icon: createCustomIcon(dest.category, dest.icon),
            title: dest.name
        });

        // Create popup content with dynamic destination page link
        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${dest.icon} ${dest.name}</div>
                ${dest.dates ? `<div class="popup-dates">📅 ${dest.dates}</div>` : ''}
                <div class="popup-description">${dest.shortDescription}</div>
                ${dest.activities && dest.activities.length > 0 ? `
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
                ` : ''}
                <button
                    id="tripBtn-${dest.id}"
                    class="popup-trip-btn"
                    onclick="toggleDestinationInTrip(${dest.id})"
                    style="margin-bottom: 8px;">
                    <span class="trip-btn-icon">✈️</span>
                    <span class="trip-btn-text">Add to My Trip</span>
                </button>
                <a href="destination.html?slug=${dest.slug}" class="popup-link">View Full Details →</a>
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
                ${dest.dates ? `<p>${dest.dates}</p>` : `<p>${dest.category}</p>`}
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
            // Update the marker icon to reflect selection state
            const newIcon = createCustomIcon(dest.category, dest.icon, isSelected);
            marker.setIcon(newIcon);
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
document.addEventListener('DOMContentLoaded', async () => {
    // Load destinations from JSON first
    const loaded = await loadDestinations();
    if (!loaded) {
        return; // Error already handled in loadDestinations
    }

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
