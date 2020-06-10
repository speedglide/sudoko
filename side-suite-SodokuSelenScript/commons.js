const utils = require("./utils.js");
const tests = {};
tests["Launch"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1366,
      height: 728
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.linkText(`New`)), configuration.timeout);
  await driver.findElement(By.linkText(`New`)).then(element => {
    return element.click();
  });
}
module.exports = tests;