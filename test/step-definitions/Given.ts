import { Given} from "@wdio/cucumber-framework";
import SauceDemoHomePage from "../../src/pages/saucedemo.home.page"

Given(/^I am on the home page \"([^\"]*)\"$/, async(path:string) => {
    await SauceDemoHomePage.openUrl(path)
});