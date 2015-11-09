'use strict';

module.exports = function sectionTemplate(answers){
return [
{
    "name": answers.title,
    "url": answers.url,
    "type": answers.type,
    "tags": [ answers.tags ],
    "author": {
      "name": answers.authorName,
      "url": answers.authorUrl
    }
  }
  ];
}