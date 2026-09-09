/* ==========================================================================
   FLIGHTER v2 - NEXT-GEN MOTION UI FLIGHT ENGINE
   Core Interactive Logic, Physics & Multi-Style Presets
   ========================================================================== */

// --- AIRPORTS & AIRLINES DATABASE ---
const AIRPORTS = {
  DEL: { code: 'DEL', name: 'Indira Gandhi Intl', city: 'New Delhi', country: 'India', terminal: 'T3' },
  BOM: { code: 'BOM', name: 'Chhatrapati Shivaji Intl', city: 'Mumbai', country: 'India', terminal: 'T2' },
  BLR: { code: 'BLR', name: 'Kempegowda Intl', city: 'Bengaluru', country: 'India', terminal: 'T1' },
  DXB: { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE', terminal: 'T3' },
  LHR: { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', terminal: 'T5' },
  JFK: { code: 'JFK', name: 'John F. Kennedy Intl', city: 'New York', country: 'USA', terminal: 'T4' },
  SFO: { code: 'SFO', name: 'San Francisco Intl', city: 'San Francisco', country: 'USA', terminal: 'T2' },
  SIN: { code: 'SIN', name: 'Changi Airport', city: 'Singapore', country: 'Singapore', terminal: 'T3' },
  HND: { code: 'HND', name: 'Tokyo Haneda', city: 'Tokyo', country: 'Japan', terminal: 'T2' },
  CDG: { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France', terminal: 'T2E' },
  SYD: { code: 'SYD', name: 'Kingsford Smith', city: 'Sydney', country: 'Australia', terminal: 'T1' },
  FRA: { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', terminal: 'T1' }
};

const AIRLINES = [
  { name: 'SkyWings', code: 'SW', badge: 'SW' },
  { name: 'AeroNova', code: 'AN', badge: 'AN' },
  { name: 'StarJet', code: 'SJ', badge: 'SJ' },
  { name: 'GlobalAir', code: 'GA', badge: 'GA' },
  { name: 'PacificAir', code: 'PA', badge: 'PA' },
  { name: 'VistaJet', code: 'VJ', badge: 'VJ' }
];

const CURRENCIES = {
  INR: { symbol: '₹', rate: 1 },
  USD: { symbol: '$', rate: 0.012 },
  EUR: { symbol: '€', rate: 0.011 },
  GBP: { symbol: '£', rate: 0.0095 }
};

let currentCurrency = 'INR';

// --- STATE MANAGEMENT ---
let state = {
  theme: 'light',
  stylePreset: 'origin',
  tripType: 'one-way',
  origin: 'DEL',
  destination: 'BOM',
  departureDate: '',
  returnDate: '',
  cabinClass: 'economy',
  passengers: { adults: 1, children: 0 },
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
  initTheme();
  initDates();
  initPreset();
  loadBookings();
  populateAirlineFilters();
  executeInitialSearch();
});

// --- ANIMATED THEME SWITCH & VIEW TRANSITION ---
function initTheme() {
  const saved = localStorage.getItem('flighter_v2_theme') || 'light';
  applyTheme(saved, false);
}

function toggleTheme(e) {
  const current = state.theme || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';

  // Get pointer coordinates for radial ripple expansion
  const x = e ? e.clientX : window.innerWidth - 60;
  const y = e ? e.clientY : 40;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  // If View Transition API is not supported in this browser, fallback to smooth CSS transition
  if (!document.startViewTransition) {
    applyTheme(newTheme, true);
    return;
  }

  const transition = document.startViewTransition(() => {
    applyTheme(newTheme, true);
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 500,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
}

function applyTheme(themeName, notify = false) {
  state.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);

  const label = document.getElementById('theme-mode-label');
  if (label) {
    label.textContent = themeName === 'dark' ? 'Dark' : 'Light';
  }

  localStorage.setItem('flighter_v2_theme', themeName);
  if (notify) {
    showToast(`Switched to ${themeName === 'dark' ? 'Dark' : 'Light'} Mode`);
  }
}

// --- STYLE PRESET SWITCHER (Motion UI Architecture) ---
function initPreset() {
  const saved = localStorage.getItem('flighter_v2_style_preset') || 'origin';
  switchStylePreset(saved, false);
}

function switchStylePreset(presetName, persist = true) {
  state.stylePreset = presetName;
  document.documentElement.setAttribute('data-style', presetName);

  document.querySelectorAll('#preset-selector .segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === presetName);
  });

  if (persist) {
    localStorage.setItem('flighter_v2_style_preset', presetName);
    showToast(`Switched aesthetic to ${presetName.toUpperCase()}`);
  }
}

// --- SPOTLIGHT CURSOR TRACKING (Motion UI Primitives) ---
function handleCardSpotlight(e, cardEl) {
  const rect = cardEl.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cardEl.style.setProperty('--mouse-x', `${x}px`);
  cardEl.style.setProperty('--mouse-y', `${y}px`);
}

// --- 3D PERSPECTIVE TILT CARD ---
function handleTiltCard(e, cardEl) {
  const rect = cardEl.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;

  cardEl.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
}

function resetTiltCard(cardEl) {
  cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

// --- DATE INITIALIZATION ---
function initDates() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const retD = new Date();
  retD.setDate(retD.getDate() + 5);

  const depInput = document.getElementById('departure-date');
  const retInput = document.getElementById('return-date');

  const tomStr = tomorrow.toISOString().split('T')[0];
  const retStr = retD.toISOString().split('T')[0];

  depInput.value = tomStr;
  depInput.min = new Date().toISOString().split('T')[0];
  retInput.value = retStr;
  retInput.min = tomStr;

  state.departureDate = tomStr;
  state.returnDate = retStr;
}

// --- CURRENCY CONVERSION & FORMATTER ---
function changeCurrency(newCurrency) {
  currentCurrency = newCurrency;
  applyFilters();
  updateBookingTotalSummary();
  updateBookingsDrawerUI();
  showToast(`Currency changed to ${newCurrency}`);
}

function formatPrice(amountINR) {
  const cur = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(amountINR * cur.rate);
  return `${cur.symbol}${converted.toLocaleString()}`;
}

// --- DUMMY FLIGHT GENERATOR ---
function generateDummyFlights(originCode, destCode, cabinClass) {
  const orig = AIRPORTS[originCode] || { code: originCode, city: originCode, name: `${originCode} Airport`, terminal: 'T1' };
  const dest = AIRPORTS[destCode] || { code: destCode, city: destCode, name: `${destCode} Airport`, terminal: 'T2' };

  const isDomestic = (originCode === 'DEL' || originCode === 'BOM' || originCode === 'BLR') &&
                     (destCode === 'DEL' || destCode === 'BOM' || destCode === 'BLR');

  const baseDurationMin = isDomestic ? 135 : 420;
  const basePriceINR = isDomestic ? 4900 : 38500;
  const classMultiplier = cabinClass === 'business' ? 2.85 : (cabinClass === 'premium' ? 1.45 : 1.0);

  const schedules = [
    { hour: 6, min: 20, airline: AIRLINES[0], flightNum: 204, stops: 0, aircraft: 'Boeing 787-9 Dreamliner', durDiff: 0, priceDiff: 200 },
    { hour: 8, min: 45, airline: AIRLINES[1], flightNum: 330, stops: 0, aircraft: 'Airbus A321neo', durDiff: -15, priceDiff: 650 },
    { hour: 11, min: 15, airline: AIRLINES[2], flightNum: 712, stops: 1, aircraft: 'Boeing 777-300ER', durDiff: 110, priceDiff: -550 },
    { hour: 14, min: 30, airline: AIRLINES[3], flightNum: 580, stops: 0, aircraft: 'Airbus A350-900', durDiff: 5, priceDiff: 1100 },
    { hour: 17, min: 50, airline: AIRLINES[4], flightNum: 420, stops: 1, aircraft: 'Boeing 737 MAX 9', durDiff: 125, priceDiff: -400 },
    { hour: 20, min: 10, airline: AIRLINES[5], flightNum: 890, stops: 0, aircraft: 'Airbus A330neo', durDiff: -5, priceDiff: 300 },
    { hour: 23, min: 40, airline: AIRLINES[0], flightNum: 914, stops: 0, aircraft: 'Boeing 787-8', durDiff: 10, priceDiff: -700 }
  ];

  return schedules.map(s => {
    const totalDuration = Math.max(75, baseDurationMin + s.durDiff);
    const depTimeStr = formatTime(s.hour, s.min);

    const arrDate = new Date();
    arrDate.setHours(s.hour, s.min + totalDuration, 0, 0);
    const arrTimeStr = formatTime(arrDate.getHours(), arrDate.getMinutes());
    const nextDay = (s.min + totalDuration) >= (24 - s.hour) * 60;
    const baseFare = Math.round((basePriceINR + s.priceDiff) * classMultiplier);

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
      layoverInfo: s.stops === 0 ? 'Non-stop' : `1 Stop via ${isDomestic ? 'AMD' : 'DXB'}`,
      cabinClass: cabinClass,
      baseFareINR: baseFare,
      amenities: ['High-Speed WiFi', 'Universal Power', 'Chef-Curated Meals', '4K In-Flight Media']
    };
  });
}

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

// --- SEARCH & ROUTE HANDLERS ---
function setTripType(type) {
  state.tripType = type;
  document.getElementById('btn-one-way').classList.toggle('active', type === 'one-way');
  document.getElementById('btn-round-trip').classList.toggle('active', type === 'round-trip');

  const returnGroup = document.getElementById('return-date-group');
  if (returnGroup) {
    returnGroup.style.display = type === 'round-trip' ? 'flex' : 'none';
  }
}

function swapAirports() {
  const orig = document.getElementById('origin-input');
  const dest = document.getElementById('destination-input');
  const temp = orig.value;
  orig.value = dest.value;
  dest.value = temp;
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
  document.getElementById('passenger-label').textContent = total === 1 ? '1 Traveler' : `${total} Travelers`;
}

function quickFillRoute(orig, dest) {
  document.getElementById('origin-input').value = orig;
  document.getElementById('destination-input').value = dest;
  handleSearch(new Event('submit'));
}

function cleanAirport(raw) {
  if (!raw) return 'DEL';
  const trimmed = raw.trim().toUpperCase();
  const code = trimmed.slice(0, 3);
  if (AIRPORTS[code]) return code;
  for (const [k, v] of Object.entries(AIRPORTS)) {
    if (trimmed.includes(v.city.toUpperCase()) || trimmed.includes(k)) return k;
  }
  return code;
}

function handleClassChange() {
  handleSearch(new Event('submit'));
}

function handleSearch(e) {
  if (e && e.preventDefault) e.preventDefault();

  const origCode = cleanAirport(document.getElementById('origin-input').value);
  const destCode = cleanAirport(document.getElementById('destination-input').value);
  const cabinClass = document.getElementById('cabin-class').value;
  const depDate = document.getElementById('departure-date').value;

  if (origCode === destCode) {
    showToast('Origin and destination cannot be identical');
    return;
  }

  state.origin = origCode;
  state.destination = destCode;
  state.cabinClass = cabinClass;
  state.departureDate = depDate;

  state.flights = generateDummyFlights(origCode, destCode, cabinClass);

  const origInfo = AIRPORTS[origCode] || { city: origCode, code: origCode };
  const destInfo = AIRPORTS[destCode] || { city: destCode, code: destCode };
  document.getElementById('results-headline').textContent = `${origInfo.city} (${origCode}) ➔ ${destInfo.city} (${destCode})`;
  document.getElementById('results-subheadline').textContent = `${state.flights.length} flights tracked for ${depDate}`;

  applyFilters();
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

// --- FILTERS & SORTING ---
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

function applyFilters() {
  const allowedStops = Array.from(document.querySelectorAll('input[name="stopsFilter"]:checked')).map(cb => cb.value);
  const allowedAirlines = Array.from(document.querySelectorAll('input[name="airlineFilter"]:checked')).map(cb => cb.value);

  let filtered = state.flights.filter(f => {
    const stopsStr = f.stops >= 2 ? '2' : String(f.stops);
    if (!allowedStops.includes(stopsStr)) return false;
    if (allowedAirlines.length > 0 && !allowedAirlines.includes(f.airline)) return false;

    if (state.filters.departureTimes.length > 0) {
      const h = f.departureHour;
      let band = 'early';
      if (h >= 6 && h < 12) band = 'morning';
      else if (h >= 12 && h < 18) band = 'afternoon';
      else if (h >= 18 && h < 24) band = 'evening';
      if (!state.filters.departureTimes.includes(band)) return false;
    }

    if (f.baseFareINR > state.filters.maxPrice) return false;
    return true;
  });

  if (state.sortBy === 'cheapest') {
    filtered.sort((a, b) => a.baseFareINR - b.baseFareINR);
  } else if (state.sortBy === 'fastest') {
    filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);
  } else {
    filtered.sort((a, b) => {
      const scoreA = a.baseFareINR + (a.durationMinutes * 45) + (a.stops * 2500);
      const scoreB = b.baseFareINR + (b.durationMinutes * 45) + (b.stops * 2500);
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

function toggleTimeFilter(btn, band) {
  btn.classList.toggle('active');
  const idx = state.filters.departureTimes.indexOf(band);
  if (idx > -1) state.filters.departureTimes.splice(idx, 1);
  else state.filters.departureTimes.push(band);
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

// --- RENDER SPOTLIGHT FLIGHT CARDS ---
function renderFlightCards(flights) {
  const container = document.getElementById('flights-container');
  if (!container) return;

  if (flights.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 60px 20px; text-align: center;">
        <h3>No flights match your filters</h3>
        <p class="text-muted text-sm" style="margin: 8px 0 16px 0;">Try resetting your filters or adjusting your departure time.</p>
        <button class="btn btn-outline btn-sm motion-press" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = flights.map(f => {
    const totalPax = state.passengers.adults + state.passengers.children;
    const totalFare = f.baseFareINR * totalPax;

    return `
      <div class="flight-card spotlight-card" onmousemove="handleCardSpotlight(event, this)">
        <div class="spotlight-layer"></div>
        <div class="flight-main-details">
          <div class="flight-airline-bar">
            <div class="airline-badge">${f.airlineBadge}</div>
            <div>
              <span class="airline-name">${f.airline}</span>
              <span class="text-xs text-muted" style="margin-left: 6px;">${f.flightNumber}</span>
            </div>
            <span class="aircraft-type">${f.aircraft}</span>
          </div>

          <div class="flight-timeline">
            <div class="flight-point">
              <span class="flight-time">${f.departureTime}</span>
              <span class="flight-code">${f.origin.code}</span>
              <span class="flight-city">${f.origin.city}</span>
            </div>

            <div class="flight-duration-track">
              <span class="duration-label">${f.durationFormatted}</span>
              <div class="flight-line">
                <svg class="flight-plane-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <span class="stops-label ${f.stops === 0 ? 'direct' : 'layover'}">
                ${f.layoverInfo}
              </span>
            </div>

            <div class="flight-point dest">
              <span class="flight-time">${f.arrivalTime}</span>
              <span class="flight-code">${f.destination.code}</span>
              <span class="flight-city">${f.destination.city}</span>
            </div>
          </div>

          <div class="flight-amenities">
            ${f.amenities.map(a => `<span class="amenity-item">✓ ${a}</span>`).join('')}
          </div>
        </div>

        <div class="flight-price-col">
          <div class="price-amount">${formatPrice(f.baseFareINR)}</div>
          <div class="price-unit">per passenger</div>
          ${totalPax > 1 ? `<div class="text-xs text-muted" style="margin-bottom: 8px;">Total: ${formatPrice(totalFare)}</div>` : ''}
          <button class="btn btn-primary motion-press" onclick="openSeatModal('${f.id}')">
            Select Flight
          </button>
        </div>
      </div>
    `;
  }).join('');
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
  const bContainer = document.getElementById('business-cabin');
  const eContainer = document.getElementById('economy-cabin');

  let bHtml = '';
  for (let r = 1; r <= 3; r++) {
    bHtml += `
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
  bContainer.innerHTML = bHtml;

  let eHtml = '';
  for (let r = 10; r <= 20; r++) {
    const isExtra = (r === 10 || r === 15);
    eHtml += `
      <div class="seat-row">
        <span class="row-number">${r}</span>
        ${createSeatBtn(r, 'A', false, isExtra)}
        ${createSeatBtn(r, 'B', false, isExtra)}
        ${createSeatBtn(r, 'C', false, isExtra)}
        <div class="aisle-gap"></div>
        ${createSeatBtn(r, 'D', false, isExtra)}
        ${createSeatBtn(r, 'E', false, isExtra)}
        ${createSeatBtn(r, 'F', false, isExtra)}
      </div>
    `;
  }
  eContainer.innerHTML = eHtml;
}

function createSeatBtn(row, col, isBusiness, isExtra = false) {
  const seatId = `${row}${col}`;
  const occupied = (row * 7 + col.charCodeAt(0)) % 5 === 0;
  const isSelected = state.selectedSeats.includes(seatId);

  let classes = 'seat-btn motion-press';
  if (isExtra) classes += ' extra-legroom';
  if (isSelected) classes += ' selected';
  if (occupied) classes += ' occupied';

  return `
    <button type="button" 
      class="${classes}" 
      data-seat="${seatId}" 
      ${occupied ? 'disabled' : ''} 
      onclick="handleSeatClick('${seatId}', ${isExtra})">
      ${col}
    </button>
  `;
}

function handleSeatClick(seatId, isExtra) {
  const totalPax = state.passengers.adults + state.passengers.children;
  const idx = state.selectedSeats.indexOf(seatId);

  if (idx > -1) {
    state.selectedSeats.splice(idx, 1);
  } else {
    if (state.selectedSeats.length >= totalPax) {
      state.selectedSeats.shift();
    }
    state.selectedSeats.push(seatId);
  }

  let fee = 0;
  state.selectedSeats.forEach(s => {
    const row = parseInt(s);
    if (row === 10 || row === 15) fee += 500;
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
      confirmBtn.textContent = 'Continue to Passenger Details';
      confirmBtn.disabled = false;
    } else {
      const rem = totalPax - state.selectedSeats.length;
      confirmBtn.textContent = `Select ${rem} More Seat${rem > 1 ? 's' : ''}`;
      confirmBtn.disabled = true;
    }
  }
}

function proceedToPassengerModal() {
  closeSeatModal();
  openPassengerModal();
}

// --- PASSENGER & CHECKOUT MODAL ---
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
          <span class="text-xs font-bold" style="color: var(--primary);">Seat: ${seat}</span>
        </div>
        <div class="form-row">
          <div class="input-group">
            <label for="pax-first-${i}">First Name</label>
            <input type="text" id="pax-first-${i}" required placeholder="First name" value="${i === 1 ? 'Alex' : 'Taylor'}">
          </div>
          <div class="input-group">
            <label for="pax-last-${i}">Last Name</label>
            <input type="text" id="pax-last-${i}" required placeholder="Last name" value="Walker">
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

  const baggageCb = document.getElementById('extra-baggage-checkbox');
  const baggageFee = (baggageCb && baggageCb.checked) ? (1500 * totalPax) : 0;
  state.extraBaggage = (baggageCb && baggageCb.checked);

  const subtotal = baseTotal + seatFeeTotal + baggageFee;
  const taxes = Math.round(subtotal * 0.12);
  const totalAmount = subtotal + taxes;

  document.getElementById('summary-pax-count').textContent = totalPax;
  document.getElementById('summary-base-fare').textContent = formatPrice(baseTotal);
  document.getElementById('summary-seat-fee').textContent = seatFeeTotal > 0 ? formatPrice(seatFeeTotal) : 'Free';
  document.getElementById('summary-baggage-fee').textContent = baggageFee > 0 ? formatPrice(baggageFee) : 'Included';
  document.getElementById('summary-taxes').textContent = formatPrice(taxes);
  document.getElementById('summary-total-fare').textContent = formatPrice(totalAmount);

  return { totalPax, baseTotal, seatFeeTotal, baggageFee, taxes, totalAmount };
}

// --- ACTION SWAP SUBMISSION & CONFETTI (Motion UI Primitives) ---
function handleBookingSubmission(e) {
  if (e) e.preventDefault();
  const flight = state.selectedFlight;
  if (!flight) return;

  const totalPax = state.passengers.adults + state.passengers.children;
  const passengersList = [];

  for (let i = 1; i <= totalPax; i++) {
    const first = document.getElementById(`pax-first-${i}`).value.trim();
    const last = document.getElementById(`pax-last-${i}`).value.trim();
    passengersList.push({
      name: `${first} ${last}`,
      seat: state.selectedSeats[i - 1] || '12A'
    });
  }

  const btn = document.getElementById('btn-confirm-booking');
  const defaultState = btn.querySelector('.action-default');
  const loadingState = btn.querySelector('.action-loading');
  const successState = btn.querySelector('.action-success');

  // Motion Action Swap State: Loading
  defaultState.style.display = 'none';
  loadingState.style.display = 'inline-flex';
  btn.disabled = true;

  setTimeout(() => {
    // Motion Action Swap State: Success
    loadingState.style.display = 'none';
    successState.style.display = 'inline-flex';

    const pnr = 'FL-' + Math.floor(20000 + Math.random() * 79000);
    const barcodeNum = `${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking = {
      pnr: pnr,
      barcode: barcodeNum,
      createdAt: new Date().toISOString(),
      flight: flight,
      date: state.departureDate || '2026-09-10',
      passengers: passengersList,
      seats: state.selectedSeats,
      breakdown: updateBookingTotalSummary(),
      gate: `${flight.origin.terminal} • Gate ${String.fromCharCode(65 + Math.floor(Math.random() * 4))}${Math.floor(1 + Math.random() * 20)}`,
      status: 'Confirmed'
    };

    state.bookings.unshift(newBooking);
    saveBookings();

    setTimeout(() => {
      closePassengerModal();
      defaultState.style.display = 'inline-flex';
      loadingState.style.display = 'none';
      successState.style.display = 'none';
      btn.disabled = false;

      renderTicketModal(newBooking);
      triggerCelebrationConfetti();
      showToast(`Flight Reserved! PNR: ${pnr}`);
    }, 600);
  }, 900);
}

// --- CONFETTI PARTICLE SYSTEM ---
function triggerCelebrationConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#38bdf8'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 100,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  let frames = 0;
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    frames++;
    if (frames < 90) {
      requestAnimationFrame(animateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(animateConfetti);
}

// --- E-TICKET CONFIRMATION ---
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

  document.getElementById('ticket-passenger-name').textContent = booking.passengers.map(p => p.name).join(', ');
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

// --- LOCAL STORAGE & BOOKINGS DRAWER ---
function loadBookings() {
  try {
    const raw = localStorage.getItem('flighter_v2_bookings');
    if (raw) {
      state.bookings = JSON.parse(raw);
    } else {
      state.bookings = [{
        pnr: 'FL-94281',
        barcode: '4921 5920 1823',
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
        passengers: [{ name: 'Alex Walker', seat: '14A' }],
        seats: ['14A'],
        breakdown: { totalAmount: 5490 },
        gate: 'T3 • Gate B12',
        status: 'Confirmed'
      }];
      saveBookings();
    }
  } catch (err) {
    state.bookings = [];
  }
  updateBookingsBadge();
}

function saveBookings() {
  try {
    localStorage.setItem('flighter_v2_bookings', JSON.stringify(state.bookings));
  } catch (err) {
    console.error('Storage error:', err);
  }
  updateBookingsBadge();
}

function updateBookingsBadge() {
  const badge = document.getElementById('bookings-count');
  if (badge) badge.textContent = state.bookings.length;
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
      <div class="empty-state" style="padding: 40px 10px; text-align: center;">
        <p class="font-bold">No active reservations</p>
        <p class="text-muted text-xs" style="margin-top: 4px;">Book a demo flight to track your itinerary here.</p>
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
        <button class="btn btn-outline btn-sm motion-press" onclick="viewExistingTicket('${b.pnr}')">View Ticket</button>
        <button class="btn btn-secondary btn-sm motion-press" style="color: #ef4444;" onclick="cancelBooking('${b.pnr}')">Cancel</button>
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
  if (confirm(`Cancel booking ${pnr}?`)) {
    state.bookings = state.bookings.filter(b => b.pnr !== pnr);
    saveBookings();
    updateBookingsDrawerUI();
    showToast(`Booking ${pnr} cancelled`);
  }
}

// --- TOAST NOTIFICATION STACK ---
function showToast(message) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const item = document.createElement('div');
  item.className = 'toast-item';
  item.textContent = message;
  stack.appendChild(item);
  setTimeout(() => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => item.remove(), 300);
  }, 3000);
}
