import { Locator, Page } from "@playwright/test";

export class BookStorePage {

    private page: Page
    readonly book: Locator;

    constructor(page:Page) {
        this.page=page;
        this.book = this.page.locator('[id="see-book-Speaking JavaScript"]');
    }

}