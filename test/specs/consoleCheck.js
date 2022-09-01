describe("To Check The Console Logs", () => {

  async function consoleCheck(text) {

    var results = await browser.getLogs('browser');

    const Msg = results.map((object) => {
      var seps = object.message;
      var indvds = seps.split(" ");
      indvds.shift();
      indvds.shift();
      return indvds.join(" ");
    })

    const hasOutput = Msg.includes(text);
    expect(hasOutput).toBeTruthy();
  }

  it("Should verify the text 'Hello World'", async () => {

    await browser.url("http://localhost:3000/");

    await consoleCheck('"Hello World"');

  })

  it("Should verify the text 'Clicked 1 times'", async () => {

    await browser.$(".print-button").click();

    await consoleCheck('"Clicked 1 times"');
                                                                                                                                   
  })
})