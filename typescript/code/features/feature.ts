const nameString: string = 'lili'
const height: number = 131
const numbers: number[] = [1, 2, 3, 4]
const bool: boolean = true
// 对象注释
let person: {
  name: string,
  height: number
}
person = {
  name: 'lilie',
  height: 132131
}

// 函数注释
let sayHello: (name: string) => void
sayHello = (name: string) => {
  console.log('hello' + name)
}


// 接口定义
interface PersonInterface {
  name: string
  height: number
}
// 接口实现
const xiaoMing: PersonInterface = {
  name: 'xiaoMing',
  height: 10
}
// 类型定义
type PersonType = {
  name: string,
  height: number
}
// 类型实例化
const lilei: PersonType = {
  name: 'lilei',
  height: 1230
}
// 枚举类型
enum VehicleType {
  Car,
  Van,
  Bus,
  Lorry
}

const type = VehicleType.Bus

const typeName = VehicleType[type]
console.log(typeName) // Bus

enum BoxSize {
  Large = 2,
    XLarge,
    XXLarge
}

let size = BoxSize.XLarge
console.log(size) // 3

enum DiscFlags {
  None = 0,
    Drive = 1,
    Influence = 2,
    Steadiness = 4,
    Conscientiousness = 8
}

const discSize = DiscFlags.Conscientiousness

let union: boolean | number

union = 5
union = false
// union = 'sfs'

type StringOrError = string | Error
type SeriesOfTypes = string | number | boolean | Error

type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia'
let kingdom: Kingdom
// OK
kingdom = 'Bacteria'
// Error: Type 'Protista' is not assignable to type 'Kingdom'
// kingdom = 'Protista'
type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;
let num: Fibonacci;
// OK 
num = 8

type Randoms = 'Text' | 10 | false;
let random: Randoms;
// OK
random = 'Text';
random = 10;
random = false;


// Intersection Types

interface Skier {
  slide(): void;
}
interface Shooter {
  shoot(): void;
}

type Biathelete = Skier & Shooter

interface Monument {
  name: string;
  heightInMeters: number;
}
// The array is typed using the Monument interface 
const monuments: Monument[] = [];
// Each item added to the array is checked for type compatibility
monuments.push({
  name: 'Statue of Liberty',
  heightInMeters: 46
});
monuments.push({
  name: 'Peter the Great',
  heightInMeters: 96
});
monuments.push({
  name: 'Angel of the North',
  heightInMeters: 20
});

function compareMonumentHeights(a: Monument, b: Monument) {
  if (a.heightInMeters > b.heightInMeters) {
    return -1;
  }
  if (a.heightInMeters < b.heightInMeters) {
    return 1;
  }
  return 0;
}


// The array.sort method expects a comparer that accepts two Monuments
const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
// Get the first element from the array, which is the tallest
const tallestMonument = monumentsOrderedByHeight[0];
// Peter the Great
console.log(tallestMonument.name)


// Tuple Types 元组类型
let poem: [number, boolean, string]
poem = [1, true, 'love']
// poem = ['123', 'a', 'sf']

// 字典类型

interface Cephaopod {
  hasInk: boolean
  arms: number
  tentacles: number
}

interface CephalopoDictionary {
  [index: string]: Cephaopod
}

let dictionary: CephalopoDictionary = {}

dictionary['octopus vulgaris'] = {
  hasInk: true,
  arms: 8,
  tentacles: 123
}

// dictionary[0] = {
//   hasInk: false,
//   arms: 9,
// }

delete dictionary['octopus vulgaris']


// mapped types 映射类型
interface Options {
  material: string
  backlight: boolean
}
// 只读属性
interface ManualReadonlyOnlyOptions {
  readonly material: string
  readonly backlight: boolean
}

// interface created optional interface 可选参数
interface ManualOptionalOptions {
  material?: string
  backlight?: string
}

// interface created nullabel interface
interface ManualNullableOptions {
  material: string | null
  backlight: string | null
}




// 映射类型

type ReadOnly<T> = {
  readonly [k in keyof T]: T[k]
}

type Optional<T> = {
  [k in keyof T]?: T[k]
}

type Nullable<T> = {
  [k in keyof T]: T[k] | null
}

interface Options {
  material: string
  backlight: boolean
}

type ReadOnlyOptions = Readonly<Options>
type OptionalOptions = Optional<Options>
type NullabelOptions = Nullable<Options>


const opt1: ReadOnlyOptions = {
  material: 'lilei',
  backlight: false
}


const opt2: OptionalOptions = {
  material: 'sf'
}

const op3: NullabelOptions = {
  material: null,
  backlight: null
}


