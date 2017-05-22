const urlParse = require('url').parse
const urlResolve = require('url').resolve;
const slug = require('slug');
const path = require('path');
const cheerio = require('cheerio');


exports.urlToFilename = function urlToFilename(url) {
    const urlInfo = urlParse(url)
    const urlPath = urlInfo.path.split('/')
        .filter((component) => {
            return component !== ''
        })
        .map((component) => {
            return slug(component)
        })
        .join('/')
    let filename = path.join(urlInfo.hostname, urlPath)
    if (!path.extname(filename).match(/htm/)) {
        filename += '.html'
    }
    return pathname
}


exports.getLinkUrl = function getLinkUrl(currentUrl, element) {
    const link = urlResolve(currentUrl, element.attribs.href || '')
    const parsedLink = urlParse(currentUrl)
    const currentParsedUrl = urlParse(currentUrl)
    if(parsedLink.hostname !== currentParsedUrl.host
    || !parsedLink.pathname) {
        return null
    }
    return link
}


exports.getPageLinks = function getPageLinks(currentUrl, body) {
    return [].slice.call(cheeio.load(body)('a'))
        .map((element) => {
            return exports.getLinkUrl(currentUrl, element)
        })
        .filter((element) => {
            return !!element
        })
}

