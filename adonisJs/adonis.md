# adonis.js 框架

## MVC模式

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/d9c9692b3d918268935bc49861ab629a.png)

## IoC容器 & Service Providers

⚙例子

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/b1d362e255d9bea2e5550512226d42ac.png)

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/fdd8b229af530352310e2f0e7a44d6ca.png)

软件系统在没有引入IOC容器之前，如图1所示，对象A依赖于对象B，那么对象A在初始化或者运行到某一点的时候，自己必须主动去创建对象B或者使用已经创建的对象B。无论是创建还是使用对象B，控制权都在自己手上。
软件系统在引入IOC容器之后，这种情形就完全改变了，如图3所示，由于IOC容器的加入，对象A与对象B之间失去了直接联系，所以，当对象A运行到需要对象B的时候，IOC容器会主动创建一个对象B注入到对象A需要的地方。
通过前后的对比，我们不难看出来：对象A获得依赖对象B的过程,由主动行为变为了被动行为，控制权颠倒过来了，这就是“控制反转”这个名称的由来。



### **获得依赖对象的过程被反转了**

​	依赖注入的思路：当电脑主机读取文件的时候，我就把它所要依赖的外部设备，帮他挂接上。整个外部设备注入的过程和一个被依赖的对象在系统运行时被注入另外一个对象内部的过程完全一样。

​	对象A依赖于对象B,当对象 A需要用到对象B的时候，IOC容器就会立即创建一个对象B送给对象A。IOC容器就是一个对象制造工厂，你需要什么，它会给你送去，你直接使用就行了，而再也不用去关心你所用的东西是如何制成的，也不用关心最后是怎么被销毁的，这一切全部由IOC容器包办。

IOC中最基本的技术就是“反射(Reflection)”编程

**有关反射的概念和用法，大家应该都很清楚，通俗来讲就是根据给出的类名（字符串方式）来动态地生成对象**

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/3a11f16ef9b369572abdb4d7cb4e875c.png)

# adonis use Ioc 

- 绑定依赖项到IOC容器，然后使用

```javascript
const Ioc = require('adonis-fold')
const bugsnag = require('bugsnag')
Ioc.bind('Adonis/Src/Bugsnag', function(app) {
  const Config = app.use('Adonis/Src/Config')
  const bugSnagConfig = Config.get('services.bugsnag')
  bugsnag.register(bugSnagConfig.apiKey, bugSnagConfig.options)
  return bugsnag
})

const Bugsnag = use('Adonis/Src/Bugsnag')
Bugsnag.notify(new Error('Someting went wrong'))
```

  ### use

​	使用命名空间或别名获取绑定

```javascript
const Redis = use('Redis')
```



### make

通过自动注入构造函数依赖关系返回类的实例

```javascript
class Book {
  static get inject() {
    return ['App/Model/Book', 'Adonis/Adonis/Mail']
  }
  constructor(BookModel, Mail) {
    this.BookModel = BookModel
    this.Mail = Mail
  }
}
const bookInstance = make(Book)
```



### alias

```javascript
const Ioc = require('adonis-fold').Ioc
Ioc.alias('UserModel', 'App/Model/User')
```



## ServiceProvider

通过友好的接口来注册绑定到一个IOC容器

```javascript
const ServiceProvider = require('adonis-fold').ServiceProvider
class BugSnagProvider extends ServiceProvider {
  * register() {
	this.app.bind('Adonis/Addons/BugSnag', (app) => {
      const BugSnag = require('./BugSnag')
      const Config = app.use('Adonis/Src/Config')
      return new BugSnag(Config)
	})
  }
  * boot() {
    //所有绑定注册完毕，可以做点其他的
  }
}
```







