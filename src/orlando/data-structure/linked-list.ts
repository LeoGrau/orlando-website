// Nodo Circular
class LinkedListNode<T> {
  next: LinkedListNode<T> | null = null;
  constructor(public value: T) {}
}

class LinkedList<T> {
  head: LinkedListNode<T> | null = null

  add(value: T) {
    const _add = (value: T, currentNode: LinkedListNode<T>) => {
      if(currentNode.next === null) {
        currentNode.next = new LinkedListNode<T>(value)
      } else {
        _add(value, currentNode.next!)
      }
    }

    if(!this.head)
      this.head = new LinkedListNode<T>(value)
    else
      _add(value, this.head!)
  }
  push(value: T) {
    const _add = (value: T, currentNode: LinkedListNode<T>) => {
      if(currentNode === null) {
        currentNode = new LinkedListNode<T>(value)
        console.log('currentNode', currentNode)
      } else {
        _add(value, currentNode.next!)
      }
    }

    if(!this.head)
      this.head = new LinkedListNode<T>(value)
    else
      _add(value, this.head!)
  }
}
 
export default LinkedList