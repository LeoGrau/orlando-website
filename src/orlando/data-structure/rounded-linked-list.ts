class Node<U> {
  next: Node<U> | null = null
  value: U
  constructor(value: U) {
    this.value = value
  }
}
class RoundedLinkedList<T> {
  head: Node<T> | null = null
  constructor() {}
  
  add(value: T) {
    const _add = (value: T, currentNode: Node<T> | null) => {
      if(currentNode!.next! == this.head) {
        currentNode!.next = new Node<T>(value)
        currentNode!.next.next = this.head
      } else {
        _add(value, currentNode!.next)
      }
    }
    
    if(!this.head) {
      this.head = new Node<T>(value)
      this.head.next = this.head
    }
    else 
      _add(value, this.head)
  }

  print() {
    var currentNode = this.head;
    // while()
  }
  
}

export default RoundedLinkedList;