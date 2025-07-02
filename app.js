// Mock data - in a real app, this would come from an API
const mockData = [
    { id: 1, category: "Electronics", region: "North America", sales: 12000, date: "2024-01-01", active: true },
    // ... rest of the mock data
];

// State management
let currentData = [...mockData];
let filteredData = [...mockData];
let currentPage = 1;
const itemsPerPage = 10;

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
// ... all other DOM element selections

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Set default date range to last 30 days
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    startDateInput.valueAsDate = startDate;
    endDateInput.valueAsDate = endDate;
    
    // Populate filter dropdowns
    populateDropdowns();
    
    // Initialize charts
    initCharts();
    
    // Apply initial filters and render data
    applyFilter();
    
    // Set up event listeners
    setupEventListeners();
});

// All the functions (populateDropdowns, setupEventListeners, applyFilter, etc.)
// ... rest of the JavaScript code