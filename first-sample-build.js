const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://nabeelareiqat1:nUTEPEWcz5sYazSa38zJ@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("http://www.google.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER); // this submits on desktop browsers
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
  } catch (e) {
    await inputField.submit(); // this helps in mobile browsers
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  await driver.quit();
}
const capabilities1 = {
  'browser': 'chrome',
  'browser_version': '89.0',
  'os': 'Windows',
  'os_version': '10',
  'build': 'BStack-[NodeJS] Sample Build',
  'name': 'Parallel test 1'
}
const capabilities2 = {
	'browser': 'firefox',
  'browser_version': '86.0',
  'os': 'Windows',
  'os_version': '10',
  'build': 'BStack-[NodeJS] Sample Build',
  'name': 'Parallel test 2'
}
const capabilities3 = {
	'browser': 'edge',
  'browser_version': '89.0',
  'os': 'Windows',
  'os_version': '10',
  'build': 'BStack-[NodeJS] Sample Build',
  'name': 'Parallel test 3'
}
runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);
    