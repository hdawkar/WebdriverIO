const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.startTracing()
    await browser.url("http://localhost:3000/")
    await browser.endTracing()
    
    fs.writeFileSync('/path/to/tracelog.json', JSON.stringify(browser.getTraceLogs()))

})();