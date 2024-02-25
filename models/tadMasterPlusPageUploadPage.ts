import { Selector } from "testcafe";

/** A model for the input page IE: provide job info, the first step in tadmaster pipeline */
export class TadMasterPlusPageUploadPage {
    /** the title input for the job */
    titleInput: Selector = Selector("#id_title").sibling("div").child("input")
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
}