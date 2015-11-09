'use strict';

module.exports = [
{
	name: "title",
	type: "input",
	message: "Titulo:"
},
{
	name: "url",
	type: "input",
	message: "URL:"
},
{
	name: "type",
	type: "list",
	message: "Tipo:",
	choices : [ "artigo", "código", "dica", "livro", "screencast", "video", "tutorial", "url"],
	filter: function (str){
		return str.toLowerCase();
	}
},
{
	name:"tags",
	type:"input",
	message:"Tags (separadas por ,):"
},
{
	name:"authorName",
	type: "input",
	message: "Nome do Autor:"
},
{
	name: "authorUrl",
	type: "input",
	message: "URL do site do Autor:"
},
{
	name:"isOk",
	type:"confirm",
	message:"Todos os dados estão corretos?"
}
]