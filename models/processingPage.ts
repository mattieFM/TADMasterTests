import { Selector, t } from "testcafe";
import util from "../utils/util";

export default class ProcessingPage {
    viewQueueBtn: Selector = Selector("#viewQueueBtn")

    async isOnPage(){
        await t.expect(this.viewQueueBtn.exists).eql(true)
    }

    async navigateToQueue(){
        await util.expectAndClick(this.viewQueueBtn);
    }
}