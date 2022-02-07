export default class TestBase {
  /**
   * @path {String} provide url path when calling the function
   */
  open(path: string) {
    return browser.url(path);
  }

  /**
   * @element {Element} provide element when calling the function
   */
  click = async (element: Promise<any>) => {
    this.verifyElementIsDisplayed(element);
    await (await element).click();
  };

  /**
   * @element {Element} provide element when calling the function
   * @text {String} provide text value when calling the function
   */
  selectDropdown = async (element: Promise<any>, text: any) => {
    await (await element).selectByAttribute("value", text);
  };

  /**
   * @element {Element} provide element when calling the function
   * @text {String} provide text value when calling the function
   */
  setText = async (element: Promise<any>, text: any) => {
    this.verifyElementIsDisplayed(element);
    await (await element).setValue(text);
  };

  /**
   * @element {Element} provide element when calling the function
   * @expected {String} provide expected value when calling the function
   */
  assertText = async (element: Promise<any>, expected: any) => {
    const elem = await (await element).getText();
    const actualText = elem.valueOf();
    expect(expected).toEqual(actualText);
  };

  /**
   * @element {Element} provide element when calling the function
   */
  verifyElementIsDisplayed = async (element: Promise<any>) => {
    try {
      (await element).waitForDisplayed({
        timeout: 3000,
        timeoutMsg: "This " + element + " Element is not found.",
      });
    } catch (error) {
      console.error();
    }
  };

  verifyElementIsClickable = async (element: Promise<any>) => {
    try {
      (await element).isClickable();
    } catch (error) {
      console.error();
    }
  };
}
