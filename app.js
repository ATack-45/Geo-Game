// Country data with regions
const countries = [
    { id: "AFG", name: "Afghanistan", region: "asia" },
    { id: "ALB", name: "Albania", region: "europe" },
    { id: "DZA", name: "Algeria", region: "africa" },
    { id: "AND", name: "Andorra", region: "europe" },
    { id: "AGO", name: "Angola", region: "africa" },
    { id: "ATG", name: "Antigua and Barbuda", region: "northamerica" },
    { id: "ARG", name: "Argentina", region: "southamerica" },
    { id: "ARM", name: "Armenia", region: "asia" },
    { id: "AUS", name: "Australia", region: "oceania" },
    { id: "AUT", name: "Austria", region: "europe" },
    { id: "AZE", name: "Azerbaijan", region: "asia" },
    { id: "BHS", name: "Bahamas", region: "northamerica" },
    { id: "BHR", name: "Bahrain", region: "asia" },
    { id: "BGD", name: "Bangladesh", region: "asia" },
    { id: "BRB", name: "Barbados", region: "northamerica" },
    { id: "BLR", name: "Belarus", region: "europe" },
    { id: "BEL", name: "Belgium", region: "europe" },
    { id: "BLZ", name: "Belize", region: "northamerica" },
    { id: "BEN", name: "Benin", region: "africa" },
    { id: "BTN", name: "Bhutan", region: "asia" },
    { id: "BOL", name: "Bolivia", region: "southamerica" },
    { id: "BIH", name: "Bosnia and Herzegovina", region: "europe" },
    { id: "BWA", name: "Botswana", region: "africa" },
    { id: "BRA", name: "Brazil", region: "southamerica" },
    { id: "BRN", name: "Brunei", region: "asia" },
    { id: "BGR", name: "Bulgaria", region: "europe" },
    { id: "BFA", name: "Burkina Faso", region: "africa" },
    { id: "BDI", name: "Burundi", region: "africa" },
    { id: "KHM", name: "Cambodia", region: "asia" },
    { id: "CMR", name: "Cameroon", region: "africa" },
    { id: "CAN", name: "Canada", region: "northamerica" },
    { id: "CPV", name: "Cape Verde", region: "africa" },
    { id: "CAF", name: "Central African Republic", region: "africa" },
    { id: "TCD", name: "Chad", region: "africa" },
    { id: "CHL", name: "Chile", region: "southamerica" },
    { id: "CHN", name: "China", region: "asia" },
    { id: "COL", name: "Colombia", region: "southamerica" },
    { id: "COM", name: "Comoros", region: "africa" },
    { id: "COG", name: "Congo", region: "africa" },
    { id: "CRI", name: "Costa Rica", region: "northamerica" },
    { id: "CIV", name: "Côte d'Ivoire", region: "africa" },
    { id: "HRV", name: "Croatia", region: "europe" },
    { id: "CUB", name: "Cuba", region: "northamerica" },
    { id: "CYP", name: "Cyprus", region: "europe" },
    { id: "CZE", name: "Czech Republic", region: "europe" },
    { id: "DNK", name: "Denmark", region: "europe" },
    { id: "DJI", name: "Djibouti", region: "africa" },
    { id: "DMA", name: "Dominica", region: "northamerica" },
    { id: "DOM", name: "Dominican Republic", region: "northamerica" },
    { id: "COD", name: "DR Congo", region: "africa" },
    { id: "ECU", name: "Ecuador", region: "southamerica" },
    { id: "EGY", name: "Egypt", region: "africa" },
    { id: "SLV", name: "El Salvador", region: "northamerica" },
    { id: "GNQ", name: "Equatorial Guinea", region: "africa" },
    { id: "ERI", name: "Eritrea", region: "africa" },
    { id: "EST", name: "Estonia", region: "europe" },
    { id: "SWZ", name: "Eswatini", region: "africa" },
    { id: "ETH", name: "Ethiopia", region: "africa" },
    { id: "FJI", name: "Fiji", region: "oceania" },
    { id: "FIN", name: "Finland", region: "europe" },
    { id: "FRA", name: "France", region: "europe" },
    { id: "GAB", name: "Gabon", region: "africa" },
    { id: "GMB", name: "Gambia", region: "africa" },
    { id: "GEO", name: "Georgia", region: "europe" },
    { id: "DEU", name: "Germany", region: "europe" },
    { id: "GHA", name: "Ghana", region: "africa" },
    { id: "GRC", name: "Greece", region: "europe" },
    { id: "GRD", name: "Grenada", region: "northamerica" },
    { id: "GTM", name: "Guatemala", region: "northamerica" },
    { id: "GIN", name: "Guinea", region: "africa" },
    { id: "GNB", name: "Guinea-Bissau", region: "africa" },
    { id: "GUY", name: "Guyana", region: "southamerica" },
    { id: "HTI", name: "Haiti", region: "northamerica" },
    { id: "HND", name: "Honduras", region: "northamerica" },
    { id: "HUN", name: "Hungary", region: "europe" },
    { id: "ISL", name: "Iceland", region: "europe" },
    { id: "IND", name: "India", region: "asia" },
    { id: "IDN", name: "Indonesia", region: "asia" },
    { id: "IRN", name: "Iran", region: "asia" },
    { id: "IRQ", name: "Iraq", region: "asia" },
    { id: "IRL", name: "Ireland", region: "europe" },
    { id: "ISR", name: "Israel", region: "asia" },
    { id: "ITA", name: "Italy", region: "europe" },
    { id: "JAM", name: "Jamaica", region: "northamerica" },
    { id: "JPN", name: "Japan", region: "asia" },
    { id: "JOR", name: "Jordan", region: "asia" },
    { id: "KAZ", name: "Kazakhstan", region: "asia" },
    { id: "KEN", name: "Kenya", region: "africa" },
    { id: "KIR", name: "Kiribati", region: "oceania" },
    { id: "KWT", name: "Kuwait", region: "asia" },
    { id: "KGZ", name: "Kyrgyzstan", region: "asia" },
    { id: "LAO", name: "Laos", region: "asia" },
    { id: "LVA", name: "Latvia", region: "europe" },
    { id: "LBN", name: "Lebanon", region: "asia" },
    { id: "LSO", name: "Lesotho", region: "africa" },
    { id: "LBR", name: "Liberia", region: "africa" },
    { id: "LBY", name: "Libya", region: "africa" },
    { id: "LIE", name: "Liechtenstein", region: "europe" },
    { id: "LTU", name: "Lithuania", region: "europe" },
    { id: "LUX", name: "Luxembourg", region: "europe" },
    { id: "MDG", name: "Madagascar", region: "africa" },
    { id: "MWI", name: "Malawi", region: "africa" },
    { id: "MYS", name: "Malaysia", region: "asia" },
    { id: "MDV", name: "Maldives", region: "asia" },
    { id: "MLI", name: "Mali", region: "africa" },
    { id: "MLT", name: "Malta", region: "europe" },
    { id: "MHL", name: "Marshall Islands", region: "oceania" },
    { id: "MRT", name: "Mauritania", region: "africa" },
    { id: "MUS", name: "Mauritius", region: "africa" },
    { id: "MEX", name: "Mexico", region: "northamerica" },
    { id: "FSM", name: "Micronesia", region: "oceania" },
    { id: "MDA", name: "Moldova", region: "europe" },
    { id: "MCO", name: "Monaco", region: "europe" },
    { id: "MNG", name: "Mongolia", region: "asia" },
    { id: "MNE", name: "Montenegro", region: "europe" },
    { id: "MAR", name: "Morocco", region: "africa" },
    { id: "MOZ", name: "Mozambique", region: "africa" },
    { id: "MMR", name: "Myanmar", region: "asia" },
    { id: "NAM", name: "Namibia", region: "africa" },
    { id: "NRU", name: "Nauru", region: "oceania" },
    { id: "NPL", name: "Nepal", region: "asia" },
    { id: "NLD", name: "Netherlands", region: "europe" },
    { id: "NZL", name: "New Zealand", region: "oceania" },
    { id: "NIC", name: "Nicaragua", region: "northamerica" },
    { id: "NER", name: "Niger", region: "africa" },
    { id: "NGA", name: "Nigeria", region: "africa" },
    { id: "PRK", name: "North Korea", region: "asia" },
    { id: "MKD", name: "North Macedonia", region: "europe" },
    { id: "NOR", name: "Norway", region: "europe" },
    { id: "OMN", name: "Oman", region: "asia" },
    { id: "PAK", name: "Pakistan", region: "asia" },
    { id: "PLW", name: "Palau", region: "oceania" },
    { id: "PSE", name: "Palestine", region: "asia" },
    { id: "PAN", name: "Panama", region: "northamerica" },
    { id: "PNG", name: "Papua New Guinea", region: "oceania" },
    { id: "PRY", name: "Paraguay", region: "southamerica" },
    { id: "PER", name: "Peru", region: "southamerica" },
    { id: "PHL", name: "Philippines", region: "asia" },
    { id: "POL", name: "Poland", region: "europe" },
    { id: "PRT", name: "Portugal", region: "europe" },
    { id: "QAT", name: "Qatar", region: "asia" },
    { id: "ROU", name: "Romania", region: "europe" },
    { id: "RUS", name: "Russia", region: "europe" },
    { id: "RWA", name: "Rwanda", region: "africa" },
    { id: "KNA", name: "Saint Kitts and Nevis", region: "northamerica" },
    { id: "LCA", name: "Saint Lucia", region: "northamerica" },
    { id: "VCT", name: "Saint Vincent and the Grenadines", region: "northamerica" },
    { id: "WSM", name: "Samoa", region: "oceania" },
    { id: "SMR", name: "San Marino", region: "europe" },
    { id: "STP", name: "São Tomé and Príncipe", region: "africa" },
    { id: "SAU", name: "Saudi Arabia", region: "asia" },
    { id: "SEN", name: "Senegal", region: "africa" },
    { id: "SRB", name: "Serbia", region: "europe" },
    { id: "SYC", name: "Seychelles", region: "africa" },
    { id: "SLE", name: "Sierra Leone", region: "africa" },
    { id: "SGP", name: "Singapore", region: "asia" },
    { id: "SVK", name: "Slovakia", region: "europe" },
    { id: "SVN", name: "Slovenia", region: "europe" },
    { id: "SLB", name: "Solomon Islands", region: "oceania" },
    { id: "SOM", name: "Somalia", region: "africa" },
    { id: "ZAF", name: "South Africa", region: "africa" },
    { id: "KOR", name: "South Korea", region: "asia" },
    { id: "SSD", name: "South Sudan", region: "africa" },
    { id: "ESP", name: "Spain", region: "europe" },
    { id: "LKA", name: "Sri Lanka", region: "asia" },
    { id: "SDN", name: "Sudan", region: "africa" },
    { id: "SUR", name: "Suriname", region: "southamerica" },
    { id: "SWE", name: "Sweden", region: "europe" },
    { id: "CHE", name: "Switzerland", region: "europe" },
    { id: "SYR", name: "Syria", region: "asia" },
    { id: "TWN", name: "Taiwan", region: "asia" },
    { id: "TJK", name: "Tajikistan", region: "asia" },
    { id: "TZA", name: "Tanzania", region: "africa" },
    { id: "THA", name: "Thailand", region: "asia" },
    { id: "TLS", name: "Timor-Leste", region: "asia" },
    { id: "TGO", name: "Togo", region: "africa" },
    { id: "TON", name: "Tonga", region: "oceania" },
    { id: "TTO", name: "Trinidad and Tobago", region: "northamerica" },
    { id: "TUN", name: "Tunisia", region: "africa" },
    { id: "TUR", name: "Turkey", region: "asia" },
    { id: "TKM", name: "Turkmenistan", region: "asia" },
    { id: "TUV", name: "Tuvalu", region: "oceania" },
    { id: "UGA", name: "Uganda", region: "africa" },
    { id: "UKR", name: "Ukraine", region: "europe" },
    { id: "ARE", name: "United Arab Emirates", region: "asia" },
    { id: "GBR", name: "United Kingdom", region: "europe" },
    { id: "USA", name: "United States", region: "northamerica" },
    { id: "URY", name: "Uruguay", region: "southamerica" },
    { id: "UZB", name: "Uzbekistan", region: "asia" },
    { id: "VUT", name: "Vanuatu", region: "oceania" },
    { id: "VAT", name: "Vatican City", region: "europe" },
    { id: "VEN", name: "Venezuela", region: "southamerica" },
    { id: "VNM", name: "Vietnam", region: "asia" },
    { id: "YEM", name: "Yemen", region: "asia" },
    { id: "ZMB", name: "Zambia", region: "africa" },
    { id: "ZWE", name: "Zimbabwe", region: "africa" }
];

