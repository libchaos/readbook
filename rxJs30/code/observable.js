const Rx = require('rxjs/Rx')
const print = console.log
const observable = Rx.Observable.create(function (observer) {
  observer.next('Jerry')
  observer.next('Lili')
  setTimeout(() => {
    observer.next('Rxjs 30 days')
  }, 30)
})
print('start')
observable.subscribe(function(value) {
  print(value)
})
print('end')

