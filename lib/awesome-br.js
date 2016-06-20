#!/usr/bin/env node

'use strict';

const fs = require('fs');
const pathExists = require('path-exists');
const inquirer = require('inquirer');
const questions = require('./questions');
const sectionTemplate = require('./template');
const args = process.argv.slice(2);
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

// Checa se existe atualizações disponiveis
updateNotifier({pkg}).notify();

const currentDir = process.cwd();
const filePath = `${currentDir}/sections/${args}.json`;

const fileExists = pathExists.sync(filePath);

if(!args.length || args.length > 1){
	console.log(`
    Use: awesome-br <section>
    Ex: awesome-br nodejs
     `);
	process.exit(1);
}

inquirer.prompt(questions).then((answers) => {

  if(!fileExists){
    fs.writeFile(filePath,  `[${JSON.stringify(sectionTemplate(answers), null, 2)}]`);
    console.log('Arquivo gerado com sucesso! ✔' );
} else {
  updateFile(sectionTemplate(answers));
}
});

function updateFile(obj){
  let file = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(file);
  data.push(obj);
  let jsonFile = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `${jsonFile}`);
  console.log('Arquivo atualizado com sucesso! ✔');
}
