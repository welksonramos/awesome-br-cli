#!/usr/bin/env node

'use strict';

const fs = require('fs');
const pathExists = require('path-exists');
const inquirer = require('inquirer');
const questions = require('./questions');
const sectionTemplate = require('./template');
const args = process.argv.slice(2);
const updateFile = require('./update-file');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

// Checa se existe atualizações disponiveis
updateNotifier({pkg}).notify();

const currentDir = process.cwd();
const filePath = `${currentDir}/sections/${args}.json`;

const fileExists = pathExists.sync(filePath);

function help(){
  process.stdout.write(`
  Usage:
      awesome-br <section> [Options]

    Example:
      awesome-br nodejs

    Options:
      -h, --help      output usage information
      -V, --version   output the version number
  `);
}

if (!args.length || args.length > 1 || args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1) {
  help();
  process.exit(1)
}

if (args.indexOf('-V') !== -1 || args.indexOf('--version') !== -1) {
  process.stdout.write(`${pkg.name}: ${pkg.version}`);
  process.exit(0)
}

inquirer.prompt(questions).then(answers => {
  if (!fileExists) {
    fs.writeFile(filePath,  `[${JSON.stringify(sectionTemplate(answers), null, 2)}]`);
    console.log('✔ Arquivo gerado com sucesso!');
  } else {
    updateFile(sectionTemplate(answers));
  }
});
