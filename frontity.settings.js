const settings = {
  name: "wc-sevilla-2019",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "mowomo-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://mowomoevents.com/yomequedoencasa/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
