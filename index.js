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

    async doAdministratorLogin(username, password){
        const helper = this._getHelper();
        await helper.amOnPage('/administrator/index.php');
        await helper.fillField('#username', username);
        await helper.fillField('#password', password);
        await helper.click("//div[@class='login']/form/fieldset/div[4]/div/button");
    }
}
module.exports = JoomlaBrowser;