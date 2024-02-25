import { Selector, t } from "testcafe";
import util from "../utils/util";
import { ProvideJobInformationPage } from "../models/provideJobInfoPage";
import { TadMasterPlusPageUploadPage } from "../models/tadMasterPlusPageUploadPage";
import ReuploadPage from "./reuploadPage";

const tadPlusUploadPage = new TadMasterPlusPageUploadPage();
const reuploadPage = new ReuploadPage();
const provideJobInformationPage = new ProvideJobInformationPage();

export class HomePage {
    titleBlerb: Selector = Selector('h2.mb-5.header_text')
    /**The button on the home page to enter the tadMaster pipeline */
    tadMasterBtn: Selector = Selector('a#TadInput')
    /**The button on the home page to enter the tadMasterPlus pipeline */
    tadMasterPlusBtn: Selector = Selector('a#tadMasterPlusBtn')
    /**The button on the home page to enter the reupload pipeline */
    reuploadBtn: Selector = Selector('a#reuploadBtn')
    /**The button on the home page to enter the example page */
    exampleBtn: Selector = Selector('a#exampleBtn')
    /**The button on the home page to enter the github page */
    githubBtn: Selector = Selector('a#githubLogo')
    /**The button on the home page to enter the help page */
    helpBtn: Selector = Selector('a#helpBtn')

    constructor(){

    }

    async navigateToTadMasterInputPage(){
        await t
        //navigate to input page
        .expect(this.tadMasterBtn.exists).eql(true)
        .click(this.tadMasterBtn)
        .expect(provideJobInformationPage.chromozoneInput.exists).eql(true)
    }

    async navigateToTadMasterPlusInputPage (){
        await util.expectAndClick(this.tadMasterPlusBtn)
        //navigate to input page for tad master plus
        await t
        .expect(tadPlusUploadPage.chromozoneInput.exists).eql(true)
    }

    async navigateToReuploadPage (){
        //navigate to reupload page
        await util.expectAndClick(this.reuploadBtn)
        await reuploadPage.isOnPage();
    }

    async isOnPage (){
        await t.expect(this.titleBlerb.exists).eql(true); 
    }

}