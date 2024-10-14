const express = require('express');
const scraper = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint for searching listings on ikman.lk
app.get('/search', async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        const listings = await scraper(keyword);
        res.json(listings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

