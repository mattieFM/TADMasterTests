import { Selector, t } from "testcafe";
import util from "../utils/util";


export default class ReuploadPage {
    descriptionBlerb: Selector = Selector('#tryoutBtn');

    constructor(){

    }

    async isOnPage(){
        await t.expect(this.descriptionBlerb.exists).eql(true);
    }
}