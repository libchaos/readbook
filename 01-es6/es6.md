# es 

## 1. 箭头函数
  -  箭头函数里面没有this关键字

    **备注（this是一个对象，包含了正在运行的代码**
  - 写法
    ```javascript
      (args) => result; // 当返回一个表达式时用一行写法
      (args) => {
        console.log('test')
        return result;
      } 
    ```


## 2. let and const 变量定义
 - let 和 const 是块内生效的

 **备注 块作用域是对象字面量 函数作用域 if for 其实就是凡是用{}都是一个块**
 - let 是可以修改的
 - const 其实绑定的是内存地址，单层值不可改变，如果是对象怎可修改内部属性。

## 3. 类
- 和java语言类似
- set 
- get
- static

## 4. 增强版的对象字面量
- key 是 一个可计算属性

## 5. map and set
- map 的key可以是任意类型
- set 不能给集合添加元素

## 6. weakmap and weakset
- 设计缓存
- weakmap 是可以设置**弱引用** 方便下次回收



## 7. 模板

- 


## 8. 模式匹配


