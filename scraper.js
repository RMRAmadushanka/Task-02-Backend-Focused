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

    

}
module.exports = scrapeIkman;