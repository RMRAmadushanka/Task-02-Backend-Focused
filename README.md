# Task-02-Backend-Focused

Ikman.lk Scraper API

This project is a web scraping API built with Puppeteer and Express.js. It scrapes listings from ikman.lk based on a provided keyword, fetching key details like the title, price, location, URL, and date posted. The scraped data is returned as a JSON response via an API endpoint.

Features

Scrapes title, price, location, date posted, and listing URL from ikman.lk.
Accepts a keyword to search listings on ikman.lk.
Returns the scraped data as a JSON response through the http://localhost:3000/search?keyword=car API endpoint.
Error handling for failed search requests or missing data.

Prerequisites

Before running the project, make sure you have the following installed:

Node.js (v14.x or higher)
npm (v6.x or higher)


Getting Started

1. Clone the repository
git clone https://github.com/your-username/ikman-scraper-api.git
cd ikman-scraper-api

2. Install dependencies
npm install

3. Run the project
To start the Express.js server, run the following command:

npm start

This will start the server on http://localhost:3000

API Usage

Endpoint: /search
Method: GET
Query Parameters:

keyword: (Required) The search term to use for fetching listings on ikman.lk.

Example Request:

GET http://localhost:3000/search?keyword=car

Example Response:

[
  {
    "title": "Rent a car - Toyota vitz",
    "price": "Rs 7,500",
    "location": "Gampaha, Rentals",
    "datePosted": "20 minutes",
    "listingUrl": "https://ikman.lk/en/ad/rent-a-car-toyota-vitz-for-rent-gampaha"
  },
  {
    "title": "Toyota Prius 2017",
    "price": "Rs 4,800,000",
    "location": "Colombo, Cars",
    "datePosted": "1 hour",
    "listingUrl": "https://ikman.lk/en/ad/toyota-prius-2017-for-sale-colombo"
  }
]

