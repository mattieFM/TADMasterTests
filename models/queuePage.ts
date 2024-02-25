import { Selector,t  } from "testcafe"


export default class QueuePage {
    displayBlerb : Selector = Selector('#displayText')

    async isOnPage(){
        await t.expect(this.displayBlerb.exists).eql(true);
    }
}