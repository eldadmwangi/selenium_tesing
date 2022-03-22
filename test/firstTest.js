const { Builder, By, Key } = require("selenium-webdriver");
//assert for nodejs
const assert = require("assert");
//asserting with chai
var should = require("chai").should();

//using mocha//

// define a describe block
describe("adding a todo test", () => {
  //define a test here
  it("should succefully addd a todo", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    // then naviagate to the browser
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("learn selenium", Key.RETURN);

    //assert using node
    //get the text value of the last value in the list using findElement(By.xpath("//li[last()]")).getText
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });

    //assert using chai
    //sating that todoTet is equal to learn selenium
    todoText.should.equal("learn selenium");

    //close the browser
    await driver.quit();
  });
});

//  first we launch the browser

//assertion using node
// assert.strictEqual(todoText, "learn selenium");
