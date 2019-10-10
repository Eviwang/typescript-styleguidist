const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'React Style Guide Example',
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'http://example.com/',
    // Text to show on the ribbon (optional)
    text: 'Fork me on GitHub'
  },
  pagePerSection: true,
  usageMode: 'expand',
  exampleMode: 'expand',
  //   components: function() {
  //     return glob.sync(path.resolve(__dirname, './src/components/*.tsx'));
  //   },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  sections: [
    {
      name: 'Get Started',
      content: './readme.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Form',
          components: () => [
            path.resolve(__dirname, './src/components/', 'button.tsx')
          ]
        }
      ]
    }
  ]
};
