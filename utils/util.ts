import { Selector, t } from "testcafe";

export default abstract class util {
    /**
     * @description validate a selector exists and then click it
     * @param btn the selector
     */
    public static async expectAndClick(btn: Selector){
        await t
            .expect(btn.exists).eql(true)
            .click(btn);

    }
}