// 类型推断

interface House {
  bedrooms: number
  bathrooms: number
}

interface Mansion {
  bedrooms: number
  bathrooms: number
  butlers: number
}

function getProperty(): House | Mansion {
  //...
  const house: House | Mansion = {
    bathrooms: 12,
    bedrooms: 12,
    butlers: 13
  }
  return house
}

const property = getProperty()

const bedRoomCount = property.bedrooms

// const bulterCount = property.bulters

const workingBulterCount = (<Mansion>property).butlers
console.log(workingBulterCount);


const addr: string = 'Avenue Road'
const bedroomcount: number = <number><any>addr

type Test = {
  name: string,
  age: number
}
function test(options: Test): void {
  console.log(options);
}

function getOptions(): Test{
  let options = {
    name: 'sfs',
  }
  let option = JSON.stringify(options)
  let option1: any = JSON.parse(option)
  return <Test>option1
  
}

const x = getOptions()
console.log(x.name)

// 类型守卫

function typeGuardExaple(stringNumber: string | number) {
  // Errors
  // const a = stringNumber.length
  // const b = stringNumber.toFixed()

  if (typeof stringNumber === 'string') {
    return stringNumber.length
  } else {
    return stringNumber.toFixed()
  }
} 

// 定制自己的类型守卫

interface SpeedControllable {
  increaseSpeed(): void
  decreseSpeed(): void
  stop(): void
}

interface InclineControllable {
  lift(): void
  drop(): void
}

function isSpeedControllable(treadmill: SpeedControllable | any)
  : treadmill is SpeedControllable {
    if (treadmill.increaseSpeed
      && treadmill.desreaseSpped
      && treadmill.stop
    ) {
      return true
    }
    return false
}



function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) {
  // const a = treadmill.increaseSpeed()
  // const b = treadmill.lift()

  if (isSpeedControllable(treadmill)) {
    treadmill.increaseSpeed()
  } else {
    treadmill.lift()
  }
}


interface Cube {
  kind: 'cube'
  size: number
}

interface Cuboid {
  kind: 'cuboid'
  width: number
  depth: number
  height: number
}

type Prism = Cube | Cuboid

function volumn (prism: Prism): number | void{
  switch(prism.kind) {
    case 'cube': 
      return prism.size ** 3
    case 'cuboid':
      return prism.width * prism.depth * prism.height
    default: 
      assertNever(prism)
      break
  }
}

function assertNever(arg: never): never {
  throw new Error('Possiable new tagged type: ' + arg)
}


// 操作符

let counter = 0
do {
  ++counter
} while (counter < 10)

console.log(counter)


enum Size {
  S,
  M,
  L,
  XL
}

let newSize = Size.L
++newSize

const num_1= 5 + 1

const str = 5 + '1'
const str2: string = '5'
const num3 = +str
const negative = -str

const truthyString = 'Truth string'
let falseyString: string
const invertedTest = !truthyString

const truthyTest = !!truthyString

// const falseyTest = !!falseyTest Error the string is empty

var myProperty

if (myProperty) {
  // Reaching this location means that ...
  // myProperty is not null
  // myProperty is not undefined
  // myProperty is not boolean false
  // myProperty is not an empty string
  // myProperty is not the number 0
  // myProperty is not NaN
}


if (console) {
  console.log('he');
}

console && console.log('h')

let naming

naming || 'lishshi'

interface Carvavan {
  rooms: number
}

let caravan: Carvavan = {
  rooms: 4
}

if (caravan && caravan.rooms > 5) {
  //..
}


const isValid = true
let message: string
if (isValid) {
  message = 'Okay'
} else {
  message = 'Failed'
}

const message1 = isValid ? 'Okay': 'Failed'


const triangles = [1, 3, 6, 10, 15, 21]
let [first, second] = triangles

console.log(first)
console.log(second)

let [first1, sencond2, ...remaining] = triangles

const highSchool = {school: 'Central High', team: 'Centaus' }

const {school: s, team: t} = highSchool

console.log(s);
console.log(t);


type Stu = {
  grade: 'a',
  name: string
}

function getThreeLandMarks(): string[] {
  return ['a', 'b', 'c'] 
}


const [a1, a2, a3] = getThreeLandMarks()

function add(a: number, b: number, c: number) {
  return a + b + c;
}
const hexagons = [1, 6, 15]
// Spread operator in function call const result = add(...hexagons);
// 22


function getAverage(a: number, b: number, c: number): string {
  const total = a + b + c
  const avg = total / 3
  return 'The average is ' + avg
}

// console.log(getAverage(...[1, 2, 3]))


