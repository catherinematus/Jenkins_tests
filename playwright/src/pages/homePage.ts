import { BasePage } from './basePage';

import { Page } from '@playwright/test';
import { baseUrl } from '../support/constants';
import { NAVIGATION_ITEMS, NAVIGATION_ITEMS_FOR_USERS } from '../support/types';

export class HomePage extends BasePage {
    protected url: string;

    constructor(page: Page) {
        super(page);

        this.url = baseUrl;
    }

    public async visitPage() {
        await this.page.goto(this.url);
    }

    public getNavigationItemByInnerText(item: NAVIGATION_ITEMS) {
        return this.page.locator(
            `//span[@class="b-main-navigation__text"][text()="${item}"]`
        );
    }

    public async clickOnNavigationByInnerText(item: NAVIGATION_ITEMS) {
        await this.getNavigationItemByInnerText(item).click();
    }

    public getSearchInput() {
        return this.page.locator(
            '//form[@class="fast-search__form"]/input[@type="text"]'
        );
    }

    public getSearchInputAttribute(text: string) {
        return this.getSearchInput().getAttribute(text);
    }

    public getNavigationItemForUsersByInnerText(
        item: NAVIGATION_ITEMS_FOR_USERS
    ) {
        return this.page.locator(
            `//ul[@class="project-navigation__list project-navigation__list_secondary"]//*[text()="${item}"]`
        );
    }

    public async clickOnNavigationItemForCarsByInnerText(
        item: NAVIGATION_ITEMS_FOR_USERS
    ) {
        await this.getNavigationItemForUsersByInnerText(item).click();
    }

    public getLogoElement() {
        return this.page.locator('//div[@class="b-top-logo"]');
    }

    public async clickLogoElement() {
        await this.getLogoElement().click();
    }
}
