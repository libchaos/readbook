const path = require('path');
const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const fs = require('fs');
const mkdirp = utilities.promisify(require('mkdirp'));
const readFile = utilities.promisify(fs.readFile);
const writeFile = utilities.promisify(fs.writeFile);


function spiderLinks(currentUrl, body, nesting) {
  let promise = Promise.resolve()
  if (nesting === 0) return Promise
  const links = utilities.getPageLinks(currentUrl, body)
  links.forEach(link => {
    promise = promise.then(() => spider(link, nesting - 1))
  })
  return promise
}


function download(url, filename) {
  console.log(`Downloading ${url}`)
  let body
  return request(url)
    .then(response => {
      body = response.body
      return mkdirp(path.dirname(filename))
    })
    .then(() => writeFile(filename, body))
    .then(() => {
      console.log(`Downloaded and saved: ${url}`)
      return body
    })
}


function spider(url, nesting) {
  let filename = utilities.urlToFilename(url)
  return readFile(filename, 'ut8')
    .then(
      (body) => (spiderLinks(url, body, nesting)),
      (err) => {
        if (err.code !== 'ENOENT') {
          throw err
        }
        return download(url, filename)
          .then(body => spiderLinks(url, body, nesting))
      }
    )
}

spider(process.argv[2], 1)
  .then(() => console.log('Download complete'))
  .catch((err) => console.error(err))


  x = 
  y = {'马', '雄马', '雌马', '幼马', '驴', '雄驴', '雌驴', '驴骡', '马骡'}

  horse 马
  stallion 雄马
  mare 雌马
  foal, colt, filly 幼马
  gelding 阉割的马
  donkey, ass 驴
  donkey 雄驴
  jenny ass 雌驴
  hinny 驴骡
  mule 马骡
  cattle 牛
  bull, ox 雄牛
  cow 雌牛
  calf( pl. calves) 年幼的牛
  herd 牛的统称
  water buffalo 水牛
  yak 牦牛
  sheep 绵羊
  ram 雄绵羊
  ewe 雌绵羊
  lamb 年幼的绵羊
  flock 绵羊的统称
  mutton 羊肉
  goat 山羊
  billy 雄山羊
  nanny 雌山羊
  kid 年幼的山羊
  pig 猪