// List of common countries for the "Common Countries" button
const commonCountries = [
    "USA", "CAN", "MEX", "BRA", "ARG", "GBR", "FRA", "DEU", "ITA", "ESP", 
    "RUS", "CHN", "IND", "JPN", "AUS", "ZAF", "EGY", "NGA", "SAU", "KEN"
];
const southAsia = [
    "IND", "PAK", "TKM", "AFG", "BGD", "BTN", "KAZ", "KGZ", "NPL", "LKA", 
    "TJK", "UZB"
];


// Create a very simplified version of a world map (just colored rectangles)
function loadRealisticWorldMap() {
    fetch('World-Map.svg')
      .then(response => response.text())
      .then(svgText => {
        // Inject the SVG into the world map container
        worldMap.innerHTML = svgText;

      

        // Remove all <title> elements to prevent default tooltips
        worldMap.querySelectorAll('title').forEach(title => title.remove());
        
  
        // Query for country elements (assuming they are <path> or <g> with a class attribute)
        const countryElements = worldMap.querySelectorAll('path[class], g[class]');
        countryElements.forEach(elem => {
          // If no id exists, use the first class as the id
          if (!elem.id) {
            const countryCode = elem.classList[0];
            elem.id = countryCode;
          }
  
          // Add the "country" class for styling and interactivity
          elem.classList.add('country');
  
          // Attach the click event for gameplay interactions
          elem.addEventListener('click', function() {
            if (gameInProgress && currentCountry) {
              handleCountryClick(this.id);
            }
          });
        });
      })
      .catch(err => console.error("Error loading SVG:", err));
  }

