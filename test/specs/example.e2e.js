const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', async() => {


    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


it('', async()=> {
    await browser.url("http://localhost:3000/");

    await browser.setTimeout({ 'pageLoad': 10000 });

    console.log(await browser.getLogs('browser'));

    console.log("----#####******______+++++++");
 })