function getAvg(a: number, b: number, c?: number): string {
  let total = a
  let count = 1
  total += b
  count ++

  if (typeof c !== 'undefined') {
    total += c
    count ++
  }

  const average = total / count
  return 'The average is ' + average
}


const result = getAvg(4, 6)


function concatenate(items: string[], sep = ',', beginAt=0, endAt=items.length) { 
  let result = ''
  for (let i=beginAt; i < endAt; i++) {
    result += items[i]
    if (i < (endAt - 1)) {
      result += sep
    }
  }
  return result
}

function getAverage3(...a: number[]) {
  let total = 0
  let count = 0

  for (let i=0; i<a.length; i++) {
    total += a[i]
    count ++
  }
  const average = total / count
}

// const result = getAverage3(1, 2, 3, 4)
// console.log(result)
class RandomHandler {

}
class ReversedHandler {}
class Handler {}


class HandlerFactory {
  getHandler(type: 'Random'): RandomHandler
  getHandler(type: 'Reversed'): ReversedHandler
  getHandler(type: string): Handler
  getHandler(type: string): Handler {
    switch(type) {
      case 'Random':
        return new RandomHandler()
      case 'Reversed': 
        return new ReversedHandler()
      default: 
        return new Handler()
    }
  }
}




const shortAddNumber = (a: number, b:number) => a + b
const mediumAddNumbers = (a: number, b: number) => {
  return a + b
}
const longAddNumbers = function(a: number, b: number) { 
  return a + b
}


const makeName = (f: string, l: string) => ({first: f, last: l})
// // 智能this
// const scopeLosingExample = {
//   text: 'Property from lexical scope',
//   run: function() {
//     setTimeout(function() {
//       console.log(this.text)
//     }, 1000)
//   }
// }

// scopeLosingExample.run()

const scopePreservingExample = {
  text: 'Property from text scope',
  run: function() {
    setTimeout(() => {
      console.log(this.text);
    }, 10000)
  }
}


// 柯里化

const multiply = (a: number) => (b: number) => a * b

const numA = multiply(5)(6)

interface Point {
  x: number
  y: number
}

interface Passenger {
  name: string
}
// did not understand yet
interface Vehicle {
  // constructor
  new(): Vehicle
  // properties
  currLoc: Point
}

class VehicleClass  {
  public currLoc: Point
  constructor() {

  }
}


// class

class Song {
  constructor(private artist: string, private title: string) {

  }
  play() {
    console.log('Playing ' + this.title + ' by ' + this.artist);
  }
}

class Jukebox {
  constructor(private songs: Song[]) {

  }
  play() {
    const song = this.getRandomSong()
    song.play()
  }
  private getRandomSong() {
    const songCount = this.songs.length
    const songIndex = Math.floor(Math.random() * songCount)
    return this.songs[songIndex]
  }
}

const songs = [
  new Song('Bushbaby', 'Megaphone'),
  new Song('Delays', 'One More Lie In'),
  new Song('Goober Gun', 'Stereo'),
  new Song('Sohnee', 'Shatter'),
  new Song('Get Amped', 'Celebrity')
];
const jukebox = new Jukebox(songs);
jukebox.play();



// 访问控制

class Playlist {
  private songs: Song[] = []
  static readonly maxSongCount = 30
  constructor(public name: string) {

  }

  addSong(song: Song) {
    if (this.songs.length >= Playlist.maxSongCount) {
      throw new Error('Playlist is full')
    }
    this.songs.push(song)
  }

}

// Creating a new instance
const playlist = new Playlist('My Playlist');
// Accessing a public instance property
const name1 = playlist.name;
// Calling a public instance method
playlist.addSong(new Song('Therapy?', 'Crooked Timber'));
// Accessing a public static property
const maxSongs = Playlist.maxSongCount;
// Error: Cannot assign to a readonly property
// Playlist.maxSongCount = 20;


interface StockItem {
  description: string
  asin: string
}

class WareHouseLocation {
  private _stockItem: StockItem
  constructor(public aisle: number, public slot: string) {

  }
  get stockItem() {
    return this._stockItem
  }
  set stockItem(item: StockItem) {
    this._stockItem = item
  }
}


interface Audio {
  play(): any
}

class SongA implements Audio {
  constructor(private artist: string, private title: string) {

  }
  play(): void {
    console.log('Play ' + this.title + ' by ' + this.artist);
  }
  static Compare(a: SongA, b: SongA) {
    if (a.title === b.title) {
      return 0
    } 
    return a.title > b.title ? 1: -1
  }

}

class Playlist1 {
  constructor(public songs: SongA[]) {

  }
  play() {
    const song = this.songs.pop() || <Audio>{}
    song.play()
  }

