// Destinations Data
const destinations = [
    {
        id: 1,
        name: "Laikipia Plateau",
        dates: "January 18-20, 2026",
        category: "wildlife",
        shortDescription: "A UNESCO World Heritage Site protecting 10% of Kenya's entire rhino population and 20% of critically endangered Grevy's zebra. Experience exclusive wildlife encounters with only 2-3 other vehicles maximum.",
        fullDescription: "The Laikipia Plateau represents Kenya's second-largest wildlife area, yet receives less than 10% of Masai Mara's visitor numbers. Lewa Wildlife Conservancy stands as the crown jewel, protecting over 200 black and white rhinos. Founded by the Craig family in 1983, Lewa pioneered the community-based conservation model, channeling 40% of revenues directly to surrounding communities for healthcare, education, and water projects. With only three lodges across 65,000 acres, you'll experience game drives with minimal vehicle congestion. Activities include horseback safaris with 40+ horses at Lewa Wilderness, vintage biplane flights in a 1929 WACO, camel trekking, and guided walks with Maasai trackers.",
        activities: [
            "Rhino tracking on foot with expert guides",
            "Game drives across 65,000 acres of pristine wilderness",
            "Camel walks through conservancy terrain",
            "Samburu cultural visits at authentic communities",
            "Horseback safari (at Lewa Wilderness)"
        ],
        lodges: [
            {
                name: "Il Ngwesi Eco-Lodge",
                description: "100% community-owned lodge with 6 open-sided bandas",
                link: "https://www.ilngwesi.com"
            },
            {
                name: "Lewa Safari Camp",
                description: "Conservancy-owned with 13 tented suites",
                link: "https://lewa.org/visit/lewa-safari-camp"
            }
        ],
        links: [
            {
                text: "Lewa Wildlife Conservancy",
                url: "https://lewa.org",
                icon: "🌍"
            }
        ],
        amenities: ["Big Five", "Community-Owned", "Walking Safaris", "Horseback Riding", "Conservation Activities"],
        icon: "🦏"
    },
    {
        id: 2,
        name: "Samburu & Sera Conservancy",
        dates: "January 21-23, 2026",
        category: "wildlife",
        shortDescription: "Home to East Africa's first and only community-owned black rhino sanctuary. Track rhinos on foot through doum palm groves and witness the 'Samburu Special Five' found nowhere else in Kenya.",
        fullDescription: "Samburu National Reserve showcases species found nowhere else in Kenya: the 'Samburu Special Five' including Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, and Somali ostrich. The most extraordinary experience lies in Sera Community Conservancy, where the Samburu community welcomed 10 black rhinos back in 2015; today 23 rhinos roam the sanctuary with 12 calves born since reintroduction and zero poaching incidents. Saruni Rhino lodge offers the only on-foot black rhino tracking in East Africa. Accompanied by armed rangers and expert Samburu trackers using GPS monitoring technology, you'll track rhinos on foot - an intense, participatory conservation experience impossible anywhere else on the continent. January's hot, dry conditions concentrate wildlife spectacularly at the Ewaso Nyiro River.",
        activities: [
            "On-foot black rhino tracking (only place in East Africa)",
            "Samburu Special Five wildlife viewing",
            "Reteti Elephant Sanctuary visit (community-owned orphanage)",
            "Singing Wells - ancient Samburu warrior tradition",
            "Game drives along Ewaso Nyiro River"
        ],
        lodges: [
            {
                name: "Saruni Rhino",
                description: "3-4 rustic stone bandas, exclusive rhino tracking access",
                link: "https://www.sarunirhino.com"
            },
            {
                name: "Saruni Samburu",
                description: "6 clifftop villas overlooking 240,000-acre conservancy",
                link: "https://www.sarunisamburu.com"
            }
        ],
        links: [
            {
                text: "Reteti Elephant Sanctuary",
                url: "https://reteti.org",
                icon: "🐘"
            },
            {
                text: "Kenya Wildlife Service",
                url: "https://www.kws.go.ke",
                icon: "🌍"
            }
        ],
        amenities: ["Rhino Tracking", "Samburu Special Five", "Elephant Orphanage", "Community Conservation", "River Wildlife"],
        icon: "🦒"
    },
    {
        id: 3,
        name: "Matthews Range",
        dates: "January 24, 2026",
        category: "mountains",
        shortDescription: "A pristine 'sky island' with tropical highland forest evolved in isolation for 10,000+ years. Home to 400+ forest elephants, rare De Brazza's monkeys, melanistic leopards, and over 200 bird species.",
        fullDescription: "Matthews Range rises as a 'sky island' - a tropical highland forest evolved in isolation for 10,000+ years, creating unique endemic species. The range stretches 150 km through Samburu territory with Warges Peak (2,688m) offering challenging treks. The route traverses dense cedar forests (some trees over 1,000 years old), crystal-clear mountain streams with swim-worthy rock pools, and dramatic crags. Wildlife includes 400+ forest elephants that returned after conservation efforts, rare De Brazza's monkeys, melanistic leopards (black panthers), African wild dogs, and over 200 bird species including the stunning Hartlaub's turaco. Access requires flying to Ngelai airstrip followed by road transfer. Camel-supported treks carry camping equipment for extended expeditions, allowing deep wilderness immersion impossible on day hikes.",
        activities: [
            "Guided forest walks through ancient cedar forests",
            "Wildlife viewing including forest elephants and leopards",
            "Mountain stream swimming in crystal-clear pools",
            "Bird watching (200+ species)",
            "Camel-supported camping expeditions"
        ],
        lodges: [
            {
                name: "Sarara Camp",
                description: "6 luxury tented suites in pristine wilderness",
                link: "https://www.sararacamp.com"
            },
            {
                name: "Kitich Camp",
                description: "6 riverside tents, walking safari specialists",
                link: "https://www.kitichcamp.com"
            }
        ],
        links: [
            {
                text: "Namunyak Conservancy",
                url: "https://www.kws.go.ke",
                icon: "🌲"
            }
        ],
        amenities: ["Forest Elephants", "Ancient Forests", "Mountain Streams", "Endemic Species", "Camel Treks"],
        icon: "⛰️"
    },
    {
        id: 4,
        name: "Loita Hills",
        dates: "January 25-26, 2026",
        category: "cultural",
        shortDescription: "Experience the sacred 'Forest of the Lost Child' with authentic Maasai cultural immersion. 100% community-owned where tourism revenue directly funds schools and women's empowerment programs.",
        fullDescription: "Loita Hills protects the sacred 'Forest of the Lost Child' - 33,000 hectares of pristine montane forest managed exclusively by the local Maasai community, making it one of Kenya's few ungazetted forests. Multi-day treks traverse rolling hills at 2,000-2,600m elevation through dense cedar forests sheltering 2,000+ colobus monkeys, forest elephants, leopards, and over 180 bird species. The Entasopia Falls provide refreshing swimming opportunities, while panoramic viewpoints reveal Mount Kilimanjaro, Ol Donyo Lengai volcano, and Lake Magadi. Maji Moto Maasai Cultural Camp implements a pure social enterprise model where 100% of tourism revenue funds the Enkiteng Lepa primary school, widow support programs, and girls' dormitories protecting against FGM and early marriage. Multi-day immersive stays allow genuine integration into daily life: learning medicinal plant identification, participating in livestock herding, and understanding the balance between cultural preservation and modern development.",
        activities: [
            "Multi-day hiking through sacred Maasai forest",
            "Maasai cultural immersion with authentic communities",
            "Entasopia Falls swimming and exploration",
            "Medicinal plant identification with traditional healers",
            "Traditional ceremonies (when timing allows)"
        ],
        lodges: [
            {
                name: "Maji Moto Maasai Cultural Camp",
                description: "Community-owned, traditional manyatta cottages",
                link: "https://www.majimoto.org"
            }
        ],
        links: [
            {
                text: "Community Conservation Info",
                url: "https://www.kws.go.ke",
                icon: "🤝"
            }
        ],
        amenities: ["Cultural Immersion", "Sacred Forest", "Waterfall Swimming", "Traditional Healing", "Community-Led"],
        icon: "🌳"
    },
    {
        id: 5,
        name: "Lamu Archipelago",
        dates: "January 27-31, 2026",
        category: "coastal",
        shortDescription: "A UNESCO World Heritage Site with over 700 years of Swahili culture. Lamu Old Town remains car-free, navigated only by donkeys and dhows with pristine beaches and perfect diving conditions.",
        fullDescription: "Lamu Archipelago, a UNESCO World Heritage Site, represents the oldest continuously inhabited Swahili settlement in Kenya at over 700 years old. Lamu Town remains gloriously car-free - only donkeys and dhows navigate the narrow stone streets lined with coral buildings featuring intricately carved wooden doors with brass studs. The architecture fuses Swahili, Arabic, Persian, and Indian influences into a living heritage site where residents still practice traditional crafts: dhow building in Matondoni village, elaborate furniture carving, basket weaving, and calligraphy. Shela Beach offers miles of pristine white sand and towering dunes. January delivers perfect coastal conditions: 28-32°C temperatures, 28°C sea temperatures, only three rain days monthly, and peak water clarity for diving and snorkeling as the dry season eliminates river runoff. Activities include dhow sailing, exploring UNESCO Old Town, snorkeling, and Swahili cooking classes.",
        activities: [
            "Dhow sailing on traditional wooden vessels",
            "Lamu Old Town UNESCO heritage site exploration",
            "Shela Beach relaxation and swimming",
            "Snorkeling in crystal-clear waters",
            "Swahili cooking class",
            "Optional day trip to Pate Island ruins or Kiwayu Island"
        ],
        lodges: [
            {
                name: "Peponi Hotel",
                description: "Family-run since 1967, iconic beachfront location",
                link: "https://peponi-lamu.com"
            },
            {
                name: "The Majlis Resort",
                description: "25-room boutique luxury on Manda Island",
                link: "https://themajlisresort.com"
            }
        ],
        links: [
            {
                text: "Peponi Hotel",
                url: "https://peponi-lamu.com",
                icon: "🏨"
            },
            {
                text: "Lamu Cultural Heritage",
                url: "https://www.kws.go.ke",
                icon: "🏛️"
            }
        ],
        amenities: ["UNESCO Site", "Pristine Beaches", "Dhow Sailing", "Snorkeling", "Swahili Culture"],
        icon: "⛵"
    },
    {
        id: 6,
        name: "Nairobi",
        dates: "January 17 & 31, 2026",
        category: "cultural",
        shortDescription: "Kenya's vibrant capital serves as your gateway. Modern hotels provide comfortable rest before and after your wilderness adventures through the Northern conservancies and coast.",
        fullDescription: "Nairobi, Kenya's bustling capital, serves as the perfect bookend to your adventure. While you won't spend extensive time here, the city offers comfortable airport hotels for your arrival and departure nights. Eka Hotel provides modern amenities close to the airport, while Boma Nairobi offers a more boutique experience. If you have extra time, consider visiting the Giraffe Centre, David Sheldrick Elephant Orphanage, or the Karen Blixen Museum. The city's restaurants showcase Kenya's diverse cuisine, from nyama choma (grilled meat) to innovative fusion dining. Nairobi's elevation at 1,795m means pleasant year-round temperatures around 25°C during the day and 12°C at night in January.",
        activities: [
            "Airport transfers and rest before safari",
            "Optional: Giraffe Centre visit",
            "Optional: David Sheldrick Elephant Orphanage",
            "Optional: Karen Blixen Museum",
            "Dining at local restaurants"
        ],
        lodges: [
            {
                name: "Eka Hotel",
                description: "Modern airport hotel with excellent amenities",
                link: "https://www.eka.co.ke"
            },
            {
                name: "Boma Nairobi",
                description: "Boutique hotel near airport",
                link: "https://www.bomanairobi.com"
            }
        ],
        links: [
            {
                text: "Visit Nairobi",
                url: "https://www.kws.go.ke",
                icon: "🏙️"
            }
        ],
        amenities: ["Airport Access", "Modern Hotels", "City Dining", "Optional Attractions", "Gateway Hub"],
        icon: "🏙️"
    }
];

