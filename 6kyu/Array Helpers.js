// https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript

// 1
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }


// 2
Object.assign(Array.prototype, {
  square() {return this.map(n => n * n);},
  cube() {return this.map(n => Math.pow(n, 3));},
  sum() {return this.reduce((p,n) => p + n, 0);},
  average() {return this.reduce((p,n) => p + n, 0) / this.length;},
  even() {return this.filter(n => !(n % 2));},
  odd() {return this.filter(n => n % 2);}
});


// 3
Array.prototype.square = function() {
  return this.map(el => el ** 2)
}
Array.prototype.cube = function() {
  return this.map(el => el ** 3)
}
Array.prototype.sum = function() {
  return this.reduce((acc, num) => acc + num, 0)
}
Array.prototype.average = function() {
  return this.sum() / this.length
}
Array.prototype.even = function() {
  return this.filter(el => el % 2 === 0)
}
Array.prototype.odd = function() {
  return this.filter(el => el % 2 === 1)
}

// 4
Array.prototype.square = function() {
  const arr = this
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i])
  }

  return result
}

Array.prototype.cube = function() {
  const arr = this
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 3)
  }

return result
}

Array.prototype.average = function() {
  const arr = this

  if (!arr.length) return NaN

  return arr.sum() / arr.length
}

Array.prototype.sum = function() {
  const arr = this
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

Array.prototype.even = function() {
  const arr = this
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
      result.push(arr[i])
  }

  return result
}

Array.prototype.odd = function() {
  const arr = this
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1)
      result.push(arr[i])
  }

return result
}