const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    chromeWebSecurity: false,
   "watchForFileChanges" : false

  },
});
