'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Game on! What is the name of the game module you will develop (i.e.: ebabel-goblin): '
      }
    ]).then( (answers) => {
      // create destination folder
      this.destinationRoot(answers.name);
    });
  }
};