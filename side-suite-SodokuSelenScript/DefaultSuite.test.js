jest.setMock('selenium-webdriver', webdriver);
// This file was generated using Selenium IDE
const tests = require("./commons.js");
global.Key = require('selenium-webdriver').Key;
global.URL = require('url').URL;
global.BASE_URL = configuration.baseUrl || 'http://127.0.0.1:3000';
let vars = {};
jest.setTimeout(300000);
describe("Default Suite", () => {
  it("Launch", async () => {
    await tests["Launch"](driver, vars);
    expect(true).toBeTruthy();
  });
});
beforeEach(() => {
  vars = {};
});
afterEach(async () => (cleanup()));