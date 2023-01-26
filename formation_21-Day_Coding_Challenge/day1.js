
//   * You may assume the node class is:
class LLNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
        }
}
function printLLNode(head){
    while (head){
        console.log(head.value)
        head = head.next
    }
}
 

function deleteMiddleNode(head) {
    /* your code here */
    head.value = 8888
  }

const test = new LLNode(0);
let point = test;
for(let i=1;i<10;i++){
    point.next = new LLNode(i);
    point = point.next
}
console.log(test)
// print all nodes
printLLNode(test)
deleteMiddleNode(test)
printLLNode(test)