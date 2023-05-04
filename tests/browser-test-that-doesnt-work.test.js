const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

//check you can add something to the pop
test('Check if we can add 2 elements to the list', async () => {
	let button = await driver.findElement(By.id('push'));
	await button.click();
	
	alert = await driver.switchTo().alert();
	await alert.sendKeys("Metallica");
    await alert.accept();

	//click button again and add ACDC
	await button.click();

	alert = await driver.switchTo().alert();
	await alert.sendKeys("ACDC");
    await alert.accept();

	let stack = await driver.findElement(By.id('bottom_of_stack')).getText(); //oh no another problem
	expect(stack).toEqual("ACDC");
});

test("Check if we can delete something from the list", async () => {
	let deleteButton = await driver.findElement(By.id('pop'));
	await deleteButton.click();
	await alert.accept();

	let topOfStackButton = await driver.findElement(By.id('peek'));
	//await topOfStackButton.click(); //oh no we dont click the top and so it doesnt refresh

	let stack = await driver.findElement(By.id('top_of_stack')).getText(); 
	expect(stack).toEqual("Metallica");
});