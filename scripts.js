/*
This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.
*/

class singleNode {
  constructor(value=null,next=null) {
    this.value=value
    this.next=next
  }

  addChild(anotherNode) {
    this.next=anotherNode
    return this.next
  }

}

let root = new singleNode('0')
let node1 = new singleNode('1')
let node2 = new singleNode('2')
let node3 = new singleNode('3')
let node4 = new singleNode('4')
let node5 = new singleNode('5')
let node6 = new singleNode('6')
let node7 = new singleNode('7')
let node8 = new singleNode('8')
root.addChild(node1)
node1.addChild(node2)
node2.addChild(node3)
node3.addChild(node4)
node4.addChild(node5)
node5.addChild(node6)
node6.addChild(node7)
node7.addChild(node8)

console.log('Original LL')
console.log(root)

//See https://www.geeksforgeeks.org/reverse-a-linked-list/
const reverseNodes = (rootNode) => {
  let previous = null
  let current = rootNode
  let nextItem = null
  while (current != null){
    nextItem = current.next
    current.next = previous
    previous = current
    current = nextItem
  }
  let node = previous
  return node
}

console.log('Reversed LL')
console.log(reverseNodes(root))