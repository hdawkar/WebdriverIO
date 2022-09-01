describe('Automation test', () => {

    before(async() => {
        await browser.url("https://godotengine.org/");
        await browser.maximizeWindow();
    });


    it('should click on about', async () => {
        let asset = await browser.$("//a[contains(text(),'Assets')]");
        await asset.click();
        await expect(asset).toBeSelected;
    });

    it('should search test in searchBox', async () => {
        let searchBox = await browser.$(".input-group");
        await searchBox.setValue("test");

        let searchButton = await browser.$("//button[contains(text(),'Search')]");
        await searchButton.click();
    });

    
    
});