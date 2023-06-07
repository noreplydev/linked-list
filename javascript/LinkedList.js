// ./LinkedList.js

export class LinkedList {
  constructor() {
    this.head = null
  }

  // Insertion methods
  append(node) {
    let currNode = this.head

    while ( currNode.next !== null ) { 
      currNode = currNode.next  
    }

    currNode.next = node
  }  

  prepend(node) {
    node.next = this.head
    this.head = node
  }

  insertAt(node, pos) {
    let currNode = this.head 

    for(let i = 0; i < pos && currNode; i++) {
      currNode = currNode.next
    }

    if (currNode === null) {
      throw new Error('New node index out of bounds')
    }

    node.next = currNode.next 
    currNode.next = node
  }
}
