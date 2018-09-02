var loginCommands = {

  login: function() {
    return this.waitForElementVisible('body', 1000)
      .verify.visible('@userName')
      .verify.visible('@password')
      .verify.visible('@submit')
      .setValue('@userName', 'Enter Github user name')
      .setValue('@password', 'Enter Github password')
      .waitForElementVisible('body', 2000)

  }
};

module.exports = {
  commands: [loginCommands],
    url: function() {
      return 'https://github.com/login';
    },
  elements: {
    userName: {
      selector: '//input[@name=\'login\']',
      locateStrategy: 'xpath'
    },
    password: {
      selector: '//input[@name=\'password\']',
      locateStrategy: 'xpath'
    },
    submit: {
      selector: '//input[@name=\'commit\']',
      locateStrategy: 'xpath'
    }
  }
};