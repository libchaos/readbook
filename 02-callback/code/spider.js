const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

function spiderLinks(currentUrl, body, nesting, callback) {
  if (nesting === 0 ) {
    return process.nextTick(callback)
  }
  const links = utilities.getPageLinks(currentUrl, body)
  if(links.length === 0) return process.nextTick(callback)
  let completed = 0, hasErrors = false;

  function done(err) {
    if (err) {
      hasErrors = true
      return callback(err)
    }
    if(++completed === links.length && !hasErrors) return callback()
    links.forEach(function(links) {
      spider(link, nesting - 1, done)
    })
  }
}

function saveFile(filename, contents, callback) {
  mkdirp(path.dirname(filename), err => {
    if (err) return callback(err)
    fs.writeFile(filename, contents, callback)
  })
}

function download(url, filename, callback) {
  console.log(`downloading ${url}`)
  request(url, (err, response, body) => {
    if (err) return callback(err)
    saveFile(filename, body, err => {
      if (err) return callback(err)
      console.log(`Downloading and saved: ${url}`)
      callback(null, body)
    })
  })
}

let spidering = new Map()
function spider(url, nesting, callback) {
  if (spider.has(url)) process.nextTick(callback)
  spider.set(url, true)
  const filename = utilities.urlToFilename(url)
  fs.readFile(filename, 'utf8', function(err, body){
    if (err) {
      if (err.code !== 'ENOENT') {
        return callback(err)
      }
      return download(url, filename, function(err, body) {
        if (err) return callback(err)
        spiderLinks(url, body, nesting, callback)
      });
    }
    spiderLinks(url, body, nesting, callbacks)
  })
}

spider(process.argv[2], 1, (err) => {
  if (err) {
    console.log(err)
    process.exit()
  } else {
    console.log('down completed')
  }
})