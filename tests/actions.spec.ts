import { test, expect, Locator } from '@playwright/test';
import BasePage from '../pages/basePage';
import ElementsPage from '../pages/ElementsPage';
import ButtonsPage from '../pages/ButtonsPage';
import { buttonsURL } from '../test-data/buttons';
import { categoriesName } from '../test-data/basePage';

test.describe(async () => {

    test('Buttons page', async ({ page }) => {
        const basePage = new BasePage(page);
        const elementsPage = new ElementsPage(page);
        const buttonsPage = new ButtonsPage(page);
        await page.goto('/');
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
        const basePage = new BasePage(page);
        await page.goto('/');
        const actualNames = await basePage.getAllCategories();
        expect(actualNames).toEqual(categoriesName);
    }); 
})
