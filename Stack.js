function Stack() {
  this.store = []
  this.top = 0
}

Stack.prototype.push = function(value) {
  this.store[this.top] = value
  this.top++
}

Stack.prototype.pop = function() {
  if (this.top <= 0) { return null }
  let saved = this.store[this.top - 1]
  this.top--
  return saved
}

Stack.prototype.peek = function(value) {
  return this.store[this.top - 1]
}

Stack.prototype.length = function () {
  return this.top
}

Stack.prototype.clear = function () {
  this.store = []
  this.top = 0
}

let stack = new Stack()