// Game state variables
let selectedCountries = [];
let gameInProgress = false;
let currentCountry = null;
let countriesPlayed = [];
let triesLeft = 3;
let startTime = null;
let timerInterval = null;
let correctGuesses = 0;
let incorrectGuesses = 0;
let skippedCountries = 0;

// DOM Elements
const countriesList = document.getElementById('countries-list');
const countrySearch = document.getElementById('country-search');
const clearSearchBtn = document.getElementById('clear-search');
const selectAllBtn = document.getElementById('select-all');
const deselectAllBtn = document.getElementById('deselect-all');
const selectCommonBtn = document.getElementById('select-common');
const selectSouthAsiaBtn = document.getElementById('select-south-asia');
const regionFilter = document.getElementById('region-filter');
const selectedCountDisplay = document.getElementById('selected-count');
const startGameBtn = document.getElementById('start-game');
const setupSidebar = document.getElementById('setup-sidebar');
const gameSidebar = document.getElementById('game-sidebar');
const worldMap = document.getElementById('world-map');
const gamePrompt = document.getElementById('game-prompt');
const currentCountryElement = document.getElementById('current-country');
const timerElement = document.getElementById('timer');
const triesLeftElement = document.getElementById('tries-left');
const correctCountElement = document.getElementById('correct-count');
const totalCountElement = document.getElementById('total-count');
const progressBar = document.getElementById('progress-bar');
const giveUpBtn = document.getElementById('give-up');
const endGameBtn = document.getElementById('end-game');
const countriesLeftList = document.getElementById('countries-to-find');

