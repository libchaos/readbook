class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency
    this.queue = []
    this.runnig = 0
  }

  push(task) {
    this.queue.push(task)
  }

  next() {
    while(this.runnig < this.concurrency && this.queue.length) {
      const task = this.queue.shift()
      task(() => {
        this.runnig--
        this.next()
      })
      this.runnig++
    }
  }
}



const queue1 = new TaskQueue(2)

queue1.push((done) => {
  console.log('this is the first')
  done()
})
queue1.push((done) => {
  console.log('this is the second')
  done()
})

queue1.next()
queue1.next()