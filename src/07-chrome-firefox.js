const pchrome = require("puppeteer");
const pfirefox = require("puppeteer-firefox");

(async () => {
    const test = async browser => {
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.screenshot({
            path: 'example.png'
        });

        await browser.close();
    }

    const chrome = await pchrome.launch({
        "headless": false
    })
    await test(chrome);

    const firefox = await pfirefox.launch({
        "headless": false
    });
    await test(firefox);

})();
