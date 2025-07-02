# Analytics.github.io

* Responsive design that works on mobile and desktop
  
4 Interactive D3.js Charts:
Bar Chart - Sales by category with hover tooltips
Line Chart - Sales trends over time with animated line drawing
Pie Chart - Regional sales distribution with hover effects
Scatter Plot - Product correlation analysis

Advanced Filtering:
Search box for products/categories
Category and region dropdowns
Date range picker (start/end dates)
Active products toggle
Clear filters button

Real-time Updates - Charts update instantly when filters change
Loading States and error handling
Statistics Cards showing key metrics

* Backend API:

RESTful API at /api/data with full filtering support
Advanced Data Processing API at /api/data/process with 8 different operations:
Time period grouping (daily, weekly, monthly, quarterly, yearly)
Moving averages calculation
Trend analysis with slope and direction
Custom aggregations (sum, average, count, min, max, median, stddev)
Percentile analysis
Correlation analysis between fields
Seasonal decomposition
Outlier detection (IQR and Z-score methods)


* Database:

PostgreSQL database with optimized schema
Indexed tables for fast queries
Sample data with 50+ realistic sales records
Aggregation tables for performance optimization

* Interactive Features:

Smooth animations and transitions on all charts
Hover tooltips with detailed information
Chart switching between different visualization types
Responsive design that adapts to screen size
Professional styling with Tailwind CSS

* How to Use:


View the Dashboard - The main page shows all charts and filters

Filter Data - Use the search, dropdowns, date pickers, and toggles

Switch Charts - Click the chart type buttons to change visualizations

Explore Data - Hover over chart elements for detailed tooltips

API Access - The backend APIs can be used for additional data processing


* Technical Implementation:

Frontend: React with D3.js v7 for visualizations
Backend: Node.js functions with comprehensive data processing
Database: PostgreSQL with optimized indexes
Styling: Tailwind CSS with Font Awesome icons
Features: Real-time filtering, responsive design, error handling
