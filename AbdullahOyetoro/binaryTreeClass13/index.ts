class tNode<T>{
  data: T;
  left:tNode<T>|null;
  right:tNode<T>|null;
  constructor(val:T){
    this.data = val
    this.left = null
    this.right = null
  }
}

class BinaryT<T>{
  root:tNode<T> | null;
  constructor(){
    this.root =null;
  }insert(val:T){
    const newNode = new tNode(val);
    if (!this.root){
      this.root = newNode;
      // console.log("Pushed root value to queue")
      return;
    }
    let queue:tNode<T>[]=[];
    // console.log(queue)
    queue.push(this.root);
   
    // console.log("start")
    // console.log(queue)
    while (queue.length >0){
      let currentNode =queue.shift();
      if(currentNode!.left === null){
        // console.log("left")
        currentNode!.left = newNode
        return;
      }
      else if(currentNode!.right === null){
       // console.log("left filled, right")
        currentNode!.right = newNode
        return;
      }
      else{
        // console.log("both filled, new root",queue)
        queue.push(currentNode!.left);
        queue.push(currentNode!.right);
      }
      // console.log("Next iteration queue",queue)
    }
  }
 
  traversalLO(){
    if(!this.root){
      return
    }
    let travArray:T[]= [];

    let queue:tNode<T>[]= [];
    queue.push(this.root)
    while(queue.length>0){
      let currentNode = queue.shift()
      travArray.push(currentNode!.data)
      if(currentNode!.left !== null){
        queue.push(currentNode!.left)
      }
      if(currentNode!.right !== null){
        queue.push(currentNode!.right)
      }
    }
    return travArray
  }
  traversalDFSI(){
    if (!this.root){
      return
    }

    let travArray :T[] = [];
    let stack  :tNode<T>[] = [];
    let currentNode:tNode<T>|null = this.root ;

    while (stack.length > 0 || currentNode !== null) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
     
      currentNode = stack.pop()!;
      travArray.push(currentNode.data);
      currentNode = currentNode.right;
    }
    return travArray
  }
  traversalDFSP(){
    if(!this.root)return [];
    let stack :T[] = [];
    let traversalArray: T[] = []


  }
}
const bt5 = new BinaryT()
bt5.insert(1)
bt5.insert(2)  
bt5.insert(3)

bt5.insert(4)
bt5.insert(5)
bt5.insert(6)
bt5.insert(7)
bt5.insert(8)
bt5.insert(9)
bt5.insert(10)
bt5.insert(11)
bt5.insert(12)
bt5.insert(13)
bt5.insert(14)
bt5.insert(15)
bt5.insert(16)
// bt5.insert(17)
console.log(bt5.traversalLO())
console.log(bt5.traversalDFSI())



/**BINARY TREE
 * QUEUE GETS THE ROOT
 * CHECKS IF THE LEFT IS FILLED IF YES
 * MOVE TO RIGHT
 * IF NO PUT IN LEFT
 * IF BOTH*/

// Oyetoro Abdullah Iyonuoluwa
//Oyehabdullhigh@Gmail.com