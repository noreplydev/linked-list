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
    if (pos === 0) {
      this.prepend(node)
      return
    }

    let currNode = this.head 

    if (this.head === null) {
      throw new Error('The list is empty')
    }
    
    for(let i = 0; i < pos && currNode; i++) {
      currNode = currNode.next
    }

    if (currNode === null) {
      throw new Error('New node index out of bounds')
    }

    node.next = currNode.next 
    currNode.next = node
  }

  // Deletion methods
  delete(pos) {
    if (this.head === null) {
      throw new Error('The list is empty')
    }

    if (pos = 0) {
      this.head = this.head.next
      return 
    } 

    let currNode = this.head

    for(let i = 0; i < pos && currNode; i++) {
      currNode = currNode.next
    }

    if (currNode === null) {
      throw new Error('Node index out of bounds')
    }

    currNode.next = currNode.next.next
  }

  // 


}
