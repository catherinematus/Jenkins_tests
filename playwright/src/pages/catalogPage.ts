import { HomePage } from './homePage';
import { Page } from '@playwright/test';
import { baseCatalogUrl } from '../support/constants';

export class CatalogPage extends HomePage {
    protected url: string;
    constructor(page: Page) {
        super(page);

        this.url = baseCatalogUrl;
    }

    public getSideNavigationItemByInnerText(text: string) {
        return this.page.locator(
            `//ul[@class="catalog-navigation-classifier "]//*span[contains(text(), "${text}")]`
        );
    }

    public async clickSideNavigationItemByInnerText(text: string) {
        await this.getSideNavigationItemByInnerText(text).click();
    }
}
