import { Locator, Page, expect } from "@playwright/test";
import BasePage from "./basePage";

export default class ButtonsPage extends BasePage {
    readonly page:Page;
    readonly btnClick: Locator;
    readonly btnDoubleClick: Locator;
    readonly btnRightClick: Locator;
    readonly clickMessage: Locator;
    readonly rightClickMessage: Locator;
    readonly doubleClickMessage: Locator;

    constructor(page:Page) {
        super(page)
        this.page = page;
        this.btnClick = this.page.getByText('Click Me', {exact: true});
        this.btnDoubleClick = this.page.getByText('Double Click Me');
        this.btnRightClick = this.page.getByText('Right Click Me');
        this.clickMessage = this.page.getByText('You have done a dynamic click');
        this.rightClickMessage = this.page.getByText('You have done a right click');
        this.doubleClickMessage = this.page.getByText('You have done a double click');

    }

    async clickOnBtnClick() :Promise<void> {
        await this.btnClick.click();
    }
    async clickOnBtnDoubleClick() :Promise<void> {
        await this.btnDoubleClick.dblclick();
    }
    async clickOnBtnRightClick() :Promise<void> {
        await this.btnRightClick.click({button:'right'});
    }
    async checkDoubleClickMessageIsVisible() :Promise<void> {
        await expect(this.doubleClickMessage).toBeVisible();
    }
    async checkRightClickMessageIsVisible() :Promise<void> {
        await expect(this.rightClickMessage).toBeVisible();
    }
    async checkClickMessageIsVisible() :Promise<void> {
        await expect(this.clickMessage).toBeVisible();
    }

}