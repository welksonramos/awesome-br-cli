'use strict';

module.exports = [
  {
    name: "title",
    type: "input",
    message: "Título:"
  }, {
    name: "url",
    type: "input",
    message: "URL:"
  }, {
    name: "type",
    type: "list",
    message: "Tipo:",
    choices: [
      "apostila",
      "artigo",
      "curso",
      "dica",
      "documentação",
      "guia",
      "hangout",
      "livro",
      "pacote",
      "palestra",
      "screencast",
      "site",
      "slide",
      "slideshare",
      "styleguide",
      "tutorial",
      "url",
      "vídeo"
    ], filter: function (str) {
      return str.toLowerCase();
    }
  }, {
    name: "tags",
    type: "input",
    message: "Tags (separadas por vírgulas):"
  }, {
    name: "authorName",
    type: "input",
    message: "Nome do Autor:"
  }, {
    name: "paid",
    type: "confirm",
    message: "Conteúdo pago?",
    default: false
  },
  {
    name: "authorUrl",
    type: "input",
    message: "URL do site do Autor:"
  }, {
    name: "isOk",
    type: "confirm",
    message: "Todos os dados estão corretos?"
  }
];