// Results modal elements
const resultsModal = new bootstrap.Modal(document.getElementById('results-modal'));
const resultTimeElement = document.getElementById('result-time');
const resultAccuracyElement = document.getElementById('result-accuracy');
const resultScoreElement = document.getElementById('result-score');
const correctAnswersElement = document.getElementById('correct-answers');
const incorrectAnswersElement = document.getElementById('incorrect-answers');
const skippedCountriesElement = document.getElementById('skipped-countries');

// Initialize the map


function populateCountriesList(filter = '', region = 'all') {
    countriesList.innerHTML = '';
    
    const filteredCountries = countries.filter(country => {
        const matchesFilter = country.name.toLowerCase().includes(filter.toLowerCase());
        const matchesRegion = region === 'all' || country.region === region;
        return matchesFilter && matchesRegion;
    });
    
    filteredCountries.forEach(country => {
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item custom-list-item';
        
        const checkbox = document.createElement('div');
        checkbox.className = 'form-check';
        
        const input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'checkbox';
        input.id = `check-${country.id}`;
        input.value = country.id;
        input.checked = selectedCountries.includes(country.id);
        
        input.addEventListener('change', function() {
            if (this.checked) {
                if (!selectedCountries.includes(country.id)) {
                    selectedCountries.push(country.id);
                }
            } else {
                selectedCountries = selectedCountries.filter(id => id !== country.id);
            }
            updateSelectedCount();
        });
        
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = `check-${country.id}`;
        label.textContent = country.name;
        
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        
        listItem.appendChild(checkbox);
        countriesList.appendChild(listItem);
    });
    
    updateSelectedCount();
}

