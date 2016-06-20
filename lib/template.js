module.exports = sectionTemplate = answers => {
  return {
    'name': `${answers.title}`,
      'url': `${answers.url}`,
      'type': `${answers.type}`,
      'tags': [`${answers.tags}`.split(',')],
      'author': {
        'name': `${answers.authorName}`,
        'url': `${answers.authorUrl}`
      }
    }
}