import { test, expect, Locator } from '@playwright/test';

test.describe(async () => {
    test('Check category', async ({ page }) => {
        await page.goto('/');
        const categoriesName:string[] =['Elements', 'Forms','Alerts, Frame & Windows','Widgets', 'Interactions','Book Store Application']
        const categoriesNameActual:string[] = [];
        const categoryCount: number = await page.locator('.card.mt-4.top-card').count();
        for (  let i = 0; i < categoryCount; i++) {
            let textCategory:string = await page.locator('.card.mt-4.top-card').nth(i).innerText();
            categoriesNameActual.push(textCategory);
        }
        expect(categoriesNameActual).toEqual(categoriesName)
    });
    test('Open Elements', async ({ page }) => {
        await page.goto('/');
        const elementsCategory: Locator = page.getByText('Elements');
        await elementsCategory.click();
        const buttonsCategory: Locator = page.getByText('Buttons');
        await buttonsCategory.click();
        expect(page).toHaveURL('/buttons');
        const clickMessage:Locator = page.getByText('You have done a dynamic click');
        const rightClickMessage:Locator = page.getByText('You have done a right click');
        const doubleClickMessage:Locator = page.getByText('You have done a double click');
        const btnClick: Locator = page.getByText('Click Me', {exact: true});
        const btnDoubleClick: Locator = page.getByText('Double Click Me');
        const btnRightClick: Locator = page.getByText('Right Click Me');
        await btnDoubleClick.dblclick();
        await expect(doubleClickMessage).toBeVisible();
        await btnRightClick.click({button:'right'});
        await expect(rightClickMessage).toBeVisible();
        await btnClick.click();
        await expect(clickMessage).toBeVisible();
    });
})
