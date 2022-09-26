import { Page } from '@playwright/test';
import { PAGES } from '../support/types';

import { CatalogPage } from './catalogPage';
import { HomePage } from './homePage';
import { PhonesPage } from './phonesPage';

export class PageFactory {
    constructor() {}

    static getPage(page: Page, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page);
            case PAGES.CATALOG:
                return new CatalogPage(page);
            case PAGES.PHONES:
                return new PhonesPage(page);
            default:
                return new HomePage(page);
        }
    }
}
