## AOP



![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/d5e50837ee0a4ab820ba209013b77052.png)

都经过验证用户，为了是实现代码的复用，抽出来



![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/cf1e7483035e499650f216a1f4d1bced.png)

真正目的是，你写代码的时候，事先只需考虑主流程，而不用考虑那些不重要的流程，懂C的都知道，良好的风格要求在函数起始处验证参数，如果在C上可以用AOP，就可以先不管校验参数的问题，事后使用AOP就可以隔山打牛的给所有函数一次性加入校验代码，而你只需要写一次校验代码