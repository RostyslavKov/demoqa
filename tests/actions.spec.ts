import { test, expect } from '@playwright/test';
import BasePage from '../pages/basePage';
import ElementsPage from '../pages/ElementsPage';
import ButtonsPage from '../pages/ButtonsPage';
import { buttonsURL } from '../test-data/buttons';
import { baseURL, categoriesName } from '../test-data/basePage';
import { beforeEach } from 'node:test';

test.describe(async () => {

    let basePage: BasePage;
    let elementsPage: ElementsPage;
    let buttonsPage: ButtonsPage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        elementsPage = new ElementsPage(page);
        buttonsPage = new ButtonsPage(page);
        await page.goto(baseURL);
    });

    test('Buttons page', async ({ page }) => {

        await basePage.openElementsCategory(); 
        await elementsPage.openButtonsSubCategory();
        expect(page).toHaveURL(buttonsURL);
        await buttonsPage.clickOnBtnDoubleClick();
        await buttonsPage.checkDoubleClickMessageIsVisible();
        await buttonsPage.clickOnBtnRightClick();
        await buttonsPage.checkRightClickMessageIsVisible();
        await buttonsPage.clickOnBtnClick();
        await buttonsPage.checkClickMessageIsVisible();
    });

    test('Check all categories', async ({ page }) => {

        await page.goto(baseURL);
        const actualNames = await basePage.getAllCategories();
        expect(actualNames).toEqual(categoriesName);
    }); 
})
