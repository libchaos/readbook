const arr = ['a', 'b']
// statment
// for (let i of arr) {
//   console.log(i)
// }

// fp

// arr.forEach(i => console.log(i))

// get id title to a new list
const newCourseList = [
	{
		"id": 511021,
		"title": "React for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511022,
		"title": "Vue2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511023,
		"title": "Angular2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511024,
		"title": "Webpack for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 4
	}
], idAndTitle = [];

const print = console.log
newCourseList.map(item => idAndTitle.push({id: item.id, title: item.title}))

// print(idAndTitle)

const ratingIsFive = newCourseList.filter((item) => item.rating === 5)
  .map(item => item.title)

// print(ratingIsFive)

// 合并数组
const user = {
  id: 888,
  name: 'JerryHong',
  courseLists: [{
    "name": "My Courses",
    "courses": [{
      "id": 511019,
      "title": "React for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 5
    }, {
      "id": 511020,
      "title": "Front-End automat workflow",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ "id": 2, "name": "gulp" }, { "id": 3, "name": "webpack" }],
      "rating": 4
    }]
  }, {
    "name": "New Release",
    "courses": [{
      "id": 511022,
      "title": "Vue2 for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 5
    }, {
      "id": 511023,
      "title": "Angular2 for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 4
    }]
  }]
};

//map use forEach

Array.prototype.map = function (callback) {
  const result = []
  this.forEach(function(element, index) {
    result.push(callback(element, index))
  })
  return result
}

Array.prototype.filter = function (callback) {
  const result = []
  this.forEach((item, index) => {
    if (callback(item, index)) {
      result.push(item)
    }
  })
  return result
}



Array.prototype.concatAll = function() {
  const result = []
  this.forEach((array) => {
    result.push.apply(result, array)
  })
  // this.forEach(array => {
  //   this.forEach(item => {
  //     result.push(item)
  //   })
  // })
  // this.forEach(array => {
  //   result.push(...array)
  // })
  return result
}

const allCouserIds = user.courseLists.map(list => 
  list.courses.filter(course => course.rating === 5)
).concatAll()
print(allCouserIds)