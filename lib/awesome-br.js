#!/usr/bin/env node

'use strict';

const fs = require('fs');
const pathExists = require('path-exists');
const inquirer = require('inquirer');
const questions = require('./questions');
const sectionTemplate = require('./template');
const args = process.argv.slice(2);

if(!args.length || args.length > 1){
	console.log(`
    Use: awesome-br <section>
    Ex: awesome-br nodejs
     `);
	process.exit(1);
}

inquirer.prompt(questions).then((answers) => {
  let str = [ ];
  let currentDir = process.cwd();
  let fileExists = pathExists.sync(`${currentDir}/sections/${args}.json`);

  if(!fileExists){
    fs.writeFile(`${currentDir}/sections/${args}.json`,  `[${sectionTemplate(answers)}]`);
} else {
  fs.appendFile(`${currentDir}/sections/${args}.json`,  `${sectionTemplate(answers)}`, 'utf8', (err) => {
    if(err) throw err;
});
}
console.log('Arquivo gerado com sucesso! ✔' );
});
