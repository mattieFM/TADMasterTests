import { Selector, t } from "testcafe";
import util from "../utils/util";

/** A model for the input page IE: provide job info, the first step in tadmaster pipeline */
export class ProvideJobInformationPage {
    /** the title input for the job */
    titleInput: Selector = Selector("input").withAttribute("name", "title")
    /** the desc input for the job */
    descriptionInput: Selector = Selector("input").withAttribute("name", "description")
    /** the chromozone input for the job */
    chromozoneInput: Selector = Selector("input").withAttribute("name", "chromosome")
    /** the email input for the job */
    emailInput: Selector = Selector("input").withAttribute("name", "email")
    /** the resolution input for the job */
    resolutionInput: Selector = Selector("input").withAttribute("name", "resolution")

    /** the submit/next button for the page */

    submitBtn: Selector = Selector("button#submitBtn");

    constructor(){

    }

    async isOnPage(){
        await t.expect(this.titleInput.exists).eql(true);

    }

    async filloutForms(title="AutomatedTitle", desc="automatedDesc", chr="21", res="500"){
        await this.isOnPage();
        await t
            .typeText(this.titleInput, title)
            .typeText(this.descriptionInput, desc)
            .typeText(this.chromozoneInput, chr)
            .typeText(this.resolutionInput, res);
        await util.expectAndClick(this.submitBtn);

    }
}