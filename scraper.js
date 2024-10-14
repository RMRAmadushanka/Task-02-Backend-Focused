const puppeteer = require('puppeteer');

const scrapeIkman = async (keyword) => {
    const browser = await puppeteer.launch({
        headless: true, // Run headless
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Ensure Puppeteer runs without issues
    });

    const page = await browser.newPage();

}
module.exports = scrapeIkman;