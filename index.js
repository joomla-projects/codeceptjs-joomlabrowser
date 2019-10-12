/**
 * Resemble.js helper class for CodeceptJS, this allows screen comparison
 * @author Puneet Kala
 */
const supportedHelpers = [
    'Mochawesome',
    'WebDriverIO',
    'WebDriver',
    'Protractor',
    'Appium',
    'Nightmare',
    'Puppeteer',
];
class JoomlaBrowser extends Helper {

    async doAdministratorLogin(username, password) {
        const helper = this._getHelper();
        await helper.amOnPage('joomla-cms/administrator/index.php');
        await helper.fillField('username', username);
        await helper.fillField('passwd', password);
        await helper.click("Log in");
    }

    _getHelper() {
        if (this.helpers['Puppeteer']) {
            return this.helpers['Puppeteer'];
        }

        if (this.helpers['WebDriver']) {
            return this.helpers['WebDriver'];
        }
        if (this.helpers['Appium']) {
            return this.helpers['Appium'];
        }
        if (this.helpers['WebDriverIO']) {
            return this.helpers['WebDriverIO'];
        }

        throw new Error('No matching helper found. Supported helpers: WebDriver/Appium/Puppeteer');
    }
}
module.exports = JoomlaBrowser;