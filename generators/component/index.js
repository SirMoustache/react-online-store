/**
 * Utils
 */
const componentExists = require('../componentExists');

/**
 * Components Types
 */
const FUNCTIONAL_COMPONENT = 'Functional Component';

module.exports = {
  description: 'Add View Component',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'Select the type of component',
      default: FUNCTIONAL_COMPONENT,
      choices: () => [FUNCTIONAL_COMPONENT],
    },
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called?',
      default: 'NewComponent',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
  ],

  actions: data => {
    const indexTemplate = './component/index.js.hbs';
    const testTemplate = './component/test.js.hbs';
    const messageTemplate = './component/messages.js.hbs';
    let componentTemplate;

    switch (data.componentType) {
      case FUNCTIONAL_COMPONENT: {
        componentTemplate = './component/functional.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/functional.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path:
          '../components/{{properCase componentName}}/{{properCase componentName}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../components/{{properCase componentName}}/__tests__/{{properCase componentName}}.test.js',
        templateFile: testTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../components/{{properCase componentName}}/index.js',
        templateFile: indexTemplate,
        abortOnFail: true,
      },
    ];

    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../components/{{properCase componentName}}/messages.js',
        templateFile: messageTemplate,
        abortOnFail: true,
      });
    }

    return actions;
  },
};
