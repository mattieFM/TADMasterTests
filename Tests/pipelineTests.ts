/** this file has tests to ensure the main pipelines work properly */

import ConfigurationManager from "../Config/config";
import { HomePage } from "../models/homePage";
import { ProvideJobInformationPage } from "../models/provideJobInfoPage";
import Navbar from "../models/navbar";
import ExamplePage from "../models/examplePage";
import UploadExistingPage from "../models/uploadExistsingPage";
import ProcessingPage from "../models/processingPage"
import VisualizePage from "../models/visualizePage";;
import QueuePage from "../models/queuePage";

const navBar = new Navbar();
const homePage = new HomePage();
const provideJobInformationPage = new ProvideJobInformationPage();
const uploadExistsingPage = new UploadExistingPage();
const processingPage = new ProcessingPage();
const queuePage = new QueuePage();
const visualizePage = new VisualizePage();

fixture(`pipeline tests`).beforeEach(
    async ()=>{
        await navBar.acceptCookiesIfPossible();
    }
)

// Tests
test('TADMaster PipeLine', async t => {
    //navigate to input Page
    await homePage.navigateToTadMasterInputPage();
    await provideJobInformationPage.filloutForms();
    await uploadExistsingPage.fillOutForms();
    await processingPage.isOnPage();
    await processingPage.navigateToQueue();
    await queuePage.isOnPage();
    //expect page to load within 5 min
    await visualizePage.isOnPage(300e3);
}).only;