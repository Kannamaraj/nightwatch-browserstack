module.exports = {
  'Github login Functionality' : function (browser) {

//create an object for login
var login = browser.page.login();
//execute the login method from //tests/pages/login.js file
login.navigate().login();

//You can continue with your tests below:
// Also, you can use similar Page objects to increase reusability
    browser
    .pause(3000)
      .end();
  }
};
