const puppeteer = require('puppeteer');
(async function() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.google.com').catch(function() {
        console.log('Error while loading up the url.');
    });
    await page.pdf({path: './file.pdf', format: 'A4', printBackground: true});
    browser.close();
})();