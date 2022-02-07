import TestBase from "../utils/testbase";

class SauceDemoHomePage extends TestBase {
  // ------------- Page Elements -------------
  private get username() {
    return $("#user-name");
  }
  private get password() {
    return $("#password");
  }
  private get loginButton() {
    return $("#login-button");
  }
  private get headerTitle() {
    return $(".title");
  }

  // ------------- Page Methods -------------
  async openUrl(path: string) {
    this.open(path);
  }

  async enterUsername(username: string) {
    await this.setText(this.username, username);
  }

  async enterPassword(password: string) {
    await this.setText(this.password, password);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async verifyPageHeader(title: string) {
    await this.verifyElementIsDisplayed(this.headerTitle);
  }
}
export default new SauceDemoHomePage();
