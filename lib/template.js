'use strict';

const sectionTemplate = (answers) => {
return `
{
    "name": "${answers.title}",
    "url": "${answers.url}",
    "type": "${answers.type}",
    "tags": [ "${answers.tags}"],
    "author": {
      "name": "${answers.authorName}",
      "url": "${answers.authorUrl}"
    }
  }`;
}

module.exports = sectionTemplate;
