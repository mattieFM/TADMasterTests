/** this file has tests to ensure all navigation between pages works properly */

import ConfigurationManager from "../Config/config";
import { HomePage } from "../models/homePage";
import Navbar from "../models/navbar";
import ExamplePage from "../models/examplePage";
import { ClientFunction } from "testcafe";
import { TadMasterPlusPageUploadPage } from "../models/tadMasterPlusPageUploadPage";

const homePage = new HomePage();
const navBar = new Navbar();
const examplePage = new ExamplePage();
const tadPlusUploadPage = new TadMasterPlusPageUploadPage();

fixture(`Home page navigation tests`).beforeEach(
    async ()=>{
        await navBar.acceptCookiesIfPossible();
    }
)

// Tests
test('Home Page Loads', async t => {
    await homePage.isOnPage();
});

test('Can navigate to tadmaster input page', async t => {
    await homePage.navigateToTadMasterInputPage();
});

test('Can navigate to tadmaster github page', async t => {
    await navBar.navigateTogithubPagePage();
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('github.com');
});

test('Can navigate to tadmaster help page', async t => {
    await navBar.navigateToHelpPage();
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('github.com');
});

test('Can navigate to tadmaster example page', async t => {
    await navBar.navigateToExamplePage();
    await t 
        .expect(examplePage.examplePageBlerb.exists).eql(true);
        const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/example');
});

test('Can navigate to tadmasterPlus input page', async t => {
    await homePage.navigateToTadMasterPlusInputPage();
});

test('Can navigate to reupload  page', async t => {
    await homePage.navigateToReuploadPage();
});

test('Can navigate back from tadmaster page to home', async t => {
    await homePage.navigateToTadMasterInputPage();
    await navBar.navigateToHomePage();
});

test('Can navigate back from tadmasterplus page to home', async t => {
    await homePage.navigateToTadMasterPlusInputPage();
    await navBar.navigateToHomePage();
});

test('Can navigate back from reupload page to home', async t => {
    await homePage.navigateToReuploadPage();
    await navBar.navigateToHomePage();
});
