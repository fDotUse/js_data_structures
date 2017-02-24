var Tree = function (value) {
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
      // 2) recurse on each child
      traverse(child)
    })
    // 3) call on current node (this is going to happen last)
    callback(node)
  }
  // 1) traverse node beeing called
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
    // push each child of the node to the store
    _.each(node.children, child => {
      store.push(child)
    })
    // call the callback on current node
    callback(currentNode)
    currentNode = store.shift() // set current node and remove it from the store
  }

  let store = []
  store.push(this) // push the current node to the store
  currentNode = store.shift() // current node is the first element of the array array is now empty but action is triggered on while
  // when store has shifted all the nodes currentNode is undefined
  while (currentNode) {
    traverseChildren(currentNode) // first node is called 
  }
}

// creating tree
  let tree = new Tree(1)
  tree.add(2)
  tree.add(3)
  tree.add(4)
  tree.children[0].add(5)
  tree.children[0].add(6)
  tree.children[2].add(7)
  // console.log('This is The Tree', tree)