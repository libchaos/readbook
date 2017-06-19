Function.prototype.before = function(beforefn) {
  const that = this
  return function() {
    beforefn.apply(this, arguments)
    return that.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn) {
  const that = this
  return function() {
    const ret = that.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

let func = function() {
  console.log(2)
}
func = func.after(function() {
  console.log(3)
}).before(function() {
  console.log(1)
})

func()

Function.prototype.before = function(beforefn) {
    var thiz = this;
    return function() {
        beforefn();
        thiz();
        return thiz;
    }
};

Function.prototype.after = function(afterfn) {
    var thiz = this;
    return function() {
        thiz();
        afterfn();
        return thiz;
    }
};

let func1 = function() {
    console.log(2);
};

func1 = func1.after(function() {
    console.log(3);
}).before(function() {
    console.log(1);
}).before(function() {
    console.log('hehe');
});

func();