import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BasePage {
    constructor(protected readonly page: Page) {}

    public getPageTitle() {
        return this.page.title();
    }

    public async quitBrowser() {
        await this.page.close();
    }

    public async waitForTitleIs(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    public async waitForUrlIs(text: string) {
        await expect(this.page).toHaveURL(text);
    }
}
