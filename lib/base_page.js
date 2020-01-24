let webdriver = require("selenium-webdriver");
let By = webdriver.By,
  until = webdriver.until;

let Page = function() {
  let driver;

  this.init = function() {
    driver = this.driver = new webdriver.Builder().forBrowser("chrome").build();
  };

  this.visit = async function(theUrl) {
    return driver.get(theUrl);
  };

  this.quit = async function() {
    return driver.quit();
  };

  this.find = async function(elem) {
    await driver.wait(until.elementLocated(By.css(elem)), 50000);
    return driver.findElement(By.css(elem));
  };

  this.findAll = async function(elem) {
    await driver.wait(until.elementLocated(By.css(elem)), 50000);
    return driver.findElements(By.css(elem));
  };

  this.write = async function(elem, txt) {
    const foundElem = await this.find(elem);
    return foundElem.sendKeys(txt);
  };
};

module.exports = Page;
