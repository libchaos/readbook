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

