import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//*[@resource-id="android:id/message"]');
    }
}

export default new SecurePage();
