/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

     constructor(browser = null) {
        this._browser = browser;
    }

    get browser() {
        if (this._browser) {
            return this._browser;
        }
        // Fallback to some browser.
        return browser;
    }
    open (path) {
        return this.browser.url(path);
    }
}
