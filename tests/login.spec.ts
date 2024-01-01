import { test, expect } from '@playwright/test';
import BasePage from "../pages/basePage";
import BookStorePage from '../pages/BookStore';
import { baseURL } from '../test-data/basePage';
import { loginURL } from '../test-data/login';
import LoginPage from '../pages/LoginPage';

test.describe(async () => {

    test('login', async ({ page }) => {
        const userName = process.env.USERNAME;
        const password = process.env.PASSWORD;
        const basePage = new BasePage(page);
        const bookStore = new BookStorePage(page);
        const loginPage = new LoginPage(page);
        await page.goto(baseURL);
        await basePage.openBookStoreCategory();
        await bookStore.openLoginPage(); 
        expect(page).toHaveURL(loginURL);
        await loginPage.enterUserName(userName);
        await loginPage.enterPassword(password);
        await loginPage.clickOnBtnLogin();
    }); 
})