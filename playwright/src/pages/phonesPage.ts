import { Page } from '@playwright/test';
import { baseCatalogUrl } from '../support/constants';
import { CatalogPage } from './catalogPage';

export class PhonesPage extends CatalogPage {
    protected url: string;
    constructor(page: Page) {
        super(page);

        this.url = `${baseCatalogUrl}/mobile`;
    }

    public getPageNameElement() {
        return this.page.locator(`schema-header__title js-schema-header_title`);
    }
}
