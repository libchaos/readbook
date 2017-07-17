// items is array
// 受限于固定长度 items.length
function iterFactory(items) {
  let nextIndex = 0
  return {
    next: () => {
      return nextIndex < items.length ?
        {value: items[nextIndex++], done: false}:
        {done: true}
    }
  }
}

// 定义自定义迭代器 仍然受限于low， high

class Range {
  constructor(low, high, step=5) {
    this.low = low
    this.high = high
    this.step = step
  }
  [Symbol.iterator]() {
    return new IterRange(this)
  }
}

class IterRange {
  constructor(range, step) {
    this.range = range
    this.current = this.range.low
  }
  next() {
    const nextVal = {done: true}
    if (this.current <= this.range.high) {
      nextVal.value = this.current
      nextVal.done = false
      this.current += this.range.step
    }
    return nextVal
  }
}

// 生成器的解决方案


class Range2 {
  constructor(low, high, step=5) {
    this.low = low
    this.high = high
    this.step = step
  }
  *[Symbol.iterator](){
    for(let i=this.low; i<=this.high; i+=this.step) {
      yield i
    }
  }
}

const x = new Range2(2, 10, 2)

// for (const i of x) {
//   console.log(i);
// }
// 生成器可以有参数，但被限制在函数第一次调用时。
// 生成器可以通过一个 return 语句来终止。
// 下面是一个变异的 fibonacci 函数，有一个 limit 参数，一旦满足条件将终止。
function* fib(limit) {
  let f1 = 1
  let f2 = 1
  while (1) {
    let current = f2
    f2 = f1;
    f1 = f1 + curent
    if (limit && current > limit) return;
    yield current
  }
}


// 虽然生成器只能在第一次调用的时候传递参数，
// 但是 next 方法也可以接受参数，
// 因此我们可以利用 next 向生成器内部继续注入值 赋值给左边对象

function* fib2() {
  let f1 = 1
  let f2 = 1
  while (1) {
    let cur = f2
    f2 = f1
    f1 = f1 + cur
    const x = yield cur
    console.log(x);
    if (x) {
      f1 = f2 = 1
    }
  }
}

const s = fib2()

console.log(s.next());
console.log(s.next());
console.log(s.next());
console.log(s.next('hello'));
