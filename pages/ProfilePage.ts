import { Locator, Page } from "@playwright/test";
import { bookName } from "../test-data/bookStore";

export class ProfilePage {

    private page: Page
    readonly btnGoToBookStore: Locator;
    readonly txtBookname: Locator;

    constructor(page:Page) {
        this.page=page;
        this.btnGoToBookStore = this.page.locator('[id="gotoStore"]');
        this.txtBookname = this.page.getByText(bookName)
    }

    async findbook() :Promise<void> {
        await this.txtBookname.isEnabled()
    }

}