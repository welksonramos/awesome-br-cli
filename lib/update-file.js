'use strict';
const fs = require('fs');
const args = process.argv.slice(2);
const currentDir = process.cwd();
const filePath = `${currentDir}/sections/${args}.json`;

const updateFile = (obj) => {
  let file = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(file);
  data.push(obj);
  let jsonFile = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `${jsonFile}`);
  console.log('✔ Arquivo atualizado com sucesso!');
}

module.exports = updateFile;
