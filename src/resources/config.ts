class TestData {
  makeid(length: any) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  url() {
    const url = "https://shopa.polymer-project.org/";
    return url;
  }

  email() {
    const email = this.makeid(8) + "@wdio.com";
    return email;
  }

  phone() {
    const randomNumber = Math.floor(Math.random() * 99999999999) + 11111111111;
    const phone = randomNumber;
    return phone;
  }

  address() {
    const address = this.makeid(8);
    return address;
  }

  ccardName() {
    const name = this.makeid(8);
    return name;
  }

  ccardNum() {
    const randomNumber =
      Math.floor(Math.random() * 4444444444444444) + 5555555555555555;
    const ccNum = randomNumber;
    return ccNum;
  }
}

export default new TestData();
