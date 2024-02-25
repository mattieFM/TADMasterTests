import { Selector, t } from "testcafe";
import util from "../utils/util";

export default class Navbar {
    examplePageBtn : Selector = Selector('a#exampleBtn').child("img");

    helpPageBtn : Selector = Selector('a#helpBtn').child("img");

    githubPageBtn : Selector = Selector('a#githubBtn').child("img");

    acceptCookiesBtn: Selector = Selector('#cookiesPrompt').sibling("button");

    tadMasterLogo: Selector = Selector("#topLogo").child("img");

    constructor(){

    }


    /**
     * @description test and navigate to example page
     */
    async navigateToExamplePage(){
        await util.expectAndClick(this.examplePageBtn);
    }

    /**
     * @description test and navigate to help page
     */
    async navigateToHelpPage(){
        await util.expectAndClick(this.helpPageBtn);
    }

    /**
     * @description test and navigate to github page
     */
    async navigateTogithubPagePage(){
        await util.expectAndClick(this.githubPageBtn);
    }

    /**
     * @description test and navigate to home page
     */
    async navigateToHomePage(){
        await util.expectAndClick(this.tadMasterLogo);
    }

    /** @description click the cookies accept btn if it exists */
    async acceptCookiesIfPossible(){
        if(this.acceptCookiesBtn.exists){
            await t.click(this.acceptCookiesBtn);
        }
    }

}