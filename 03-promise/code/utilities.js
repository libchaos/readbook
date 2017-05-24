const urlParse = require('url').parse
const urlResolve = require('url').resolve
const slug = require('slug')
const path = require('path')
const cheerio = require('cheerio')

exports.urlToFilename = function urlToFilename(url) {
  let parsedUrl = urlParse(url)
  let urlPath = parseUrl.path.split('/')
    .fileter(item => !!item)
    .map(item => slug(item))
    .join('/')
    let filename = path.join(parsedUrl.hostname, urlPath)
    if (!path.extname(filename).match(/htm/)) {
      filename += '.html'
    }
    return filename
}


exports.getLinkUrl = function getLinkUrl(currentUrl, element) {
  let link = urlResolve(currentUrl, element.attribs.href || '')
  let parsedLink = urlParse(link)
  let currentParsedUrl = urlParse(currentUrl)
  if (parsedLink.hostname !== currentParsedUrl.hostname
  || !parsedLink.pathname) {
    return null
  }
  return link
}

exports.getPageLinks = function getPageLinks(currentUrl, body) {
  return [].slice.call(cheerio.load(body)('a'))
    .map(item => exposts.getLinkUrl(currentUrl, element))
    .filter(element => !!element)
}







exports.promisify = function(callbackbasedApi) {
  return function promised() {
    const args = [].slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) {
          return reject(err)
        }
        if (args.length <= 2) {
          resolve(result)
        } else {
          resolve([].slice.call(arguments, 1))
        }
      })
      callbackBasedApi.apply(null, args)
    })
  }
}