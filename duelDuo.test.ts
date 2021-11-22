import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Check that clicking the Draw button displays the div with id = “choices”", async () => {
  const draw = await driver.findElement(By.id("draw"));
  const choices = await driver.findElement(By.id("choices"));
  await driver.executeScript("arguments[0].click();", draw);
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("Check that clicking an “Add to Duo” button displays the div with id = “player-id”", async () => {
  const playAgain = await driver.findElement(By.id("play-again"));
  const draw = await driver.findElement(By.id("draw"));
  await driver.executeScript("arguments[0].click();", playAgain);
  const displayed = await draw.isDisplayed();
  expect(displayed).toBe(true);
});
