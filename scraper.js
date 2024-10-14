const puppeteer = require('puppeteer');

const scrapeIkman = async (keyword) => {

    //Initialized Puppeteer browser with headless configuration
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });

    const page = await browser.newPage();

    // Set user agent to avoid detection as a bot
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Search URL with keyword
    const searchUrl = `https://ikman.lk/en/ads/sri-lanka?query=${encodeURIComponent(keyword)}`;
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 60000 });

    try {
        await page.waitForSelector('.title--3yncE', { timeout: 20000 });
    } catch (error) {
        console.error('Error during scraping: ', error);
        await browser.close();
        throw new Error('Failed to load search results');
    }

        // Scrape the data
        const listings = await page.evaluate(() => {
            const results = [];
            const items = document.querySelectorAll('.title--3yncE'); 
        
            items.forEach(item => {
                const title = item ? item.innerText : null;
                // Find price within the same parent
                const priceElement = item.closest('div').querySelector('.price--3SnqI span'); 
                // Find location within the same parent
                const locationElement = item.closest('div').querySelector('.description--2-ez3');
                // Find date within the same parent
                const dateElement = item.closest('div').querySelector('.updated-time--1DbCk span'); 
                // Get the parent anchor tag for the listing URL
                const urlElement = item.closest('a'); 
    
                // Extract price text
                const price = priceElement ? priceElement.innerText : null;
                // Extract location text
                const location = locationElement ? locationElement.innerText : null; 
                // Extract date posted
                const datePosted = dateElement ? dateElement.innerText : null; 
                // Extract URL from the href attribute
                const listingUrl = urlElement ? urlElement.href : null; 
    
                // Push each listing's data into the results
                results.push({
                    title,
                    price,
                    location,
                    datePosted,
                    listingUrl
                });
            });
    
            return results;

        })

    await browser.close();
    return listings;

}
module.exports = scrapeIkman;