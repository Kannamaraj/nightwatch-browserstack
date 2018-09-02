module.exports = {
  'Google\'s Search Functionality' : function (browser) {
    browser
      .url('https://www.browserstack.com/ncr')
      .waitForElementVisible('body', 6000)
      .end();
  }
};