// Update the selected countries count
function updateSelectedCount() {
    selectedCountDisplay.textContent = selectedCountries.length;
    
    // Disable start button if no countries selected
    if (selectedCountries.length === 0) {
        startGameBtn.disabled = true;
    } else {
        startGameBtn.disabled = false;
    }
}

// Filter countries list based on search
function filterCountriesList() {
    const searchTerm = countrySearch.value;
    const region = regionFilter.value;
    populateCountriesList(searchTerm, region);
}

// Start the game
function startGame() {
    if (selectedCountries.length === 0) {
        alert('Please select at least one country to start the game.');
        return;
    }
    
    // Reset game state
    gameInProgress = true;
    countriesPlayed = [];
    correctGuesses = 0;
    incorrectGuesses = 0;
    skippedCountries = 0;
    
    // Switch UI
    setupSidebar.classList.add('d-none');
    gameSidebar.classList.remove('d-none');
    gamePrompt.classList.remove('d-none');
    
    // Reset map
    document.querySelectorAll('.country').forEach(country => {
        country.classList.remove('selected', 'guessed', 'correct', 'incorrect', 'revealed');
    });
    
    // Update game stats
    totalCountElement.textContent = selectedCountries.length;
    correctCountElement.textContent = 0;
    
    // Start timer
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
    
    // Update countries list in game sidebar
    updateCountriesToFind();
    
    // Select first country
    selectNextCountry();
}

// Update the timer display
function updateTimer() {
    if (!startTime) return;
    
    const now = new Date();
    const elapsedTime = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    
    timerElement.textContent = `${minutes}:${seconds}`;
}

// Update the list of countries to find
function updateCountriesToFind() {
    countriesLeftList.innerHTML = '';
    
    selectedCountries.filter(id => !countriesPlayed.includes(id)).forEach(id => {
        const country = countries.find(c => c.id === id);
        
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item small py-1';
        listItem.textContent = country.name;
        
        countriesLeftList.appendChild(listItem);
    });
}

