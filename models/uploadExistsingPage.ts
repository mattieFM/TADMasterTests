/** the upload_existing page IE; upload bed */

import { Selector, t } from "testcafe";
import util from "../utils/util";

export default class UploadExistingPage {
    bed1Title: Selector = Selector("input").withAttribute("name", "bed_title_1")
    bed2Title: Selector = Selector("input").withAttribute("name", "bed_title_2")

    bed1File: Selector = Selector("input").withAttribute("name", "bed_file_1")
    bed2File: Selector = Selector("input").withAttribute("name", "bed_file_2")

    submitBtn: Selector = Selector("button.btn.btn-success").withAttribute("type","submit")

    async isOnPage (){
        await t.expect(this.bed1File.exists).eql(true);
    }

    async fillOutForms(title1="autoTestFile1", title2="autoTestFile2", file1="./data/bedExample1.bed", file2="./data/bedExample2.bed") {
        await t
            .typeText(this.bed1Title, title1)
            .typeText(this.bed2Title, title2);
        await t
            .setFilesToUpload(this.bed1File, [file1])
            .click(this.bed1File)
        await t
            .setFilesToUpload(this.bed2File, [file2])
            .click(this.bed2File)
        await util.expectAndClick(this.submitBtn)
    }
}