'use strict'

module.exports = function updateFile(obj){
  let file = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(file);
  data.push(obj);
  let jsonFile = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `${jsonFile}`);
  console.log('✔ Arquivo atualizado com sucesso!');
}
