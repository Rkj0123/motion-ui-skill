/* ==========================================================================
   FLIGHTER - FLIGHT SEARCH & BOOKING ENGINE
   Core Application Logic
   ========================================================================== */

// --- AIRPORTS DATABASE ---
const AIRPORTS = {
  DEL: { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India', terminal: 'T3' },
  BOM: { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj Intl Airport', city: 'Mumbai', country: 'India', terminal: 'T2' },
  BLR: { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bengaluru', country: 'India', terminal: 'T1' },
  DXB: { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', terminal: 'T3' },
  LHR: { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', terminal: 'T5' },
  JFK: { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', terminal: 'T4' },
  SFO: { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'USA', terminal: 'T2' },
  SIN: { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', terminal: 'T3' },
  HND: { code: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan', terminal: 'T2' },
  CDG: { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', terminal: 'T2E' },
  SYD: { code: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia', terminal: 'T1' },
  FRA: { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', terminal: 'T1' }
};

// --- AIRLINES DATABASE ---
const AIRLINES = [
  { name: 'SkyWings', code: 'SW', badge: 'SW' },
  { name: 'AeroNova', code: 'AN', badge: 'AN' },
  { name: 'StarJet', code: 'SJ', badge: 'SJ' },
  { name: 'GlobalAir', code: 'GA', badge: 'GA' },
  { name: 'PacificAir', code: 'PA', badge: 'PA' },
  { name: 'VistaJet', code: 'VJ', badge: 'VJ' }
];

// --- CURRENCY CONVERSION (Base: INR) ---
const CURRENCIES = {
  INR: { symbol: '₹', rate: 1 },
  USD: { symbol: '$', rate: 0.012 },
  EUR: { symbol: '€', rate: 0.011 },
  GBP: { symbol: '£', rate: 0.0095 }
};

let currentCurrency = 'INR';

// --- APPLICATION STATE ---
let state = {
  tripType: 'one-way',
  origin: 'DEL',
  destination: 'BOM',
  departureDate: '',
  returnDate: '',
  cabinClass: 'economy',
  passengers: {
    adults: 1,
    children: 0
  },
  flights: [],
  filters: {
    stops: ['0', '1', '2'],
    airlines: [],
    departureTimes: [],
    maxPrice: 100000
  },
  sortBy: 'best',
  selectedFlight: null,
  selectedSeats: [],
  seatFees: 0,
  extraBaggage: false,
  bookings: []
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initDates();
  loadBookings();
  populateAirlineFilters();
  executeInitialSearch();
});

// Set default departure date to tomorrow, return date to 5 days later
function initDates() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const returnD = new Date();
  returnD.setDate(returnD.getDate() + 5);

  const depInput = document.getElementById('departure-date');
  const retInput = document.getElementById('return-date');

  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const returnStr = returnD.toISOString().split('T')[0];

  depInput.value = tomorrowStr;
  depInput.min = new Date().toISOString().split('T')[0];
  retInput.value = returnStr;
  retInput.min = tomorrowStr;

  state.departureDate = tomorrowStr;
  state.returnDate = returnStr;
}

// Populate airline checkboxes dynamically in filter sidebar
function populateAirlineFilters() {
  const container = document.getElementById('airline-filters-list');
  if (!container) return;

  container.innerHTML = AIRLINES.map(airline => `
    <label class="checkbox-label">
      <input type="checkbox" name="airlineFilter" value="${airline.name}" checked onchange="applyFilters()">
      <span>${airline.name}</span>
    </label>
  `).join('');

  state.filters.airlines = AIRLINES.map(a => a.name);
}

// --- DUMMY FLIGHT GENERATOR & DATABASE ---
function generateDummyFlights(originCode, destCode, cabinClass) {
  const orig = AIRPORTS[originCode] || { code: originCode, city: originCode, name: `${originCode} Airport` };
  const dest = AIRPORTS[destCode] || { code: destCode, city: destCode, name: `${destCode} Airport` };

  const isDomestic = (originCode === 'DEL' || originCode === 'BOM' || originCode === 'BLR') &&
                     (destCode === 'DEL' || destCode === 'BOM' || destCode === 'BLR');

  // Base flight times and fares depending on route type
  const baseDurationMin = isDomestic ? 135 : 420; // 2h 15m vs 7h
  const basePriceINR = isDomestic ? 4800 : 38000;

  // Class multiplier
  const classMultiplier = cabinClass === 'business' ? 2.8 : (cabinClass === 'premium' ? 1.45 : 1.0);

  const schedules = [
    { hour: 6, min: 15, airline: AIRLINES[0], flightNum: 204, stops: 0, stopCity: null, durationOffset: 0, priceOffset: 450, aircraft: 'Boeing 787-9' },
    { hour: 9, min: 30, airline: AIRLINES[1], flightNum: 412, stops: 0, stopCity: null, durationOffset: -10, priceOffset: 850, aircraft: 'Airbus A321neo' },
    { hour: 11, min: 45, airline: AIRLINES[2], flightNum: 708, stops: 1, stopCity: isDomestic ? 'AMD' : 'DXB', durationOffset: 110, priceOffset: -600, aircraft: 'Boeing 777-300ER' },
    { hour: 14, min: 10, airline: AIRLINES[3], flightNum: 521, stops: 0, stopCity: null, durationOffset: 5, priceOffset: 1200, aircraft: 'Airbus A350-900' },
    { hour: 17, min: 40, airline: AIRLINES[4], flightNum: 339, stops: 1, stopCity: isDomestic ? 'HYD' : 'DOH', durationOffset: 125, priceOffset: -350, aircraft: 'Boeing 737 MAX 9' },
    { hour: 21, min: 20, airline: AIRLINES[5], flightNum: 882, stops: 0, stopCity: null, durationOffset: -5, priceOffset: 250, aircraft: 'Airbus A330neo' },
    { hour: 23, min: 50, airline: AIRLINES[0], flightNum: 915, stops: 0, stopCity: null, durationOffset: 10, priceOffset: -750, aircraft: 'Boeing 787-8' }
  ];

  return schedules.map(s => {
    const totalDuration = Math.max(75, baseDurationMin + s.durationOffset);
    const depTimeStr = formatTime(s.hour, s.min);
    
    const arrDate = new Date();
    arrDate.setHours(s.hour, s.min + totalDuration, 0, 0);
    const arrTimeStr = formatTime(arrDate.getHours(), arrDate.getMinutes());
    const nextDay = (s.min + totalDuration) >= (24 - s.hour) * 60;

    const baseFare = Math.round((basePriceINR + s.priceOffset) * classMultiplier);

    return {
      id: `${s.airline.code}-${s.flightNum}`,
      airline: s.airline.name,
      airlineCode: s.airline.code,
      airlineBadge: s.airline.badge,
      flightNumber: `${s.airline.code}-${s.flightNum}`,
      aircraft: s.aircraft,
      origin: orig,
      destination: dest,
      departureTime: depTimeStr,
      departureHour: s.hour,
      arrivalTime: arrTimeStr,
      nextDay: nextDay,
      durationMinutes: totalDuration,
      durationFormatted: formatDuration(totalDuration),
      stops: s.stops,
      layoverInfo: s.stops > 0 ? `1 Stop via ${s.stopCity}` : 'Non-stop',
      cabinClass: cabinClass,
      baseFareINR: baseFare,
      amenities: ['Free WiFi', 'In-seat Power', 'Complimentary Meal', 'Entertainment']
    };
  });
}

// --- HELPER FORMATTERS ---
function formatTime(hour, min) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const displayMin = min < 10 ? `0${min}` : min;
  return `${displayHour}:${displayMin} ${period}`;
}

function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m > 0 ? m + 'm' : ''}`;
}

function formatPrice(amountINR) {
  const cur = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(amountINR * cur.rate);
  return `${cur.symbol}${converted.toLocaleString()}`;
}

// --- CURRENCY SELECTOR ---
function changeCurrency(newCurrency) {
  currentCurrency = newCurrency;
  updatePriceSliderMax();
  renderFlights();
  updateBookingTotalSummary();
  updateBookingsDrawerUI();
  showToast(`Currency changed to ${newCurrency}`);
}

function updatePriceSliderMax() {
  const slider = document.getElementById('price-range');
  const sliderVal = document.getElementById('price-slider-val');
  if (!slider) return;

  const maxPriceINR = state.filters.maxPrice;
  sliderVal.textContent = formatPrice(maxPriceINR);
}

// --- SEARCH FORM HANDLERS ---
function toggleTripType(type) {
  state.tripType = type;
  const returnGroup = document.getElementById('return-date-group');
  if (returnGroup) {
    returnGroup.style.display = type === 'round-trip' ? 'flex' : 'none';
  }
}

function swapAirports() {
  const origInput = document.getElementById('origin-input');
  const destInput = document.getElementById('destination-input');
  const temp = origInput.value;
  origInput.value = destInput.value;
  destInput.value = temp;
}

function togglePassengerMenu(force) {
  const popover = document.getElementById('passenger-popover');
  if (!popover) return;
  if (typeof force === 'boolean') {
    popover.classList.toggle('show', force);
  } else {
    popover.classList.toggle('show');
  }
}

function updatePassengers(type, delta) {
  if (type === 'adults') {
    state.passengers.adults = Math.max(1, Math.min(6, state.passengers.adults + delta));
    document.getElementById('adults-count').textContent = state.passengers.adults;
  } else if (type === 'children') {
    state.passengers.children = Math.max(0, Math.min(4, state.passengers.children + delta));
    document.getElementById('children-count').textContent = state.passengers.children;
  }

  const total = state.passengers.adults + state.passengers.children;
  const label = total === 1 ? '1 Passenger' : `${total} Passengers`;
  document.getElementById('passenger-label').textContent = label;
}

function quickFillRoute(orig, dest) {
  document.getElementById('origin-input').value = orig;
  document.getElementById('destination-input').value = dest;
  handleSearch(new Event('submit'));
}

function cleanAirportInput(raw) {
  if (!raw) return 'DEL';
  const trimmed = raw.trim().toUpperCase();
  // Check if first 3 chars match an airport code
  const matchCode = trimmed.slice(0, 3);
  if (AIRPORTS[matchCode]) return matchCode;

  // Search by city name
  for (const [code, info] of Object.entries(AIRPORTS)) {
    if (trimmed.includes(info.city.toUpperCase()) || trimmed.includes(code)) {
      return code;
    }
  }
  return trimmed.slice(0, 3);
}

function handleSearch(e) {
  if (e && e.preventDefault) e.preventDefault();

  const origRaw = document.getElementById('origin-input').value;
  const destRaw = document.getElementById('destination-input').value;
  const cabinClass = document.getElementById('cabin-class').value;
  const depDate = document.getElementById('departure-date').value;
  const retDate = document.getElementById('return-date').value;

  const originCode = cleanAirportInput(origRaw);
  const destCode = cleanAirportInput(destRaw);

  if (originCode === destCode) {
    showToast('Origin and Destination cannot be the same airport.');
    return;
  }

  state.origin = originCode;
  state.destination = destCode;
  state.cabinClass = cabinClass;
  state.departureDate = depDate;
  state.returnDate = retDate;

  // Generate dummy flight catalog for this route
  state.flights = generateDummyFlights(originCode, destCode, cabinClass);

  // Update headline
  const origInfo = AIRPORTS[originCode] || { city: originCode, code: originCode };
  const destInfo = AIRPORTS[destCode] || { city: destCode, code: destCode };
  document.getElementById('results-headline').textContent = `${origInfo.city} (${originCode}) ➔ ${destInfo.city} (${destCode})`;
  document.getElementById('results-subheadline').textContent = `${state.flights.length} flights available for ${depDate || 'your selected date'}`;

  applyFilters();

  // Scroll smoothly to results
  document.getElementById('results-area').scrollIntoView({ behavior: 'smooth' });
}

function executeInitialSearch() {
  handleSearch(new Event('submit'));
}

function resetSearch() {
  document.getElementById('origin-input').value = 'DEL';
  document.getElementById('destination-input').value = 'BOM';
  initDates();
  executeInitialSearch();
}

// --- FILTERING & SORTING ---
function applyFilters() {
  // Read stops
  const stopsCheckboxes = document.querySelectorAll('input[name="stopsFilter"]:checked');
  const allowedStops = Array.from(stopsCheckboxes).map(cb => cb.value);

  // Read airlines
  const airlineCheckboxes = document.querySelectorAll('input[name="airlineFilter"]:checked');
  const allowedAirlines = Array.from(airlineCheckboxes).map(cb => cb.value);

  // Filter flights
  let filtered = state.flights.filter(flight => {
    // Stops filter
    const stopsStr = flight.stops >= 2 ? '2' : String(flight.stops);
    if (!allowedStops.includes(stopsStr)) return false;

    // Airlines filter
    if (allowedAirlines.length > 0 && !allowedAirlines.includes(flight.airline)) return false;

    // Time filter
    if (state.filters.departureTimes.length > 0) {
      const h = flight.departureHour;
      let timeBand = '';
      if (h >= 0 && h < 6) timeBand = 'early';
      else if (h >= 6 && h < 12) timeBand = 'morning';
      else if (h >= 12 && h < 18) timeBand = 'afternoon';
      else timeBand = 'evening';

      if (!state.filters.departureTimes.includes(timeBand)) return false;
    }

    // Max price filter
    if (flight.baseFareINR > state.filters.maxPrice) return false;

    return true;
  });

  // Sort
  if (state.sortBy === 'cheapest') {
    filtered.sort((a, b) => a.baseFareINR - b.baseFareINR);
  } else if (state.sortBy === 'fastest') {
    filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
  } else {
    // 'best' - composite score
    filtered.sort((a, b) => {
      const scoreA = a.baseFareINR + (a.durationMinutes * 50) + (a.stops * 3000);
      const scoreB = b.baseFareINR + (b.durationMinutes * 50) + (b.stops * 3000);
      return scoreA - scoreB;
    });
  }

  renderFlightCards(filtered);
}

function changeSort(sortKey) {
  state.sortBy = sortKey;
  document.querySelectorAll('.sort-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.sort === sortKey);
  });
  applyFilters();
}

function toggleTimeFilter(btn, timeBand) {
  btn.classList.toggle('active');
  const idx = state.filters.departureTimes.indexOf(timeBand);
  if (idx > -1) {
    state.filters.departureTimes.splice(idx, 1);
  } else {
    state.filters.departureTimes.push(timeBand);
  }
  applyFilters();
}

function onPriceSliderChange(val) {
  state.filters.maxPrice = Number(val);
  document.getElementById('price-slider-val').textContent = formatPrice(Number(val));
  applyFilters();
}

function resetFilters() {
  document.querySelectorAll('input[name="stopsFilter"]').forEach(cb => cb.checked = true);
  document.querySelectorAll('input[name="airlineFilter"]').forEach(cb => cb.checked = true);
  document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('active'));
  state.filters.departureTimes = [];
  
  const slider = document.getElementById('price-range');
  if (slider) {
    slider.value = 100000;
    state.filters.maxPrice = 100000;
    document.getElementById('price-slider-val').textContent = formatPrice(100000);
  }

  applyFilters();
  showToast('Filters reset');
}

// --- RENDER FLIGHT CARDS ---
function renderFlightCards(flights) {
  const container = document.getElementById('flights-container');
  if (!container) return;

  if (flights.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>
        </svg>
        <h3>No flights match your filters</h3>
        <p class="text-muted text-sm" style="margin: 8px 0 16px 0;">Try adjusting your airline, stop, or departure time criteria.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = flights.map(flight => {
    const totalPax = state.passengers.adults + state.passengers.children;
    const totalFare = flight.baseFareINR * totalPax;

    return `
      <div class="flight-card" data-flight-id="${flight.id}">
        <div class="flight-main-details">
          <!-- Airline info bar -->
          <div class="flight-airline-bar">
            <div class="airline-badge">${flight.airlineBadge}</div>
            <div>
              <span class="airline-name">${flight.airline}</span>
              <span class="text-xs text-muted" style="margin-left: 6px;">${flight.flightNumber}</span>
            </div>
            <span class="aircraft-type">${flight.aircraft}</span>
          </div>

          <!-- Timeline -->
          <div class="flight-timeline">
            <div class="flight-point">
              <span class="flight-time">${flight.departureTime}</span>
              <span class="flight-code">${flight.origin.code}</span>
              <span class="flight-city">${flight.origin.city}</span>
            </div>

            <div class="flight-duration-track">
              <span class="duration-label">${flight.durationFormatted}</span>
              <div class="flight-line">
                <svg class="flight-plane-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <span class="stops-label ${flight.stops === 0 ? 'direct' : 'layover'}">
                ${flight.layoverInfo}
              </span>
            </div>

            <div class="flight-point dest">
              <span class="flight-time">
                ${flight.arrivalTime}
                ${flight.nextDay ? '<span class="text-xs text-emerald font-bold">+1d</span>' : ''}
              </span>
              <span class="flight-code">${flight.destination.code}</span>
              <span class="flight-city">${flight.destination.city}</span>
            </div>
          </div>

          <!-- Amenities -->
          <div class="flight-amenities">
            ${flight.amenities.map(a => `
              <span class="amenity-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                ${a}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Price & Select CTA -->
        <div class="flight-price-col">
          <div class="price-amount">${formatPrice(flight.baseFareINR)}</div>
          <div class="price-unit">per passenger</div>
          ${totalPax > 1 ? `<div class="text-xs text-muted" style="margin-bottom: 8px;">Total: ${formatPrice(totalFare)}</div>` : ''}
          <button class="btn btn-primary btn-book" onclick="openSeatModal('${flight.id}')">
            Select Flight
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderFlights() {
  applyFilters();
}

// --- SEAT SELECTION MODAL ---
function openSeatModal(flightId) {
  const flight = state.flights.find(f => f.id === flightId);
  if (!flight) return;

  state.selectedFlight = flight;
  state.selectedSeats = [];
  state.seatFees = 0;

  document.getElementById('seat-flight-meta').textContent = 
    `Flight ${flight.flightNumber} • ${flight.origin.city} (${flight.origin.code}) ➔ ${flight.destination.city} (${flight.destination.code}) • ${flight.aircraft}`;

  const totalPax = state.passengers.adults + state.passengers.children;
  document.getElementById('seat-selection-prompt').textContent = 
    `Select ${totalPax} seat${totalPax > 1 ? 's' : ''} for your party (${totalPax} remaining)`;
  
  renderSeatMap();
  updateSeatSummary();

  document.getElementById('seat-modal').style.display = 'flex';
}

function closeSeatModal() {
  document.getElementById('seat-modal').style.display = 'none';
}

function renderSeatMap() {
  const businessContainer = document.getElementById('business-cabin');
  const economyContainer = document.getElementById('economy-cabin');

  // Business: 3 rows (Rows 1-3, A C | D F)
  let businessHtml = '';
  for (let r = 1; r <= 3; r++) {
    businessHtml += `
      <div class="seat-row">
        <span class="row-number">${r}</span>
        ${createSeatBtn(r, 'A', true)}
        ${createSeatBtn(r, 'B', true)}
        <div class="aisle-gap"></div>
        ${createSeatBtn(r, 'E', true)}
        ${createSeatBtn(r, 'F', true)}
      </div>
    `;
  }
  businessContainer.innerHTML = businessHtml;

  // Economy: 12 rows (Rows 10-21, A B C | D E F)
  let economyHtml = '';
  for (let r = 10; r <= 21; r++) {
    const isExtraLegroom = (r === 10 || r === 15);
    economyHtml += `
      <div class="seat-row">
        <span class="row-number">${r}</span>
        ${createSeatBtn(r, 'A', false, isExtraLegroom)}
        ${createSeatBtn(r, 'B', false, isExtraLegroom)}
        ${createSeatBtn(r, 'C', false, isExtraLegroom)}
        <div class="aisle-gap"></div>
        ${createSeatBtn(r, 'D', false, isExtraLegroom)}
        ${createSeatBtn(r, 'E', false, isExtraLegroom)}
        ${createSeatBtn(r, 'F', false, isExtraLegroom)}
      </div>
    `;
  }
  economyContainer.innerHTML = economyHtml;
}

function createSeatBtn(row, col, isBusiness, isExtraLegroom = false) {
  const seatId = `${row}${col}`;
  // Deterministically mark some seats occupied based on row and col
  const occupiedSeed = (row * 7 + col.charCodeAt(0)) % 5 === 0;
  const isSelected = state.selectedSeats.includes(seatId);

  let extraClass = '';
  if (isExtraLegroom) extraClass = 'extra-legroom';
  if (isSelected) extraClass += ' selected';
  if (occupiedSeed) extraClass += ' occupied';

  return `
    <button type="button" 
      class="seat-btn ${extraClass}" 
      data-seat="${seatId}" 
      data-legroom="${isExtraLegroom}"
      ${occupiedSeed ? 'disabled' : ''} 
      onclick="handleSeatClick('${seatId}', ${isExtraLegroom})">
      ${col}
    </button>
  `;
}

function handleSeatClick(seatId, isExtraLegroom) {
  const totalPax = state.passengers.adults + state.passengers.children;
  const idx = state.selectedSeats.indexOf(seatId);

  if (idx > -1) {
    // Deselect
    state.selectedSeats.splice(idx, 1);
  } else {
    // Select
    if (state.selectedSeats.length >= totalPax) {
      // Replace earliest selected seat
      state.selectedSeats.shift();
    }
    state.selectedSeats.push(seatId);
  }

  // Recalculate seat fees
  // Extra legroom seats cost +₹500 each
  let fee = 0;
  state.selectedSeats.forEach(s => {
    const row = parseInt(s);
    if (row === 10 || row === 15) {
      fee += 500;
    }
  });
  state.seatFees = fee;

  renderSeatMap();
  updateSeatSummary();
}

function updateSeatSummary() {
  const totalPax = state.passengers.adults + state.passengers.children;
  const badge = document.getElementById('selected-seats-badge');
  const feeLabel = document.getElementById('seat-addon-price');
  const confirmBtn = document.getElementById('confirm-seats-btn');

  if (state.selectedSeats.length === 0) {
    badge.textContent = 'None';
    feeLabel.textContent = '+₹0';
    confirmBtn.textContent = `Select ${totalPax} Seat${totalPax > 1 ? 's' : ''}`;
    confirmBtn.disabled = true;
  } else {
    badge.textContent = state.selectedSeats.join(', ');
    feeLabel.textContent = state.seatFees > 0 ? `+${formatPrice(state.seatFees)}` : '+₹0';

    if (state.selectedSeats.length === totalPax) {
      confirmBtn.textContent = 'Continue to Passenger Info';
      confirmBtn.disabled = false;
    } else {
      const remaining = totalPax - state.selectedSeats.length;
      confirmBtn.textContent = `Select ${remaining} More Seat${remaining > 1 ? 's' : ''}`;
      confirmBtn.disabled = true;
    }
  }
}

function proceedToPassengerModal() {
  closeSeatModal();
  openPassengerModal();
}

// --- PASSENGER DETAILS MODAL ---
function openPassengerModal() {
  if (!state.selectedFlight) return;

  const totalPax = state.passengers.adults + state.passengers.children;
  const container = document.getElementById('passenger-fields-container');

  let html = '';
  for (let i = 1; i <= totalPax; i++) {
    const isAdult = i <= state.passengers.adults;
    const seat = state.selectedSeats[i - 1] || 'Assigned at check-in';

    html += `
      <div class="passenger-box">
        <div class="flex-between" style="margin-bottom: 12px;">
          <strong style="font-size: 0.9375rem;">Passenger ${i} (${isAdult ? 'Adult' : 'Child'})</strong>
          <span class="text-xs text-primary font-bold">Seat: ${seat}</span>
        </div>
        <div class="form-row">
          <div class="input-group">
            <label for="pax-first-${i}">First Name</label>
            <input type="text" id="pax-first-${i}" required placeholder="First name" value="${i === 1 ? 'Alex' : (i === 2 ? 'Sarah' : 'Taylor')}">
          </div>
          <div class="input-group">
            <label for="pax-last-${i}">Last Name</label>
            <input type="text" id="pax-last-${i}" required placeholder="Last name" value="Walker">
          </div>
        </div>
        <div class="form-row">
          <div class="input-group">
            <label for="pax-age-${i}">Age</label>
            <input type="number" id="pax-age-${i}" required min="${isAdult ? 12 : 2}" max="99" value="${isAdult ? 28 + i : 8}">
          </div>
          <div class="input-group">
            <label for="pax-gender-${i}">Gender</label>
            <select id="pax-gender-${i}" style="padding: 12px; border: 1.5px solid var(--slate-200); border-radius: var(--radius-md); font-family: inherit; font-size: 0.9375rem;">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  updateBookingTotalSummary();
  document.getElementById('passenger-modal').style.display = 'flex';
}

function closePassengerModal() {
  document.getElementById('passenger-modal').style.display = 'none';
}

function updateBookingTotalSummary() {
  if (!state.selectedFlight) return;

  const totalPax = state.passengers.adults + state.passengers.children;
  const baseTotal = state.selectedFlight.baseFareINR * totalPax;
  const seatFeeTotal = state.seatFees;
  
  const baggageCheckbox = document.getElementById('extra-baggage-checkbox');
  const baggageFee = (baggageCheckbox && baggageCheckbox.checked) ? (1500 * totalPax) : 0;
  state.extraBaggage = (baggageCheckbox && baggageCheckbox.checked);

  const subtotal = baseTotal + seatFeeTotal + baggageFee;
  const taxes = Math.round(subtotal * 0.12); // 12% standard aviation taxes
  const totalAmount = subtotal + taxes;

  document.getElementById('summary-pax-count').textContent = totalPax;
  document.getElementById('summary-base-fare').textContent = formatPrice(baseTotal);
  document.getElementById('summary-seat-fee').textContent = seatFeeTotal > 0 ? formatPrice(seatFeeTotal) : 'Free';
  document.getElementById('summary-baggage-fee').textContent = baggageFee > 0 ? formatPrice(baggageFee) : 'Included';
  document.getElementById('summary-taxes').textContent = formatPrice(taxes);
  document.getElementById('summary-total-fare').textContent = formatPrice(totalAmount);

  return { totalPax, baseTotal, seatFeeTotal, baggageFee, taxes, totalAmount };
}

function handleBookingSubmission(e) {
  if (e) e.preventDefault();

  const flight = state.selectedFlight;
  if (!flight) return;

  const totalPax = state.passengers.adults + state.passengers.children;
  const passengersList = [];

  for (let i = 1; i <= totalPax; i++) {
    const first = document.getElementById(`pax-first-${i}`).value.trim();
    const last = document.getElementById(`pax-last-${i}`).value.trim();
    const age = document.getElementById(`pax-age-${i}`).value;
    const gender = document.getElementById(`pax-gender-${i}`).value;
    const seat = state.selectedSeats[i - 1] || '12A';

    passengersList.push({
      name: `${first} ${last}`,
      age: age,
      gender: gender,
      seat: seat
    });
  }

  const email = document.getElementById('contact-email').value;
  const phone = document.getElementById('contact-phone').value;
  const breakdown = updateBookingTotalSummary();

  // Generate unique PNR and Barcode
  const pnr = 'FL-' + Math.floor(10000 + Math.random() * 90000);
  const barcodeNum = `${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;

  const newBooking = {
    pnr: pnr,
    barcode: barcodeNum,
    createdAt: new Date().toISOString(),
    flight: flight,
    date: state.departureDate || new Date().toISOString().split('T')[0],
    passengers: passengersList,
    seats: state.selectedSeats,
    contact: { email, phone },
    breakdown: breakdown,
    gate: `${flight.origin.terminal} • Gate ${String.fromCharCode(65 + Math.floor(Math.random() * 4))}${Math.floor(1 + Math.random() * 20)}`,
    status: 'Confirmed'
  };

  // Save booking
  state.bookings.unshift(newBooking);
  saveBookings();

  // Close form modal and show confirmation E-ticket
  closePassengerModal();
  renderTicketModal(newBooking);
  showToast(`Booking confirmed! PNR: ${pnr}`);
}

// --- E-TICKET CONFIRMATION MODAL ---
function renderTicketModal(booking) {
  document.getElementById('ticket-airline').textContent = booking.flight.airline;
  document.getElementById('ticket-flight-no').textContent = booking.flight.flightNumber;
  document.getElementById('ticket-class').textContent = booking.flight.cabinClass.toUpperCase();

  document.getElementById('ticket-origin-city').textContent = booking.flight.origin.city;
  document.getElementById('ticket-origin-code').textContent = booking.flight.origin.code;
  document.getElementById('ticket-dep-time').textContent = booking.flight.departureTime;

  document.getElementById('ticket-duration').textContent = booking.flight.durationFormatted;
  document.getElementById('ticket-stops').textContent = booking.flight.layoverInfo;

  document.getElementById('ticket-dest-city').textContent = booking.flight.destination.city;
  document.getElementById('ticket-dest-code').textContent = booking.flight.destination.code;
  document.getElementById('ticket-arr-time').textContent = booking.flight.arrivalTime;

  const paxNames = booking.passengers.map(p => p.name).join(', ');
  document.getElementById('ticket-passenger-name').textContent = paxNames;
  document.getElementById('ticket-pnr').textContent = booking.pnr;
  document.getElementById('ticket-date').textContent = booking.date;
  document.getElementById('ticket-seats').textContent = booking.seats.join(', ') || 'Assigned at check-in';
  document.getElementById('ticket-gate').textContent = booking.gate;
  document.getElementById('ticket-fare-paid').textContent = formatPrice(booking.breakdown.totalAmount);
  document.getElementById('ticket-barcode-num').textContent = booking.barcode;

  document.getElementById('ticket-modal').style.display = 'flex';
}

function closeTicketModal() {
  document.getElementById('ticket-modal').style.display = 'none';
}

// --- MY BOOKINGS DRAWER & PERSISTENCE ---
function loadBookings() {
  try {
    const raw = localStorage.getItem('flighter_bookings');
    if (raw) {
      state.bookings = JSON.parse(raw);
    } else {
      // Add a dummy initial booking so the user has immediate data to see!
      const initialBooking = {
        pnr: 'FL-82194',
        barcode: '9841 2048 5912 3341',
        createdAt: new Date().toISOString(),
        flight: {
          airline: 'SkyWings',
          flightNumber: 'SW-204',
          cabinClass: 'economy',
          origin: AIRPORTS.DEL,
          destination: AIRPORTS.BOM,
          departureTime: '08:15 AM',
          arrivalTime: '10:30 AM',
          durationFormatted: '2h 15m',
          layoverInfo: 'Non-stop'
        },
        date: state.departureDate || '2026-09-10',
        passengers: [{ name: 'Alex Walker', age: 29, gender: 'Male', seat: '14A' }],
        seats: ['14A'],
        contact: { email: 'alex.walker@gmail.com', phone: '+91 98765 43210' },
        breakdown: { totalAmount: 5490 },
        gate: 'T3 • Gate B12',
        status: 'Confirmed'
      };
      state.bookings = [initialBooking];
      saveBookings();
    }
  } catch (err) {
    console.error('Failed to load bookings:', err);
    state.bookings = [];
  }
  updateBookingsBadge();
}

function saveBookings() {
  try {
    localStorage.setItem('flighter_bookings', JSON.stringify(state.bookings));
  } catch (err) {
    console.error('Failed to save bookings:', err);
  }
  updateBookingsBadge();
}

function updateBookingsBadge() {
  const badge = document.getElementById('bookings-count');
  if (badge) {
    badge.textContent = state.bookings.length;
  }
}

function openBookingsDrawer() {
  updateBookingsDrawerUI();
  document.getElementById('bookings-drawer').style.display = 'flex';
}

function closeBookingsDrawer() {
  document.getElementById('bookings-drawer').style.display = 'none';
}

function updateBookingsDrawerUI() {
  const container = document.getElementById('saved-bookings-list');
  if (!container) return;

  if (state.bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 40px 10px;">
        <svg class="empty-icon" style="width: 48px; height: 48px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/>
        </svg>
        <p class="font-bold">No active bookings</p>
        <p class="text-muted text-xs" style="margin-top: 4px;">Book a flight to view your ticket and flight status here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.bookings.map(b => `
    <div class="booking-item-card">
      <div class="booking-item-top">
        <span class="booking-pnr">${b.pnr}</span>
        <span class="booking-status">${b.status}</span>
      </div>
      <div class="booking-route">
        ${b.flight.origin.code} ➔ ${b.flight.destination.code}
      </div>
      <div class="booking-meta">
        <span>${b.flight.airline} • ${b.flight.flightNumber}</span>
        <span>Date: ${b.date}</span>
      </div>
      <div class="booking-meta">
        <span>Pass: ${b.passengers.map(p => p.name).join(', ')}</span>
        <span class="font-bold text-emerald">${formatPrice(b.breakdown.totalAmount)}</span>
      </div>
      <div class="booking-actions">
        <button class="btn btn-outline btn-sm" onclick="viewExistingTicket('${b.pnr}')">View Ticket</button>
        <button class="btn btn-secondary btn-sm" style="color: var(--red-500);" onclick="cancelBooking('${b.pnr}')">Cancel</button>
      </div>
    </div>
  `).join('');
}

function viewExistingTicket(pnr) {
  const booking = state.bookings.find(b => b.pnr === pnr);
  if (!booking) return;
  closeBookingsDrawer();
  renderTicketModal(booking);
}

function cancelBooking(pnr) {
  if (confirm(`Are you sure you want to cancel booking ${pnr}?`)) {
    state.bookings = state.bookings.filter(b => b.pnr !== pnr);
    saveBookings();
    updateBookingsDrawerUI();
    showToast(`Booking ${pnr} was cancelled`);
  }
}

// --- TOAST FEEDBACK ---
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
