import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class ElementsPage  extends BasePage {
    readonly page:Page;
    readonly buttonsSubCategory: Locator;

    constructor(page:Page) {
        super(page)
        this.page = page;
        this.buttonsSubCategory = this.page.locator('#item-4', {has: page.getByText('Buttons')});

    }

    async openButtonsSubCategory() :Promise<void> {
        await this.buttonsSubCategory.click();
    }

}