// Current filter and search state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.category;
            renderDestinations();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderDestinations();
    });

    // Modal close on background click
    const modal = document.getElementById('destinationModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Filter and search destinations
function getFilteredDestinations() {
    return destinations.filter(dest => {
        // Filter by category
        const categoryMatch = currentFilter === 'all' || dest.category === currentFilter;

        // Filter by search
        const searchMatch = currentSearch === '' ||
            dest.name.toLowerCase().includes(currentSearch) ||
            dest.shortDescription.toLowerCase().includes(currentSearch) ||
            dest.fullDescription.toLowerCase().includes(currentSearch) ||
            dest.activities.some(activity => activity.toLowerCase().includes(currentSearch)) ||
            dest.lodges.some(lodge => lodge.name.toLowerCase().includes(currentSearch));

        return categoryMatch && searchMatch;
    });
}

// Render destinations to the grid
function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    const noResults = document.getElementById('noResults');
    const filtered = getFilteredDestinations();

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('is-hidden');
        return;
    }

    noResults.classList.add('is-hidden');
    grid.innerHTML = filtered.map(dest => createDestinationCard(dest)).join('');

    // Add event listeners to cards
    document.querySelectorAll('.destination-card').forEach(card => {
        const destId = parseInt(card.dataset.id);
        card.addEventListener('click', () => openModal(destId));
    });

    // Add event listeners to read more buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const description = btn.previousElementSibling;
            description.classList.toggle('collapsed');
            btn.textContent = description.classList.contains('collapsed') ? 'Read More' : 'Read Less';
        });
    });
}

