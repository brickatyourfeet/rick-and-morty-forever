const _ = require('lodash')
const fs = require('fs')
const json = JSON.parse(fs.readFileSync('./characters.json', 'utf-8'))


/// could set a variable of the character array length, and the math rand to get rid of lodash

function quote(character) {
  return _.sample(json[character])
}

// console.log(quote('beth'))

module.exports = quote
