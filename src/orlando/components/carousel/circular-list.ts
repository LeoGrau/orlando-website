// Nodo Circular
class RoundedNode<T> {
  next: RoundedNode<T> | null = null;
  constructor(public value: T) {}
}

class RoundedList<T> {
  head: RoundedNode<T> | null = null

  add(value: T) {
    const _add = (value: T, currentNode: RoundedNode<T>) => {
      console.log("why", currentNode)
      if(currentNode.next === null) {
        currentNode.next = new RoundedNode<T>(value)
      } else {
        _add(value, currentNode.next!)
      }
    }

    if(!this.head)
      this.head = new RoundedNode<T>(value)
    else
      _add(value, this.head!)
  }
  push(value: T) {
    const _add = (value: T, currentNode: RoundedNode<T>) => {
      if(currentNode === null) {
        currentNode = new RoundedNode<T>(value)
        console.log('currentNode', currentNode)
      } else {
        _add(value, currentNode.next!)
      }
    }

    if(!this.head)
      this.head = new RoundedNode<T>(value)
    else
      _add(value, this.head!)
  }
}
 
export default RoundedList