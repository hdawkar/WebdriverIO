const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://www.saucedemo.com/');

    const UN=browser.$("#user-name");
    await UN.setValue("problem_user");
    
    const PW=browser.$("#password");
    await PW.setValue("secret_sauce");

    const submitBtn=browser.$("#login-button");
    await submitBtn.click();

    await browser.setTimeout({ 'pageLoad': 20000 });
    await browser.saveScreenshot('./screenshotA1.png');

})();


(async () => {
    const browser1 = await remote({
        capabilities: {
            browserName: 'MicrosoftEdge'
        }
    })

    await browser1.url('https://www.saucedemo.com/');

    const UN1=browser1.$("#user-name");
    await UN1.setValue("standard_user");
    
    const PW1=browser1.$("#password");
    await PW1.setValue("secret_sauce");

    const submitBtn1=browser1.$("#login-button");
    await submitBtn1.click();

    await browser1.setTimeout({ 'pageLoad': 20000 });
    await browser1.saveScreenshot('./screenshotB1.png');
})();

