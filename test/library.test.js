// process.on("unhandledRejection", (reason, promise) => {
//   console.error("unhandledRejection", reason);
// });

let Page = require("../lib/home_page");
let page;

describe("Library app scenarios", function() {
  // Увеличиваем таймаут для UI тестов
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
  });

  it("Typing a valid email enables request button", async function() {
    let result = await page.requestBtn();
  });

  it("Clicking Request invitation triggers a confirmation alert", async function() {
    let result = await page.alertSuccess();
  });
});
