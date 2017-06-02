const sublevel = require('level-sublevel')
const level = require('level')
const uuid = require('uuid')
const aysnc = require('async')


const db = sublevel(level('example-db', {valueEncoding: 'json'}))
const salesDb = db.sublevel('sales')
const items = ['book', 'game', 'app', 'song', 'movie']

async.times(100000, (n, callback) => {
  salesDb.put(uuid.v4(), {
    amount: Math.ceil(Math.random()* 100),
    item: items[Math.floor(Math.random() * 5)]
  }, callback)
}, err => {
  if (err) console.log(err)
  console.log('Db populated')
})