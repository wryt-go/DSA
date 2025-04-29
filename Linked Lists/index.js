class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

  }

  insertIntoFront(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertIntoEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  insertAtIndex(value, index) {

    const newNode = new Node(value);
 

    let currentNode = this.head
    let counter = 0

    for (let i = 1; i < index; i++) {
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next
    currentNode.next = newNode







  }
  deleteFromFront(){
     if(this.head == null){
      return ;
     }
     this.head = this.head.next
  }
  DeleteFromValue(k){
    let currentNode = this.head;
   
    while(currentNode.next != null){
      if(currentNode.next.value === k){
          currentNode.next = currentNode.next.next
        return
      }
       currentNode = currentNode.next
    }
     
    
  }
  getValues() {
    let currentNode = this.head;
    const values = [];

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
}


const list = new LinkedList();


list.insertIntoFront(3);
list.insertIntoFront(2);
list.insertIntoEnd(1);
list.insertIntoEnd(4);
list.insertAtIndex(5,2)
list.deleteFromFront()
list.DeleteFromValue(4)

console.log(list.getValues()); 