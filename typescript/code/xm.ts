import {Person} from './person'


const person = new Person('hello', 123)

console.log(person.age)


interface IPerson {
  name: string
  grade: string
}


function te(person: IPerson) {
  console.log(person.name, person.grade);
}


function logOnReturen<T>(thing: T): T {
  console.log(thing)
  return thing
}

let stringLog: string = logOnReturen<string>('string log')
let numberLog: number = logOnReturen<number>(1231)

interface Book {
  title: string
}

let newBook: Book = {title: 'this is a book'}

let bookLog: Book = logOnReturen<Book>(newBook)


// interface Inventory<T> {
//   addItem: (newItem: T) => void
//   getAllItems: () => Array<T>
// }

// let bookInventory: Inventory<Book> 
// bookInventory.addItem = (b: Book) => {

// }
// let allBooks: Array<Book> = bookInventory.getAllItems()


interface shelfItem {
  title: string
}

class Shelf<T extends shelfItem> {
  private _items: Array<T> = new Array<T>()

  add(item: T): void {
    this._items.push(item)
  }

  printTitles(): void {
    this._items.forEach(
      item => console.log(item.title)
    )
  }
}