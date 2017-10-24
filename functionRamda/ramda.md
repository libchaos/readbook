# Ramda CookBook reading

0. 一种compose

   ```javascript
   let compose = (...args) => x => args.reduceRight((value, item) => item(value), x)
   let f = x => x+1
   let g = x => x*2
   g(f(1))
   compose(g, f)(1)
   ```

1. functor (数据被装到了容器里不能直接操作)

   ```javascript
   const Container = function(x) {
       this.__value = x
   }
   Container.of = function(x) {return new Container(x)}
   Container.of(3) // Container {__value: 3}
   Container.of(Container.of({name: "youda"}))
   Container.prototype.map = function(f) {
       return Container.of(f(this.__value))
   }
   Container.of('abc').map((s) => s.toUpperCase())
   Container.of('boms').map(s => s.concat('hello')).map(s => s.length)


   const IO = function(f) {
       this.__value = f
   }
   IO.of = function(x) {
       return new IO(function() {
           return x
       })
   }
   IO.prototype.map = function(f) {
       return new IO(_.compose(f, this.__value))
   }
   let data = new IO(() => window.localStorage['data'])
   let head = data => data[0]
   let prop = property => data => data[property]
   let getName = data.map(head).map(prop('name'))
   getName.__value() // 获取名字
   ```

   ![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/08c2645c339e0f390aa23ff666191b13.png)

   ​

2. 依据下标从数组中选元素

   ```javascript
   const pickIndexs = R.compose(R.value, R.pickAll)
   pickIndexs([0, 2], ['a', 'b', 'c']) // => ['a', 'c']
   ```

3. ​