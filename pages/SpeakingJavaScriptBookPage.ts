import { Locator, Page } from "@playwright/test";

export class SpeakingJavaScriptBookStorePage {

    private page: Page
    readonly btnAddToYouCollection: Locator;

    constructor(page:Page) {
        this.page=page;
        this.btnAddToYouCollection = this.page.getByText('Add To Your Collection');
    }

    async addBookToCollection() :Promise<void> {
        await this.btnAddToYouCollection.click();
        this.page.on('dialog', dialog => dialog.accept());
    }

}