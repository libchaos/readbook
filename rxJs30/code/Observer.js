class Producer {
  constructor() {
    this.listeners = []
  }

  addListener(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener)
    }
  }
  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1)
  }
  notify(message) {
    this.listeners.forEach(listener => {
      listener(message)
    })
  }
}
const print = console.log
const egg = new Producer()

function l1(message) {
  print(`${message} from l1`)
}


function l2(message) {
  print(`${message} from l2`)
}



const arr = [1, 2, 3, 4]
const iterator = arr[Symbol.iterator]()

print(iterator.next())
print(iterator.next())

class IteratorFromArray {
  constructor(arr) {
    this._array = arr
    this._cursor = 0
  }
  next() {
    return this._cursor < this._array.length ?
    {value: this._array[this._cursor++], done: false} :
    {done: true}
  }
  
  map(callback) {
    const iterator = new IteratorFromArray(this._array)
    return {
      next() {
        const {done, value} = iterator.next()
        return {
          done: done,
          value: done ? undefined : callback(value)
        }
      }
    }
  }
}

const iterator1 = new IteratorFromArray([1, 2, 3])
const newIterator = iterator1.map(value => value + 3)

print(newIterator.next())

print(newIterator.next())


function* getNumbers(words) {
		for (let word of words) {
			if (/^[0-9]+$/.test(word)) {
			    yield parseInt(word, 10);
			}
		}
	}
	
	const iterator3 = getNumbers('30 天精通 RxJS (04)');
	
	iterator.next();
	// { value: 3, done: false }
	iterator.next();
	// { value: 0, done: false }
	iterator.next();
	// { value: 0, done: false }
	iterator.next();
	// { value: 4, done: false }
	iterator.next();
	// { value: undefined, done: true }