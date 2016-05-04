#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var questions = require('../lib/questions');
var template = require('../lib/template');
var args = process.argv.slice(2);


if(!args.length || args.length > 1){
	process.stdout.write('Use: awesome-br <section>' +
	 '\n\nEx: awesome-br nodejs\n');
	process.exit(1);
}

function

inquirer.prompt(questions, function(answers){

fs.writeFile('sections/' + args + '.json', JSON.stringify(template(answers), null, ' '), 'utf8', [{flags: 'w+'}], function(err){
		if(!err) {
			console.log('Arquivo criado com sucesso!');
		};
	});
});