var Tree = function (value, parent) {
  this.parent = parent || null
  this.value = value
  this.children = []
}

Tree.prototype.add = function (value) {
  let node = new Tree(value)
  node.parent = this
  this.children.push(node)
  return node
}

Tree.prototype.remove = function (value) {
  if (this.children.length === 0 ) { return null }
  let saved = null
  for(var i = 0; i <= this.children.length; i++) {
    if (this.children[i].value === value) {
      saved = this.children.splice(i, 1)
      break
    }
  }
  return saved
}

Tree.prototype.contains = function (value) {
  let isContained = false
  this.traverseDF((node) => {
    if (node.value === value) {
      isContained = true
    }
  })
  return isContained
}

// Depth First
// Example
/*
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven

logs the following strings to the console
 
'five'
'six'
'two'
'three'
'seven'
'four'
'one'
*/

Tree.prototype.traverseDF = function (callback) {
  
  function traverse (node) {
    _.each(node.children, (child, idx) => {
      traverse(child)
    })
    callback(node)
  }

  traverse(this)
}

// Breadth First
/*
 one (depth: 0)
 ├── two (depth: 1)
 │   ├── five (depth: 2)
 │   └── six (depth: 2)
 ├── three (depth: 1)
 └── four (depth: 1)
     └── seven (depth: 2)

 logs the following strings to the console
'one'
'two'
'three'
'four'
'five'
'six'
'seven'
 */

Tree.prototype.traverseBF = function (callback) {

  function traverseChildren(node) {
    _.each(node.children, child => {
      store.push(child)
    })
    callback(currentNode)
    currentNode = store.shift()
  }

  let store = []
  store.push(this)
  currentNode = store.shift()

  while (currentNode) {
    traverseChildren(currentNode)
  }
}

let tree = new Tree(1)
tree.add(2)
tree.add(3)
tree.add(4)
tree.children[0].add(5)
tree.children[0].add(6)
tree.children[2].add(7)

console.log('This is The Tree', tree)