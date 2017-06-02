# buffer

# ![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/085fb38e5c689ace191a2f6723db9246.png)



在上图中解释了buffer了，在t1时刻， 一些数据被存入buffer，在t2时刻最后一个数据块被存入buffer， 整个读的操作完成，然后整个buffer发送给消费者



# stream

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/21bc7e4f0544d68b57b9ec3905802f56.png)

流模式 只要数据一进入就立刻处理

可以组合各个流

## 有什么不同

- 空间上 v8 最多支持1Gbuffer 超过则内存泄露

- 时间上

  ![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/1b5543dcb0292afd49cd753c981dc64c.png)

  - client 从文件系统中读
  - client 压缩数据
  - client 发送给服务器
  - server 从上客户端接受
  - server 解压数据
  - server 将数据写入硬盘

  ​