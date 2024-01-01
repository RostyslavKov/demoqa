import { Locator, Page } from "@playwright/test";

export default class BasePage {
    readonly page:Page;
    readonly elementsCategory: Locator;
    readonly categoriesName: Locator;
    readonly bookStore: Locator;

    constructor(page:Page) {
        this.page = page;
        this.elementsCategory = this.page.locator('.card.mt-4.top-card', {has: page.getByText('Elements')});
        this.bookStore = this.page.locator('.card.mt-4.top-card', {has: page.getByText('Book Store Application')});
        this.categoriesName  = this.page.locator('.card.mt-4.top-card');
    }

    async openElementsCategory() :Promise<void> {
        await this.elementsCategory.click();
    }

    async openBookStoreCategory() :Promise<void> {
        await this.bookStore.click();
    }

    async getAllCategories() :Promise<string[]> {
        const categoriesActualNames:string[] = [];
        for(const iterator of await this.categoriesName.all()){
            categoriesActualNames.push(await iterator.innerText())
        }
        return categoriesActualNames;
    }
}
