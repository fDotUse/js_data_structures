function Queue () {
  this.store = []
}

Queue.prototype.enqueue = function (value) {
  this.store.push(value)
}

Queue.prototype.dequeue = function ()  {
  return this.store.shift()
}

Queue.prototype.front = function ()  {
  return this.store[0]
}

Queue.prototype.back = function ()  {
  return this.store[this.store.length - 1]
}

Queue.prototype.toString = function ()  {
    let arrStr = '';
    _.each(this.store, (element, idx) => {
      if (idx === (this.store.length - 1)) {
        arrStr += `${element}`
      } else {
        arrStr += `${element}, `
      }
    })
    return arrStr
}

Queue.prototype.empty = function ()  {
  return this.store.length === 0 ? true : false
}

let queue = new Queue()