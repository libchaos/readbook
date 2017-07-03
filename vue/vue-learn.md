# VUE.JS

# MVVM

M-V- X    本质都是一样的     重点还是在于M-V  的桥梁

X的模式之间不同  主要是  M与V  的数据传递的流程不同。

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/cbe3290a96139668f4a477dce96ff8af.png)

```javas
new Vue({}) // view Model 传递数据，构建模板（View），管理Model(Model)
```





# 动态css绑定

- data: ```:class="{red: attachRed, blue: !attachRed}"```
- computed(计算属性)  ```computed: {divClasses(){return {}}}```
- 数组扩展 ```"[color: {red: attachRed}]"```
- 修改 style 属性 ```:style={bGC: red}, :style=[], :style=Vars```



# vue 指令

- v-for
- v-show
- v-model
- v-show
- v-if
- v-on
- v-bind





