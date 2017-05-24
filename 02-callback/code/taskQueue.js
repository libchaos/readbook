module.exports = class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency
    this.queue = []
    this.runnig = 0
  }

  pushTask(task) {
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



