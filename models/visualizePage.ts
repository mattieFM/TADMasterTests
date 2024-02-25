import { Selector, t } from "testcafe";
import util from "../utils/util";

export default class VisualizePage {
    mainDiv: Selector = Selector('div.django-plotly-dash.django-plotly-dash-div-direct.django-plotly-dash-app-tadvis_fast')
    mainIframe: Selector = Selector('iframe').nth(0);

    async isOnPage(timeout=30000){
        await t.expect(this.mainDiv.exists).ok('ok', {timeout:timeout})
    }

    /**
     * @description check if there are a decent few rect elements on the page to verify that there are some graphs displaying without having to check too hard
     * @param timeout 
     * @deprecated does not work well
     */
    async areSomeGraphsDisplaying(timeout=30000){
        await t.switchToIframe(this.mainIframe)
            .wait(timeout)
            .expect(await Selector('rect').count > 20).ok("ok", {timeout:timeout})
    }
}