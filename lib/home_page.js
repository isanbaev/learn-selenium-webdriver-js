let Page = require("./base_page");

Page.prototype.requestBtn = async function() {
  await this.write("input", "user@fakemail.com");
  const foundElem = await this.find(".btn-lg");
  return {
    opacity: await foundElem.getCssValue("opacity"), 
    state: await foundElem.isEnabled()
  };
};

Page.prototype.clickSubmit = async function() {
  const foundElem = await this.find(".btn-lg");
  return foundElem.click();
};

Page.prototype.alertSuccess = async function() {
  await this.requestBtn();
  await this.clickSubmit();
  const foundElem = await this.find(".alert-success");
  return foundElem.getText();
};

module.exports = Page;
