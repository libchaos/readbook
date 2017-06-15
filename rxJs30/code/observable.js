const Rx = require('rxjs/Rx')
const print = console.log
const observable = Rx.Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Lili')
})

observable.subscribe(function(value) {
  print(value)
})