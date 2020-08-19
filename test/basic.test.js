require('geckodriver');
const { describe, it, after, before, beforeEach } = require('mocha');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  Capabilities = webdriver.Capabilities;
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
const firefox = require('selenium-webdriver/firefox');

//URL
const myURL = 'http://localhost:8080/';

// Do nothing for unhandled rejection
process.on('unhandledRejection', () => { });


describe('Fetch UI Tests', function() {
    let driver;

    before(() => {
        driver = new webdriver.Builder()
            .withCapabilities(caps)
            .forBrowser('firefox')
            .build();
    });
    beforeEach(() => {
        driver.get(myURL);
    })

    after(() => {
        driver.close();
    });

    it('Add an order to the cart', async() => {
        
        await driver.manage().window().maximize();

        // Go to restaurant page
        await driver.findElement(By.className('restaurant-label')).click();
        // Click second order button
        await driver.findElement(By.className('order-button')).click();
        // Go to cart page
        await driver.findElement(By.id('cart-link')).click();
        
        // Check it's there
        let cart = await driver.findElements(By.className('cart-item'));
        return expect(cart.length).equals(2);
    });

    it('Delete an order from admin', async() => {

        // Place an order in cart
        await driver.findElement(By.className('restaurant-label')).click();
        await driver.findElement(By.className('order-button')).click();
        await driver.findElement(By.id('cart-link')).click();
        await driver.findElement(By.id('checkout-button')).click();
        // Go to admin
        await driver.findElement(By.id('admin-link')).click();
        // Click delete
        await driver.findElement(By.className('fa-trash')).click();
        // Check number of elements
        let order = await driver.findElements(By.className('a-order'));
        return expect(order.length).equals(3);
    })  
});