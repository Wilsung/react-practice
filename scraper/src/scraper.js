import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto("https://company-careers-page.com");

const jobs = await page.locator("h2").allTextContents();

console.log(jobs);

await browser.close();
