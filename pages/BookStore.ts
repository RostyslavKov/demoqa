import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class BookStorePage  extends BasePage {
    readonly page:Page;
    readonly btnLogin: Locator;

    constructor(page:Page) {
        super(page)
        this.page = page;
        this.btnLogin = this.page.locator('#item-0', {has: page.getByText('Login')});
    }

    async openLoginPage() :Promise<void> {
        await this.btnLogin.click();
    }

}