  sort() {
    this.songs.sort(SongA.Compare)
  }
}

class RepeatingPlaylist extends Playlist1 {
  private songIndex = 0
  constructor(songs: SongA[]) {
    super(songs)
  } 
  play() {
    this.songs[this.songIndex].play()
    this.songIndex++
    if (this.songIndex >= this.songs.length) {
      this.songIndex = 0
    }
  }
  get len() {
    return this.songs.length
  }
}


const repeate = new RepeatingPlaylist([
  new SongA('lili', '昨天'),
  new SongA('lili1', '进天'),
  new SongA('lili2', '名天'),
  new SongA('lili3', '后天'),
])


abstract class Logger {
  abstract notify(message: string): void
  protected getMessage(message: string): string {
    return `Information: ${new Date().toUTCString()} ${message}`
  }
}

class ConsoleLogger extends Logger {
  notify(message: string) {
    console.log(this.getMessage(message))
  }
}

class InvasiveLogger extends Logger {
  notify(message: string) {
    alert(this.getMessage(message));
  }
}

let logger: Logger

logger = new Logger()

logger = new InvasiveLogger()

logger.notify('Hello, world')


class ClickCounter {
  private count = 0

  registerClick() {
    this.count ++
    console.log(this.count);
  }
}


const clickCounter = new ClickCounter()

// document.getElementById('target')
//   .onclick = clickCounter.registerClick

class ClickCounter1 {
  private count = 0

  registerClick = () => {
    this.count ++
    console.log(this.count);
  }
}



// document.getElementById('target')
//   .onclick = clickCounter.registerClick.bind(clickCounter)


// document.getElementById('taget').onclick = function() {
//   clickCounter.registerClick()
// }


// 事件捕获

class ClickCounter2 {
  private count = 0

  registerClick(id: string) {
    this.count ++
    console.log(this.count);
  }
}

const x222 = new ClickCounter2()

// document.getElementById('sfds').onclick = (e) => {
//   const target = <Element>e.target || e.srcElement
//   x222.registerClick(target.id)
// }


class Display{
  name: string = ''
}

class Television extends Display {

}
class HiFi {

}
const  display = new Display()
const television = new Television()
const hiFi = new HiFi()

let isDisplay

isDisplay = display instanceof Display
isDisplay = television instanceof Display

isDisplay = hiFi instanceof Display


let hasName
hasName = 'name' in display

hasName = 'name' in television

hasName = 'name' in hiFi


class Display1 {
  name: string; // 未初始化
}
const display1 = new Display1();
// false
const hasName1 = 'name' in display;


const tv1 = new Television()
const radio = new HiFi()

const typeType = tv1.constructor.name


// 泛型

function reverse<T>(list: T[]): T[] {
  const reversedList: T[] = []
  for (let i=(list.length-1); i>=0; i--) {
    reversedList.push(list[i])
  }
  return reversedList
}

const letters = ['a', 'b', 'c', 'd']

const reversedLetters = reverse<string>(letters)
reversedLetters

const numbers1 = [1, 2, 3, 4]
const reversedNumbers = reverse<number>(numbers1)
reversedNumbers



class CustomerId {
  constructor(private customIdValue: number) {

  }
  get Value (){
    return this.customIdValue
  }
}

class Customer {
  constructor(public id: CustomerId, public name: string) {

  }
}

interface Repository<T, TId> {
  getById(id: TId): T
  persist(model: T): TId
}

class CustomerRepository implements Repository<Customer, CustomerId> {
  constructor(private customers: Customer[]) {

  }
  getById(id: CustomerId) {
    return this.customers[id.Value]
  }

  persist(customer: Customer) {
    this.customers[customer.id.Value] = customer
    return customer.id
  }
}


class DomainId<T> {
  constructor(private id: T) {

  }
  
  get value (): T {
    return this.id
  }
}

class OrderId extends DomainId<number> {
  constructor(orderValue: number) {
    super(orderValue)
  }
}

class AccountId extends DomainId<string> {
  constructor(accountValue: string) {
    super(accountValue)
  }
}

function onlyAcceptOrderId(orderId: OrderId) {

}

function onlyAcceptAccountId(accountId: AccountId) {

}

function acceptAnyId(id: DomainId<any>) {

}

const accountId = new AccountId('new id')
const numberId = new OrderId(1231)

onlyAcceptAccountId(accountId)
acceptAnyId(accountId)
onlyAcceptOrderId(numberId)


interface HasName {
  name: string
}

class Personalization {
  static greet<T extends HasName>(obj: T) {
    return 'Hello ' + obj.name
  }
}