# Observable



## objservable: create

- 创建Observeable方法，其中create是最基本的方式,

  ```javascript
  const observable = Rx.Observable
  	.create(function(observer) {
        observer.next('jerry')
        observer.next('lili')
        setTimeout(() => {
          observer.next('hanmeimei')
        }, 30)
  	})
  ```

- 可以订阅这个observable，来接受他送出的值

  ```javascript
  console.log('start')
  observable.subscribe(function(value) {
    console.log(value)
  })
  console.log('end')
  ```

  从面的调用方式可以看粗Observable同时可以处理同步与非同步行为。

### 观察者(observer)

observable 是可以被subscribe(订阅)的，而订阅他的对象被成为observer(观察者)

观察者是一个具有三个方法的对象，每当observable 发生事件时，便会调用观察者对应的方法

- next 每当observable发送出新的值，next方法被调用
- complete 在observabel没有其他值可以取时，complete方法会被调用，complete被调用后，next方法不在起作用
- error 每当observable内发生错误时，error方法会被调用

```javascript
const observable = Rx.observable
	.create(function(observer) {
      try{
          observer.next('lili')
          observer.next('jingjing')
          throw 'some exception'
          observer.complete()
          observer.next('not work')  
      } catch (e) {
        observer.error(e)
      }
    })
const observer = {
  next(value) {
    console.log(value)
  },
  error(error) {
    console.log(error)
  },
  complete() {
    console.log('complete')
  }
}
observable.subscribe(observer)
```



```javascript
var observable = Rx.Observable
	.create(function (observer) {
			observer.next('Jerry');
			observer.next('Anna');
	})
	
observable.subscribe({
	next: function(value) {
		console.log(value);
	},
	error: function(error) {
		console.log(error)
	},
	complete: function() {
		console.log('complete')
	}
})


function subscribe(observer) {
		observer.next('Jerry');
		observer.next('Anna');
}

subscribe({
	next: function(value) {
		console.log(value);
	},
	error: function(error) {
		console.log(error)
	},
	complete: function() {
		console.log('complete')
	}
});
```





# **订阅一个 Observable 就像是执行一个 function**

