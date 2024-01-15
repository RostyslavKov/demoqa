import { test } from "@playwright/test";

test.describe(async () => {

    test('Abort request', async ({ page }) => {
        await page.route('/BookStore/v1/Books', route => route.abort());
        await page.goto('/books');
    });

    test('MockingResponse', async ({ page }) => {
        await page.route('/BookStore/v1/Books', route => ({
            route.fulfill({////
                ...
                ...
                body: JSON////////
            })
            
        }))
        
        await page.goto('/books');

    });

    test('Api request', async ({ page, userApiRequest }) => {
       
        await page.goto('/books');
        const response = await userApiRequest.fetch('/BookStore/v1/Books');
        const body = await response.json; 
        console.log(response.body())
        expect.soft( await response.status()).toBe(200);


    });
});



