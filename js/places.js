// Destinations Data - Loaded from JSON file
let destinations = [];

// Load destinations from JSON file
async function loadDestinations() {
    try {
        const response = await fetch('data/destinations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        destinations = data.destinations;
        return true;
    } catch (error) {
        console.error('Error loading destinations:', error);
        alert('Error loading destination data. Please refresh the page.');
        return false;
    }
}

// Destinations now loaded dynamically from JSON
// (Old hardcoded array removed)

// Remove this block when convenient
const _toRemove = [
    {
        id: 1,
        name: "Placeholder",
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
    },
    {
        id: 7,
        name: "Masai Mara National Reserve",
        dates: "July - October (Great Migration)",
        category: "wildlife",
        shortDescription: "Kenya's most celebrated safari destination, home to the world-famous Great Migration and exceptional Big Five sightings. Witness millions of wildebeest crossing the crocodile-filled Mara River.",
        fullDescription: "The Masai Mara National Reserve is Kenya's most celebrated safari destination, covering 1,510 square kilometers of pristine savannah in southwestern Kenya. Named after the ancestral inhabitants, the Maasai people, and the Mara River which cuts through it, this reserve is globally renowned for hosting the spectacular Great Migration between July and October. Home to over 95 species of mammals and 570 bird species, the Mara offers unparalleled wildlife viewing year-round. The reserve boasts exceptional concentrations of lions, cheetahs, and leopards, making it one of the best places in Africa to see big cats. The endless golden plains, dotted with acacia trees and crossed by the life-giving Mara River, create the quintessential African landscape. Beyond wildlife, the Mara offers authentic cultural encounters with Maasai communities who have coexisted with wildlife for centuries.",
        activities: [
            "Game drives tracking the Big Five",
            "Great Migration river crossings (July-October)",
            "Hot air balloon safari at sunrise",
            "Maasai village cultural visits",
            "Photography safaris with expert guides",
            "Sundowner bush dinners under the stars"
        ],
        lodges: [
            {
                name: "Governors' Camp",
                description: "Legendary tented camp on the Mara River since 1972",
                link: "https://www.governorscamp.com"
            },
            {
                name: "Angama Mara",
                description: "Perched 1,000 feet above the Mara floor with spectacular views",
                link: "https://www.angama.com"
            },
            {
                name: "Mara Plains Camp",
                description: "Intimate 7-tent camp in exclusive conservancy",
                link: "https://www.greatplainsconservation.com/mara-plains"
            }
        ],
        links: [
            {
                text: "Masai Mara Official Site",
                url: "https://www.maasaimara.com",
                icon: "🌍"
            }
        ],
        amenities: ["Big Five", "Great Migration", "Big Cat Capital", "Hot Air Balloons", "Maasai Culture", "Photography Paradise"],
        icon: "🦁"
    },
    {
        id: 8,
        name: "Amboseli National Park",
        dates: "June - October & January - February",
        category: "wildlife",
        shortDescription: "Land of the Giants featuring iconic elephant herds against the backdrop of Mount Kilimanjaro. Home to over 1,000 elephants and the longest-running elephant research project in the world.",
        fullDescription: "Amboseli National Park, situated at the foot of Africa's highest peak, Mount Kilimanjaro, offers one of the most iconic safari experiences in Kenya. The park's name comes from the Maasai word 'Empusel,' meaning 'salty dust,' referring to the dry lake bed that dominates the landscape during dry seasons. The park is world-renowned for its large elephant herds, often numbering over 1,000 individuals. These magnificent creatures can be photographed against the stunning backdrop of snow-capped Kilimanjaro, creating Africa's most recognizable safari image. The elephants of Amboseli have been studied continuously since 1972, making this one of the longest-running wildlife research projects in the world. Beyond elephants, Amboseli hosts over 400 bird species, including numerous waterbirds in the swamps fed by Kilimanjaro's melting snows. The park's diverse habitats support lions, cheetahs, buffalo, and rare opportunities to spot all of Africa's Big Five.",
        activities: [
            "Elephant watching with the largest herds in Kenya",
            "Kilimanjaro photography at sunrise and sunset",
            "Bird watching with over 400 species",
            "Maasai cultural experiences",
            "Observation Hill hikes for panoramic views",
            "Game drives through diverse habitats"
        ],
        lodges: [
            {
                name: "Tortilis Camp",
                description: "Award-winning tented camp with unobstructed Kilimanjaro views",
                link: "https://www.tortilis.com"
            },
            {
                name: "Amboseli Serena Safari Lodge",
                description: "Maasai-inspired architecture with natural spring waterhole",
                link: "https://www.serenahotels.com/amboseli"
            },
            {
                name: "Tawi Lodge",
                description: "Intimate eco-lodge on 6,000-acre private conservancy",
                link: "https://www.tawi.co.ke"
            }
        ],
        links: [
            {
                text: "Kenya Wildlife Service",
                url: "https://www.kws.go.ke/amboseli-national-park",
                icon: "🌍"
            },
            {
                text: "Amboseli Elephant Research",
                url: "https://www.amboseliresearch.com",
                icon: "🐘"
            }
        ],
        amenities: ["Elephant Paradise", "Kilimanjaro Views", "Big Five", "400+ Bird Species", "Maasai Culture", "Iconic Photography"],
        icon: "🐘"
    },
    {
        id: 9,
        name: "Diani Beach",
        dates: "July - March",
        category: "coastal",
        shortDescription: "Kenya's tropical paradise featuring 17 kilometers of pristine white sand beaches and crystal-clear turquoise waters. Perfect coastal retreat combining relaxation with water sports and marine adventures.",
        fullDescription: "Diani Beach, located 30 kilometers south of Mombasa on Kenya's Indian Ocean coastline, consistently ranks among Africa's best beaches. Stretching for 17 kilometers, this pristine paradise features powdery white coral sand, crystal-clear turquoise waters protected by coral reefs, and swaying palm trees. Beyond its postcard-perfect beaches, Diani offers diverse ecosystems. The ancient Kaya Kinondo sacred forest, just inland, protects rare coastal forest and represents the spiritual heritage of the Digo people. The coral reefs teem with marine life attracting snorkelers and divers, while warm waters host dolphins, sea turtles, and seasonally whale sharks and humpback whales. Diani seamlessly blends relaxation with adventure, offering kite surfing, skydiving, deep-sea fishing, and visits to the Colobus Conservation Center protecting endangered monkeys. The blend of Swahili culture, fresh seafood, and warm hospitality makes Diani the perfect coastal retreat.",
        activities: [
            "Snorkeling and diving on vibrant coral reefs",
            "Kitesurfing with world-class conditions",
            "Dolphin spotting and marine wildlife encounters",
            "Kaya Kinondo sacred forest walks",
            "Colobus Conservation sanctuary visits",
            "Deep sea fishing expeditions",
            "Traditional dhow sailing at sunset"
        ],
        lodges: [
            {
                name: "The Sands at Nomad",
                description: "Boutique beachfront hotel with 42 rooms and infinity pool",
                link: "https://www.thesandskenya.com"
            },
            {
                name: "Almanara Luxury Resort",
                description: "Exclusive adults-only resort with 12 private villas",
                link: "https://www.almanaraluxuryresort.com"
            },
            {
                name: "Leopard Beach Resort",
                description: "Family-friendly resort with 158 rooms in tropical gardens",
                link: "https://www.leopardbeachresort.com"
            }
        ],
        links: [
            {
                text: "Magical Kenya Guide",
                url: "https://www.magicalkenya.com/destination/diani-beach",
                icon: "🌍"
            },
            {
                text: "Colobus Conservation",
                url: "https://www.colobusconservation.org",
                icon: "🐒"
            }
        ],
        amenities: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Marine Wildlife", "Sacred Forests", "Fresh Seafood"],
        icon: "🏖️"
    },
    {
        id: 10,
        name: "Lake Nakuru National Park",
        dates: "Year-round, June - March peak",
        category: "wildlife",
        shortDescription: "The Pink Paradise featuring millions of flamingos and one of Africa's finest rhino sanctuaries in the Great Rift Valley with over 450 bird species.",
        fullDescription: "Lake Nakuru National Park, nestled in the Great Rift Valley, is one of Kenya's most spectacular bird sanctuaries and rhino reserves. Covering 188 square kilometers, the park surrounds the shallow, alkaline Lake Nakuru, which has become world-famous for its stunning display of millions of flamingos that create a spectacular pink fringe along the shoreline. Beyond the flamingos, Lake Nakuru is recognized as one of Africa's finest rhino sanctuaries, hosting both black and white rhinos with some of the highest rhino densities on the continent. The park's diverse habitats include rocky cliffs, acacia forests, euphorbia forests, and the lake itself, supporting over 450 bird species and a rich variety of wildlife including lions, leopards, endangered Rothschild's giraffes, waterbucks, and buffaloes. The stunning viewpoints from Baboon Cliff and Lion Hill offer breathtaking panoramas of the lake and the surrounding Rift Valley escarpment.",
        activities: [
            "Flamingo spectacle viewing with millions of birds",
            "Rhino tracking in premier sanctuary",
            "Bird watching paradise with 450+ species",
            "Scenic viewpoints at Baboon Cliff and Lion Hill",
            "Wildlife game drives for Big Five",
            "Photography safari opportunities"
        ],
        lodges: [
            {
                name: "Lake Nakuru Lodge",
                description: "Historic lodge within the park with stunning lake views",
                link: "https://www.lakenakurulodge.com"
            },
            {
                name: "Sarova Lion Hill Game Lodge",
                description: "Hilltop lodge with panoramic views and infinity pool",
                link: "https://www.sarovahotels.com/lionhill-nakuru"
            },
            {
                name: "Flamingo Hill Camp",
                description: "Intimate tented camp with spectacular lake views",
                link: "https://www.flamingohillcamp.com"
            }
        ],
        links: [
            {
                text: "Kenya Wildlife Service",
                url: "https://www.kws.go.ke/content/lake-nakuru-national-park",
                icon: "🌍"
            },
            {
                text: "UNESCO World Heritage",
                url: "https://whc.unesco.org/en/list/1060",
                icon: "🏛️"
            }
        ],
        amenities: ["Flamingo Paradise", "Rhino Sanctuary", "450+ Bird Species", "Rift Valley Views", "Rothschild's Giraffes", "Photography Heaven"],
        icon: "🦩"
    },
    {
        id: 11,
        name: "Tsavo National Parks",
        dates: "June - October & January - March",
        category: "wildlife",
        shortDescription: "Kenya's largest wilderness featuring the legendary red elephants and untamed African landscapes across nearly 22,000 square kilometers.",
        fullDescription: "Tsavo National Parks, divided into Tsavo East and Tsavo West, together form one of the world's largest wildlife sanctuaries covering nearly 22,000 square kilometers. This vast wilderness represents one of Africa's last great untamed frontiers where wildlife roams across seemingly endless horizons. Tsavo is world-famous for its legendary 'red elephants' - so named because they dust-bathe in the park's distinctive red volcanic soil. With over 12,000 elephants, Tsavo hosts Kenya's largest elephant population. Tsavo East features vast, flat, semi-arid plains dotted with baobab trees, while Tsavo West showcases more varied topography including the stunning Mzima Springs, volcanic landscapes, and the dramatic Sheitani lava flows. Together, these parks offer an authentic wilderness experience with fewer crowds than Kenya's more famous reserves, allowing visitors to experience the raw, untamed beauty of Africa.",
        activities: [
            "Red elephant encounters in vast herds",
            "Mzima Springs exploration with underwater viewing",
            "Volcanic landscapes and Sheitani lava flows",
            "Big cat tracking including legendary lions",
            "Lugard Falls and Galana River visits",
            "Bird watching with 500+ species"
        ],
        lodges: [
            {
                name: "Finch Hattons Luxury Safari Camp",
                description: "Exclusive tented camp in Tsavo West with spring views",
                link: "https://www.finchattons.com"
            },
            {
                name: "Satao Camp",
                description: "Authentic camp in Tsavo East overlooking waterhole",
                link: "https://www.sataocamp.com"
            },
            {
                name: "Kilaguni Serena Safari Lodge",
                description: "Historic 1962 lodge with Kilimanjaro views",
                link: "https://www.serenahotels.com/tsavo-west"
            }
        ],
        links: [
            {
                text: "Tsavo East - KWS",
                url: "https://www.kws.go.ke/content/tsavo-east-national-park",
                icon: "🌍"
            },
            {
                text: "Tsavo West - KWS",
                url: "https://www.kws.go.ke/content/tsavo-west-national-park",
                icon: "🌍"
            }
        ],
        amenities: ["Red Elephants", "Largest Park", "Big Five", "Mzima Springs", "Volcanic Landscapes", "500+ Bird Species"],
        icon: "🐘"
    },
    {
        id: 12,
        name: "Mount Kenya",
        dates: "January - February & July - October",
        category: "mountains",
        shortDescription: "Africa's second-highest mountain, a UNESCO World Heritage Site with glaciers, alpine lakes, and unique afro-alpine ecosystems found nowhere else on Earth.",
        fullDescription: "Mount Kenya, rising to 5,199 meters at its highest peak Batian, is Africa's second-highest mountain and a UNESCO World Heritage Site. This ancient volcano has been sculpted by millions of years of glacial erosion into a spectacular alpine landscape featuring jagged peaks, hanging valleys, glacial lakes, and unique afro-alpine vegetation. The mountain is sacred to Kenya's Kikuyu people, and the name 'Kenya' itself derives from 'Kirinyaga,' meaning 'mountain of whiteness.' The park features 11 distinct vegetation zones from lowland forest through bamboo, heath, moorland, and finally to the glacial peaks. While the twin peaks of Batian and Nelion require technical rock climbing, Point Lenana (4,985m) can be reached by trekkers without climbing experience. The mountain's lower slopes harbor elephants, buffaloes, giant forest hogs, and the rare bongo antelope.",
        activities: [
            "Point Lenana summit trek (4,985m)",
            "Technical climbing to Batian and Nelion peaks",
            "Afro-alpine ecosystem exploration",
            "Glaciers and alpine lakes viewing",
            "Wildlife encounters in montane forests",
            "High-altitude bird watching with 130+ species"
        ],
        lodges: [
            {
                name: "Fairmont Mount Kenya Safari Club",
                description: "Luxury base with 120 rooms and animal orphanage",
                link: "https://www.fairmont.com/mount-kenya-safari"
            },
            {
                name: "Serena Mountain Lodge",
                description: "Tree lodge at 2,194m with wildlife viewing bunker",
                link: "https://www.serenahotels.com/mountain-lodge"
            },
            {
                name: "Mountain Huts",
                description: "Trek accommodations at various altitudes",
                link: "https://www.kws.go.ke/content/mount-kenya-national-park"
            }
        ],
        links: [
            {
                text: "Kenya Wildlife Service",
                url: "https://www.kws.go.ke/content/mount-kenya-national-park",
                icon: "🌍"
            },
            {
                text: "UNESCO World Heritage",
                url: "https://whc.unesco.org/en/list/800",
                icon: "🏛️"
            }
        ],
        amenities: ["Africa's 2nd Highest", "UNESCO Heritage", "Equatorial Glaciers", "Afro-Alpine Flora", "Epic Trekking", "Unique Wildlife"],
        icon: "🏔️"
    },
    {
        id: 13,
        name: "Hell's Gate National Park",
        dates: "Year-round, June - March ideal",
        category: "wildlife",
        shortDescription: "Kenya's only park where you can walk, cycle, and climb among wild animals. Dramatic gorges, geothermal activity, and the inspiration for The Lion King scenery.",
        fullDescription: "Hell's Gate National Park is one of Kenya's most unique and adventurous destinations. Named for the intense geothermal activity beneath its surface, this 68-square-kilometer park is the only Kenyan national park where visitors can walk, cycle, and rock climb freely among wildlife. The park's dramatic landscape of towering red cliffs, volcanic rock formations, and geothermal steam vents inspired the scenery in Disney's 'The Lion King.' The two massive red-tinged cliffs forming the 'Hell's Gate' gorge rise dramatically from the valley floor, while Fischer's Tower and Central Tower provide world-class rock climbing routes. The narrow Hell's Gate Gorge, with its towering walls and naturally-heated springs, offers an unforgettable hiking experience through water-carved passages barely three meters wide.",
        activities: [
            "Cycling safari among zebras and giraffes",
            "Hell's Gate Gorge hiking through narrow canyon",
            "Rock climbing on Fischer's Tower and Central Tower",
            "Bird watching with 100+ species",
            "Geothermal exploration of steam vents",
            "Wildlife photography on foot"
        ],
        lodges: [
            {
                name: "Hell's Gate Cottages & Campsite",
                description: "KWS-operated accommodation inside the park",
                link: "https://www.kws.go.ke/content/hells-gate-national-park"
            },
            {
                name: "Lake Naivasha Sopa Resort",
                description: "Luxury resort 15 minutes from park entrance",
                link: "https://www.sopalodges.com/lake-naivasha-sopa-resort"
            },
            {
                name: "Naivasha Kongoni Lodge",
                description: "Eco-friendly tented camp adjacent to park",
                link: "https://www.kongonilodge.com"
            }
        ],
        links: [
            {
                text: "Kenya Wildlife Service",
                url: "https://www.kws.go.ke/content/hells-gate-national-park",
                icon: "🌍"
            },
            {
                text: "Magical Kenya Guide",
                url: "https://www.magicalkenya.com",
                icon: "🇰🇪"
            }
        ],
        amenities: ["Cycling Among Wildlife", "Walking Safaris", "Rock Climbing", "Dramatic Gorge", "Geothermal Activity", "Lion King Scenery"],
        icon: "🚴"
    },
    {
        id: 14,
        name: "Lake Naivasha",
        dates: "Year-round, November - March peak birds",
        category: "wildlife",
        shortDescription: "Freshwater oasis in the Rift Valley with boat safaris, Crescent Island walks among wildlife, and over 400 bird species in a serene lakeside paradise.",
        fullDescription: "Lake Naivasha is a stunning freshwater lake nestled in the Great Rift Valley at 1,884 meters elevation, just 90 kilometers northwest of Nairobi. Unlike many Rift Valley lakes, Naivasha's fresh water supports a completely different ecosystem, creating a verdant oasis teeming with wildlife and birdlife. The lake supports over 400 bird species, making it one of Kenya's premier birding destinations. The papyrus-fringed shores harbor one of East Africa's largest hippo populations. What sets Lake Naivasha apart is Crescent Island, a private sanctuary where visitors can walk freely among zebras, wildebeests, giraffes, and waterbucks without fences or vehicles - an extraordinarily rare experience in Kenya. The lake's proximity to Nairobi and adjacent Hell's Gate National Park makes it an ideal weekend escape.",
        activities: [
            "Boat safari to observe hippos and birdlife",
            "Crescent Island walking safari among wildlife",
            "Bird watching with 400+ species",
            "Elsamere Conservation Centre visit",
            "Hell's Gate National Park day trips",
            "Fishing for black bass and tilapia"
        ],
        lodges: [
            {
                name: "Loldia House",
                description: "Exclusive boutique retreat with 7 rooms on cattle ranch",
                link: "https://www.loldiahouse.com"
            },
            {
                name: "Great Rift Valley Lodge & Golf Resort",
                description: "Luxury resort with spectacular lake views and golf",
                link: "https://www.grvlodge.com"
            },
            {
                name: "Chui Lodge",
                description: "Intimate 7-cottage lodge on lake shore",
                link: "https://www.chuilodge.com"
            }
        ],
        links: [
            {
                text: "Magical Kenya Guide",
                url: "https://www.magicalkenya.com/destination/lake-naivasha",
                icon: "🌍"
            },
            {
                text: "Elsamere Conservation",
                url: "https://www.elsamere.com",
                icon: "🌺"
            }
        ],
        amenities: ["Boat Safaris", "Walking Safari", "400+ Bird Species", "Hippo Herds", "Elsamere Centre", "Rift Valley Beauty"],
        icon: "🦛"
    }
];

// Current filter and search state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', async () => {
    // Load destinations from JSON first
    const loaded = await loadDestinations();
    if (!loaded) {
        return; // Error already handled in loadDestinations
    }

    // Now render with loaded data
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

    // Add event listeners to cards - navigate to dynamic destination page
    document.querySelectorAll('.destination-card').forEach(card => {
        const destId = parseInt(card.dataset.id);
        const dest = destinations.find(d => d.id === destId);
        if (dest) {
            card.addEventListener('click', () => {
                window.location.href = `destination.html?slug=${dest.slug}`;
            });
            // Make card look clickable
            card.style.cursor = 'pointer';
        }
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
