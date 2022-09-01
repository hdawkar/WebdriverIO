describe("To Check The Console Logs", async() => {

    beforeEach(async function () {
        await browser.url("http://localhost:3000/");
    });

    async function consoleCheck(arg){

        var res =  await browser.getLogs('browser');

        for (const testdata of res) { 
            console.log(testdata.message);
            console.log(testdata.message.includes(arg));
        }

    }

    it("To verify 'Hello World'", async() => {

        await consoleCheck('"Hello World"');

        await browser.$(".print-button").click();

    })

    it("To verify 'Clicked 1 times'", async() => {

        await consoleCheck('"Clicked 1 times"');

    })

    afterEach(function () {
        console.log("success")
    });
})
