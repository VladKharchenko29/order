const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://sponsor.financial",
    specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}",
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    screenshotOnRunFailure: true,
    video: false,
    videoCompression: 32,
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0
    },
    env: {
      main_page: '/',
      login: '/login',
      subscriptions: '/subscriptions',
      subscribers: '/subscribers',
      revenue: '/revenue',
      create_page: '/edit/about',
      creator_link: '/creator-public?pageURL=office_transformation',
      purchase_link: '/purchase?tierId=638c5ca780a566d16f1c964b',
      goal: '/edit/goal',
      profile_settings: 'profile-settings',
      profile: 'profile',
      tier_creation: '/edit/tier',
      search: '/search',
      creator_private: 'creator',
      creator_public: '/creator-public?pageURL=link',
      tier_list: '/edit/about/tiers',
      withdraw: '/edit/withdraw-method',
      post: '/post?id=63ca739a90c0205d6cbed01f',
      unsubscribe: '/cancel-subscription?tierId=63c9a88790c0205d6cbe95f0',
      crypto_disabled: '/purchase?tierId=63c9a89890c0205d6cbe95fe'
    }
  },
});
