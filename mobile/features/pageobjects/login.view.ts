import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }
    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }

    public get btnLogin(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.Button[@content-desc="Login"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('login');
    }
}

export default new LoginPage();
