import { ClientFunction, Selector, t } from "testcafe";


export default class ExamplePage {

    examplePageBlerb: Selector = Selector('#exampleDatasets');

    constructor(){

    }

    async isOnPage(){
        await t 
        .expect(this.examplePageBlerb.exists).eql(true);
        const getLocation = ClientFunction(() => document.location.href);
        await t.expect(getLocation()).contains('/example');
    }
}