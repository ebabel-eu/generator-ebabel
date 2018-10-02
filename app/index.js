'use strict';

const Generator = require('yeoman-generator');

/**
 * `generator-ebabel`
 * Yeoman generator to scaffold an ebabel game development npm module.
 */
class GeneratorEbabel extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }

  start() {
    this.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'Game on! What is your Github username?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the game module (and repository) you will develop (i.e.: vicious-goblin):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your cool new game module?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'On which e-mail can game developers contact you in case they want to discuss your project?',
      },
      {
        type: 'input',
        name: 'author',
        message: 'By what name do you want to be known?',
      },
    ]).then((answers) => {
      const moduleName = answers.name.replace(/ /g, '').trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());

      // Create destination folder.
      this.destinationRoot(answers.name);

      this.fs.copyTpl(
        this.templatePath('CONTRIBUTING.md'),
        this.destinationPath('CONTRIBUTING.md'),
        {
          username: answers.username,
          name: answers.name,
        },
      );

      this.fs.copyTpl(
        this.templatePath('CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md'),
        {
          username: answers.username,
          name: answers.name,
          description: answers.description,
        },
      );

      this.fs.copyTpl(
        this.templatePath('CODE_OF_CONDUCT.md'),
        this.destinationPath('CODE_OF_CONDUCT.md'),
        {
          email: answers.email,
        },
      );

      this.fs.copyTpl(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore'),
      );

      this.fs.copyTpl(
        this.templatePath('.travis.yml'),
        this.destinationPath('.travis.yml'),
      );

      this.fs.copyTpl(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE'),
      );

      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath('index.js'),
        {
          moduleName,
          name: answers.name,
          description: answers.description,
        },
      );

      this.fs.copyTpl(
        this.templatePath('src/module.js'),
        this.destinationPath(`src/${answers.name}.js`),
        {
          moduleName,
          name: answers.name,
          description: answers.description,
        },
      );

      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          name: answers.name,
          description: answers.description,
          username: answers.username,
          author: answers.author,
          email: answers.email,
        },
      );

      this.fs.copyTpl(
        this.templatePath('PULL_REQUEST_TEMPLATE.md'),
        this.destinationPath('PULL_REQUEST_TEMPLATE.md'),
      );

      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          name: answers.name,
          description: answers.description,
          username: answers.username,
          moduleName,
        },
      );

      this.fs.copyTpl(
        this.templatePath('test/test.js'),
        this.destinationPath(`test/${answers.name}.test.js`),
        {
          moduleName,
          name: answers.name,
          description: answers.description,
        },
      );

      this.fs.copyTpl(
        this.templatePath('.eslintignore'),
        this.destinationPath('.eslintignore'),
      );

      this.fs.copyTpl(
        this.templatePath('.eslintrc'),
        this.destinationPath('.eslintrc'),
      );

      this.fs.copyTpl(
        this.templatePath('.github/ISSUE_TEMPLATE/bug_report.md'),
        this.destinationPath('.github/ISSUE_TEMPLATE/bug_report.md'),
      );

      this.fs.copyTpl(
        this.templatePath('.github/ISSUE_TEMPLATE/custom.md'),
        this.destinationPath('.github/ISSUE_TEMPLATE/custom.md'),
      );

      this.fs.copyTpl(
        this.templatePath('.github/ISSUE_TEMPLATE/feature_request.md'),
        this.destinationPath('.github/ISSUE_TEMPLATE/feature_request.md'),
      );
    });
  }
}

module.exports = GeneratorEbabel;