// Select the next country for the user to find
function selectNextCountry() {
    // Reset tries
    triesLeft = 3;
    triesLeftElement.textContent = triesLeft;
    
    // Get countries not yet played
    const remainingCountries = selectedCountries.filter(id => !countriesPlayed.includes(id));
    
    if (remainingCountries.length === 0) {
        // Game complete
        endGame();
        return;
    }
    
    // Randomly select a country
    const randomIndex = Math.floor(Math.random() * remainingCountries.length);
    currentCountry = remainingCountries[randomIndex];
    
    // Update prompt
    const countryName = countries.find(c => c.id === currentCountry).name;
    currentCountryElement.textContent = countryName;
    
    // Update progress
    const progress = (countriesPlayed.length / selectedCountries.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Handle country clicks
function handleCountryClick(countryId) {
    if (countryId === currentCountry) {
        // Correct guess
        correctGuesses++;
        const countryElement = document.getElementById(countryId);
        countryElement.classList.add('correct');
        countryElement.classList.add('guessed');
        
        // Update stats
        correctCountElement.textContent = correctGuesses;
        
        // Add to played countries
        countriesPlayed.push(countryId);
        
        // Move to next country
        setTimeout(() => {
            selectNextCountry();
            updateCountriesToFind();
        }, 500);
    } else {
        // Incorrect guess
        incorrectGuesses++;
        triesLeft = triesLeft - .5;
        triesLeftElement.textContent = triesLeft;
        
        // Mark the guessed country
        const countryElement = document.getElementById(countryId);
        
        if (triesLeft <= 0) {
            // Out of tries, reveal the correct answer
            skippedCountries++;
            
            const correctCountryElement = document.getElementById(currentCountry);
            correctCountryElement.classList.add('revealed');
            correctCountryElement.classList.add('guessed');
            
            // Add to played countries
            countriesPlayed.push(currentCountry);
            
            // Move to next country
            setTimeout(() => {
                selectNextCountry();
                updateCountriesToFind();
            }, 500);
        }
    }
}

// Skip current country
function skipCountry() {
    if (!gameInProgress) return;
    
    skippedCountries++;
    
    // Reveal the correct country
    const correctCountryElement = document.getElementById(currentCountry);
    correctCountryElement.classList.add('revealed');
    correctCountryElement.classList.add('guessed');
    
    // Add to played countries
    countriesPlayed.push(currentCountry);
    
    // Move to next country
    setTimeout(() => {
        selectNextCountry();
        updateCountriesToFind();
    }, 1000);
}

// End the game
function endGame() {
    gameInProgress = false;
    clearInterval(timerInterval);
    
    // Switch UI back
    setupSidebar.classList.remove('d-none');
    gameSidebar.classList.add('d-none');
    gamePrompt.classList.add('d-none');
    
    // Calculate results
    const totalTime = timerElement.textContent;
    const totalCountries = selectedCountries.length;
    const accuracy = correctGuesses / totalCountries * 100;
    
    // Update results modal
    resultTimeElement.textContent = totalTime;
    resultAccuracyElement.textContent = `${accuracy}%`;
    resultScoreElement.textContent = `${correctGuesses}/${totalCountries}`;
    correctAnswersElement.textContent = correctGuesses;
    incorrectAnswersElement.textContent = incorrectGuesses;
    skippedCountriesElement.textContent = skippedCountries;
    
    // Show results modal
    resultsModal.show();
}

// Event Listeners
countrySearch.addEventListener('input', filterCountriesList);
clearSearchBtn.addEventListener('click', () => {
    countrySearch.value = '';
    filterCountriesList();
});

selectAllBtn.addEventListener('click', () => {
    const visibleCountries = Array.from(document.querySelectorAll('#countries-list input[type="checkbox"]'));
    visibleCountries.forEach(input => {
        input.checked = true;
        const countryId = input.value;
        if (!selectedCountries.includes(countryId)) {
            selectedCountries.push(countryId);
        }
    });
    updateSelectedCount();
});

deselectAllBtn.addEventListener('click', () => {
    const visibleCountries = Array.from(document.querySelectorAll('#countries-list input[type="checkbox"]'));
    visibleCountries.forEach(input => {
        input.checked = false;
        const countryId = input.value;
        selectedCountries = selectedCountries.filter(id => id !== countryId);
    });
    updateSelectedCount();
});

selectCommonBtn.addEventListener('click', () => {
    document.querySelectorAll('#countries-list input[type="checkbox"]').forEach(input => {
        const countryId = input.value;
        const isCommon = commonCountries.includes(countryId);
        input.checked = isCommon;
        
        if (isCommon && !selectedCountries.includes(countryId)) {
            selectedCountries.push(countryId);
        } else if (!isCommon && selectedCountries.includes(countryId)) {
            selectedCountries = selectedCountries.filter(id => id !== countryId);
        }
    });
    updateSelectedCount();
});
selectSouthAsiaBtn.addEventListener('click', () => {
    document.querySelectorAll('#countries-list input[type="checkbox"]').forEach(input => {
        const countryId = input.value;
        const isCommon = southAsia.includes(countryId);
        input.checked = isCommon;
        
        if (isCommon && !selectedCountries.includes(countryId)) {
            selectedCountries.push(countryId);
        } else if (!isCommon && selectedCountries.includes(countryId)) {
            selectedCountries = selectedCountries.filter(id => id !== countryId);
        }
    });
    updateSelectedCount();
});

regionFilter.addEventListener('change', filterCountriesList);
startGameBtn.addEventListener('click', startGame);
giveUpBtn.addEventListener('click', skipCountry);
endGameBtn.addEventListener('click', endGame);

// Initialize the application
function initApp() {
    populateCountriesList();
    updateSelectedCount();
    loadRealisticWorldMap();
}

// Start the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);



  