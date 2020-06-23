const pff = require('puppeteer-firefox');

(async () => {
    const browser = await pff.launch({
        headless: false
    }); // default is true
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({
        path: 'example.png'
    });

    await browser.close();
})();
