process.on("unhandledRejection", (reason, promise) => {
  console.error("unhandledRejection", reason);
});

let Page = require("../lib/home_page");
let page;

describe("Library app scenarios", function() {
  // Увеличиваем таймаут для интеграционных тестов
  this.timeout(50000);

  beforeEach(async function() {
    page = new Page();
    await page.init();
    await page.visit("http://library-app.firebaseapp.com");
  });

  afterEach(async function() {
    await page.quit();
  });

  it("Typing a valid email changes button opacity to 1", async function() {
    let result = await page.requestBtn();
    console.log(result);
    // Проверка что кнонка имеет значеняие "1 "
    //assert.equal(btn, "1");
  });

  // it("Typing a valid email enables request button", function() {
  //   page.requestBtn();
  // });

  // it("Clicking Request invitation triggers a confirmation alert", function() {
  //   page.alertSuccess();
  // });
});

// let webdriver = require("selenium-webdriver");
// let { By, until } = require("selenium-webdriver");
// let driver = new webdriver.Builder().forBrowser("chrome").build();
// driver.get("https://dev.users.shadowbox.solutions/auth/login");
// driver.findElement(By.css("#loginform-username")).sendKeys("qwerq");
