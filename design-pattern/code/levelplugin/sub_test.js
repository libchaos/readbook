const level = require('level')
const levelsub = require('./sub')
let db = level(__dirname + '/db', {valueEncoding: 'json'})

db = levelsub(db)

db.subscribe(
  {doctype: 'tweet', language: 'env'},
  (k, val) => console.log(val)
)
db.put('1', {doctype: 'tweet', text: 'hi', language: 'env'})
db.put('2', {doctype: 'compony', name: 'Aeme.co.'})