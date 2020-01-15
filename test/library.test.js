let webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
let driver;

describe("library app scenarios", function() {
  beforeEach(function() {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    driver.get("http://library-app.firebaseapp.com");
  });

  afterEach(function() {
    driver.quit();
  });

  it("Changes Button opacity upon email being filled out", function() {});
  it("Submitting email shows an alert", function() {});
  it("Shows a navbar", function() {
    driver
      .findElement(By.css("nav"))
      .getText()
      .then(function(txt) {
        console.log(txt);
      });
  });
});

{
  /*
let driver = new webdriver.Builder().forBrowser("chrome").build();
driver.get("http://library-app.firebaseapp.com");

//driver.manage().timeouts().implicitlyWait(5000); не работает

let submitBtn = driver.findElement(By.css(".btn-lg"));

driver.findElement(By.css("input")).sendKeys("user@mail.loc");

driver.wait(function() {
  return submitBtn.getCssValue("opacity").then(function(result) {
    return result == 1;
  });
}, 15000);

driver.findElement(By.css(".btn-lg")).click();

driver
  .wait(until.elementLocated(By.css(".alert-success")), 20000)
  .getText()
  .then(function(txt) {
    console.log(`Alert success text is: ${txt}`);
  });

driver.findElement(By.css("#ember14"));
driver
  .findElement(By.xpath('//*[@id="ember3"]/div/div/div/div[2]/button'))
  .getText()
  .then(function(txt) {
    console.log(`The text of the button is:  ${txt}`);
  });

driver.findElements(By.css("#main-navbar")).then(function(elements) {
  elements.map(function(element) {
    element.getText().then(function(txt) {
      console.log(`The text of the navbar element is: ${txt}`);
    });
  });
}); 

*/
}
