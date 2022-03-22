const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();
// const { Driver } = require("selenium-webdriver/chrome");

//lambda test capabilities
const ltcapabilities = require("../capabilities");

//describe block//

describe("add second Todo", () => {
  var driver;
  //username//
  const USERNAME = "eldadmwangi";

  //key//
  const KEY = "6vYEmXrgv81bp6lEx8FfBVsm4EGxLXAiXtmApGCivyaOhyyn5U";
  console.log(`${USERNAME} ${KEY}`);

  //host url //
  // const GRID_HOST = "hub.lambdatest.com/";

  const gridUrl =
    "https://" + USERNAME + ":" + KEY + "@hub.lambdatest.com/wd/hub";

  //app url//
  const todoEndPoint = "https://lambdatest.github.io/sample-todo-app/";

  beforeEach(() => {
    // ltcapabilities.capabilities.name = this.currentTest.title;
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltcapabilities.capabilities)
      .build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should add second todo", async () => {
    // let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(todoEndPoint);

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("learn selenium", Key.RETURN);

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });
    todoText.should.equal("learn selenium");
    // await driver.quit();
  });

  it("should add second todo", async () => {
    // let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(todoEndPoint);

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("learn javascript", Key.RETURN);

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });
    todoText.should.equal("learn javascript");
    // await driver.quit();
  });
});
