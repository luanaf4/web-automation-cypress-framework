module.exports = {
  reporter: 'junit',
  defaultCommandTimeout: 10000,
  projectId: "ihvsa2",
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },

  env: {
    baseUrl: 'https://ge.globo.com/motor/formula-1/',
    mobileViewportWidthBreakpoint: 414,
    mobile: 'iphone-xr',
    desktop: 'macbook-15'
  },
    experimentalWebKitSupport: true,
    video: true,

  // Configure the JUnit reporter
  junit: {
    reporterEnabled: true,
    mochaFile: 'cypress/reports/junit/test-results.xml',
    toConsole: true,
  },


  experimentalStudio: true,
  chromeWebSecurity: false,


  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,
    // reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    defaultBrowser: 'chrome'
  },
};