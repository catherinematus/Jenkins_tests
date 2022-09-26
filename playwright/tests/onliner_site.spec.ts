import { test, expect } from '@playwright/test';
import { CatalogPage } from '../src/pages/catalogPage';
import { HomePage } from '../src/pages/homePage';
import { PageFactory } from '../src/pages/pageFactory';
import {
    baseUrl,
    searchPlaceholderText,
    titleOfMainPage,
} from '../src/support/constants';
import {
    NAVIGATION_ITEMS,
    NAVIGATION_ITEMS_FOR_USERS,
    PAGES,
} from '../src/support/types';

let homePage: HomePage;
let catalogPage: CatalogPage;

test.describe('Onliner main page tests', async () => {
    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME);
        await homePage.visitPage();
    });

    test('Should display the title of main page correctly', async ({
        page,
    }) => {
        await expect(page).toHaveTitle(titleOfMainPage);
    });

    for (const item in NAVIGATION_ITEMS) {
        const buttonName =
            NAVIGATION_ITEMS[item as keyof typeof NAVIGATION_ITEMS];
        test(`Button ${buttonName} should have correct text`, async () => {
            const buttonElementInHeader =
                await homePage.getNavigationItemByInnerText(buttonName);
            expect(buttonElementInHeader).toHaveText(buttonName);
        });
    }

    for (const item in NAVIGATION_ITEMS_FOR_USERS) {
        const linkName =
            NAVIGATION_ITEMS_FOR_USERS[
                item as keyof typeof NAVIGATION_ITEMS_FOR_USERS
            ];
        test(`When User clicks link ${linkName}, correct page is displayed with the title of article ${linkName}`, async ({
            page,
        }) => {
            await homePage.clickOnNavigationItemForCarsByInnerText(linkName);
            await expect(
                page.locator(
                    '//h1[@class="schema-header__title js-schema-header_title"]'
                )
            ).toHaveText(linkName);
        });
    }

    test(`The main page contains search form with placeholder including text '${searchPlaceholderText}'`, async () => {
        const searchInputPlaceholderAttribute =
            await homePage.getSearchInputAttribute('placeholder');
        await expect(searchInputPlaceholderAttribute).toContain(
            searchPlaceholderText
        );
    });
});

test.describe('Onliner navigation clicks tests', async () => {
    test.beforeEach(async ({ page }) => {
        catalogPage = PageFactory.getPage(page, PAGES.CATALOG) as CatalogPage;
        await catalogPage.visitPage();
    });

    test('When User clicks on the logo of site, the main page is displayed', async ({
        page,
    }) => {
        await catalogPage.clickLogoElement();
        await expect(page).toHaveURL(baseUrl);
    });

    test(`When User clicks ${NAVIGATION_ITEMS.CATALOG}, the page is displayed with title including ${NAVIGATION_ITEMS.CATALOG}`, async ({
        page,
    }) => {
        const titleOfCatalogPage = await catalogPage.getPageTitle();
        await expect(titleOfCatalogPage).toContain(NAVIGATION_ITEMS.CATALOG);
    });
});