// Create a destination card HTML
function createDestinationCard(dest) {
    const categoryName = dest.category.charAt(0).toUpperCase() + dest.category.slice(1);
    // Map destination names to image identifiers
    const destSlug = dest.name.toLowerCase().split(' ')[0]; // e.g., "laikipia", "samburu", "matthews", "loita", "lamu", "nairobi"

    return `
        <div class="destination-card" data-id="${dest.id}">
            <div class="card-image ${dest.category}" data-destination="${destSlug}">
                <div class="category-badge ${dest.category}">${dest.icon} ${categoryName}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-dates">📅 ${dest.dates}</p>
                <div class="card-description collapsed">
                    ${dest.shortDescription}
                </div>
                <span class="read-more-btn">Read More</span>

                <div class="activities-list">
                    <h4 class="font-bold text-sm text-gray-700 mb-2">Key Activities:</h4>
                    ${dest.activities.slice(0, 3).map(activity => `
                        <div class="activity-item">
                            <span class="activity-icon">✓</span>
                            <span>${activity}</span>
                        </div>
                    `).join('')}
                    ${dest.activities.length > 3 ? `
                        <div class="activity-item">
                            <span class="activity-icon">+</span>
                            <span>${dest.activities.length - 3} more activities</span>
                        </div>
                    ` : ''}
                </div>

                <div class="lodges-section">
                    <h4 class="font-bold text-sm text-gray-700 mb-2">Accommodation:</h4>
                    ${dest.lodges.map(lodge => `
                        <div class="lodge-item">
                            <span class="lodge-name">${lodge.name}</span>
                            <a href="${lodge.link}" class="book-btn" onclick="event.stopPropagation()">Info</a>
                        </div>
                    `).join('')}
                </div>

                <div class="card-footer">
                    ${dest.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="info-link" onclick="event.stopPropagation()">
                            <span>${link.icon}</span>
                            <span>${link.text}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Open modal with destination details
function openModal(destId) {
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;

    const modal = document.getElementById('destinationModal');
    const modalImage = document.getElementById('modalImage');
    const modalBody = document.getElementById('modalBody');

    // Set image background
    const destSlug = dest.name.toLowerCase().split(' ')[0];
    modalImage.className = `modal-image card-image ${dest.category}`;
    modalImage.setAttribute('data-destination', destSlug);

    // Set modal content
    modalBody.innerHTML = `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-3xl font-bold text-gray-900">${dest.name}</h2>
                <span class="category-badge ${dest.category}">${dest.icon} ${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}</span>
            </div>
            <p class="text-gray-600 font-medium">📅 ${dest.dates}</p>
        </div>

        <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">About This Destination</h3>
            <p class="text-gray-700 leading-relaxed">${dest.fullDescription}</p>
        </div>

        <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Activities & Experiences</h3>
            <div class="space-y-2">
                ${dest.activities.map(activity => `
                    <div class="activity-item">
                        <span class="activity-icon">✓</span>
                        <span>${activity}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Where to Stay</h3>
            ${dest.lodges.map(lodge => `
                <div class="lodge-item mb-3">
                    <div>
                        <div class="lodge-name">${lodge.name}</div>
                        <div class="text-sm text-gray-600 mt-1">${lodge.description}</div>
                    </div>
                    <a href="${lodge.link}" target="_blank" rel="noopener noreferrer" class="book-btn">Learn More</a>
                </div>
            `).join('')}
        </div>

        <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">What Makes It Special</h3>
            <div class="amenity-icons">
                ${dest.amenities.map(amenity => `
                    <span class="amenity-icon">✨ ${amenity}</span>
                `).join('')}
            </div>
        </div>

        <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Useful Links</h3>
            <div class="flex flex-wrap gap-3">
                ${dest.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="info-link">
                        <span>${link.icon}</span>
                        <span>${link.text}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('destinationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Make closeModal available globally
window.closeModal = closeModal;
