const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100 // slow down by 250ms
      });
    const page1 = await browser.newPage();
    await page1.goto('https://www.expedia.com/tools/abacus/overrides?abov=-3|1|1', {waitUntil: 'domcontentloaded'});
    // await delay(1000);
    console.log(page1.url());

    //await page1.goto('https://www.expedia.com/?pwaLob=wizard-hotel-pwa-v2', {waitUntil: 'domcontentloaded'});
    await page1.goto('https://www.expedia.com/', {waitUntil: 'domcontentloaded'});
    await delay(1000);
    await page1.screenshot({path: 'example5.png'});
    console.log(page1.url());

    //await page1.type('button[data-stid=location-field-destination-dialog-trigger]', 'Chicago, IL');
    await page1.click('input[id=hotel-destination-hp-hotel]', {clickCount: 3});
    await page1.type('input[id=hotel-destination-hp-hotel]', 'Chicago, IL');
    
    await page1.click('input[id=hotel-checkin-hp-hotel]', {clickCount: 3});
    await page1.type('input[id=hotel-checkin-hp-hotel]', '12/12/2020');
    
    await page1.click('input[id=hotel-checkout-hp-hotel]', {clickCount: 3});  
    await page1.type('input[id=hotel-checkout-hp-hotel]', '12/14/2020');  
    
    await Promise.all([  
        page1.click('button[data-gcw-change-submit-text=Search'),
        page1.waitForNavigation(),
    ]);
    console.log(page1.url());

    await page1.click('a[data-stid=open-hotel-information]')
    
    await delay(1000);
    let pages = await browser.pages()
    let infosite; //set infosite to most recent tab
    for (const page of pages) {
        infosite = page;
    }

    console.log(infosite.url());
    
    
    let infositeTitle = await infosite.title();
    console.log(infositeTitle);
            
    await browser.close();
})();

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }