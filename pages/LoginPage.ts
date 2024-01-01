import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    readonly page:Page;
    readonly txtUserName: Locator;
    readonly txtPassword : Locator;
    readonly btnLogin: Locator;

    constructor(page:Page) {
        super(page)
        this.page = page;
        this.txtUserName = this.page.locator('#userName');
        this.txtPassword = this.page.locator('#password');
        this.btnLogin = this.page.locator('#login');

    }


    async enterUserName(userName) :Promise<void> {
        await this.txtUserName.fill(userName);
    }
    async enterPassword(password) :Promise<void> {
        await this.txtPassword.fill(password);
    }
    async clickOnBtnLogin() :Promise<void> {
        await this.btnLogin.click();
    }
    
}