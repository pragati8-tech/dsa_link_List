<<<<<<< HEAD
// class Node{
//     constructor(data){
//         this.data =data
//         this.next = null
//     }
// }
// let head = new Node(10)
// let firstNode = new Node(20)
// let secondNode = new Node(30)
// let thirdNode = new Node(40)
// let forthNode = new Node(50)
// head.next = firstNode
// firstNode.next = secondNode
// secondNode.next = thirdNode

// forthNode.next = head
// head = forthNode
// console.log(head)

=======
//length of linkList

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = new Node(10)
let firstNode = new Node(20)
let secondNode = new Node(30)
let thirdNode = new Node(40)
let forthNode = new Node(50)
head.next = firstNode
firstNode.next = secondNode
secondNode.next = thirdNode
thirdNode.next = forthNode
let count=0
function getCount(head){
    for(let i=head;i != null; i=i.next){
count++
}
return count
}
console.log(getCount(head))




// class Node{
//     constructor(data){
//         this.data =data
//         this.next = null
//     }
// }
// let head = new Node(10)
// let firstNode = new Node(20)
// let secondNode = new Node(30)
// let thirdNode = new Node(40)
// let forthNode = new Node(50)
// head.next = firstNode
// firstNode.next = secondNode
// secondNode.next = thirdNode

// forthNode.next = head
// head = forthNode
// console.log(head)

>>>>>>> e179738641b4289b346ead5a868abfefe7645a26
//     for(let i=head;i != null;i=i.next){
//         console.log(i.data)
//     }



//------------ Traverse the element--------------------
// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

// head.next=firstNode
// firstNode.next=secondNode
// function traversal(data){
//     let current = head

//     while(current !== null){
//         console.log(current.data)
//         current = current.next
//     }

// }
// traversal(head)

//-------------------------------------------searching the element------------------

// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)
// let thirdNode = new Node(4)
// let forthNode = new Node(5)


//  head.next=firstNode
// firstNode.next=secondNode
// secondNode.next=thirdNode
// thirdNode.next=forthNode

// function searching(head,key){
//     let curr = head
//     while(curr !==null){
//         if(curr.data == key){
//             return true
//         }
//         curr = curr.next
//     }
//     return false
// }

// const result = searching(head,4)

// result===true? console.log("result is ",result):console.log('result is ',result)

//-------------- inserting element in begaining-----------------------------------------

// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

//  head.next=firstNode
// firstNode.next=secondNode

// function insertingAtBegaining(head,key){
//     let newNode = new Node(key)
//         newNode.next = head
//         head = newNode
//     return head
// }
// head =insertingAtBegaining(head,0)

// function display(head){
//     let curr = head

//     while(curr !==null){
//         console.log(curr.data)
//         curr=curr.next
//     }
// }
// display(head)


//=================== inserting element at the specific point of node ================================


// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

//  head.next=firstNode
// firstNode.next=secondNode

// function atSpecificPoint(prevEle,key){
//     let newnode = new Node(key)
//     newnode.next = prevEle.next
//     prevEle.next = newnode
// }
// atSpecificPoint(firstNode,7)

// function display(head){
//     let curr = head
//     while(curr !==null){
//         console.log(curr.data)
//         curr = curr.next
//     }
// }
// display(head)

//------------------add the element in end------------------------

// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

//  head.next=firstNode
// firstNode.next=secondNode

// function atTheEnd(key){
//     let curr = head
//     let newNode = new Node(key)
//     while(curr.next !==null){
//         curr = curr.next
//     }
//     curr.next = newNode

// }
// atTheEnd(90)
// function display(head){
//     let curr = head
//     while(curr !==null){
//         console.log(curr.data)
//         curr  = curr.next
//     }
// }
// display(head)

//------------deleting the first element-------------------

// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

//  head.next=firstNode
// firstNode.next=secondNode

// function deletingFirstEle(){
//     let temp = head
//     head = head.next
//     temp = null
// }
// deletingFirstEle()

// function display(head){
//     let curr =head
//     while(curr !==null){
//         console.log(curr.data)
//         curr = curr.next
//     }
// }
// display(head)


//-----------deleting the last element------------------

// class Node{
//     constructor(data){
//         this.data =data
//         this.next=null
//     }
// }
// let head = new Node(1)
// let firstNode = new Node(2)
// let secondNode = new Node(3)

//  head.next=firstNode
// firstNode.next=secondNode

// function deletingLast(){
//     if(head ==null){
//         console.log("list is empty")
//         return
//     }
//     if(head.next ==null){
//         return
//     } 
//     let curr = head
//     while(curr.next.next !=null){
//         curr=curr.next 
//     }
//     let end = curr.next 
//     curr.next = null  
//     end = null  
// }
// deletingLast()
// function display(head){
//     let curr = head
//     while(curr !==null){
//         console.log(curr.data)
//         curr = curr.next
//     }
// }
// display(head)

//---------doublyLinkList----------------------------(doubt)

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.prev = null
//     }
// }
// var head
// function doubly(data){
//     let newNode = new Node(data)
//     if(head==null){
//         head = newNode
//         return
//     }
//     newNode.next = head 
//     head.prev = newNode 
//     head = newNode 
// }
// doubly(1)
// doubly(2)

// function display(head){
//     let curr =head
//     while(curr !==null){
//         console.log(curr.data)
//         curr = curr.next
//     }
// }
// display(head)

//-------------finding middle element---------------------

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// function push(data){
//     //make a new node
//     let newNode = new Node(data)
//     newNode.next = head
//     head = newNode
// }
// let head = null

// function findingMiddle(){
    // initialize counter

    // initialize mid to head

    // looping head.next !== null
// }


// ----------Linklist.basic2.png-------------------------------
// class Node{
//     constructor(data){
//         this.data = data,
//         this.next = null
//     }
// }

// let node1 = new Node(10)
// let node2 = new Node(20)
// let node3 = new Node(30)
// let node4 = new Node(40)


// node1.next = node2
// node2.next = node3
// node3.next = node4

// let i = node1 //(we directly no use the node1 directly because reference is gone) that means node1 ka reference i ko de diya
// let count =0 //(to count the length of the node)
// while(i !=null){
//     console.log(i.data);
//     count++
//     i = i.next
// }

// console.log(count);
// console.log(node1);
// // console.log(node2);
// // console.log(node3);
// // console.log(node4);


class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(40)
let node5 = new Node(50)

node1.next = node2
node2.next = node3
node3.next = node4
node5.next = node1
node1 = node5
let i = node1 
let count =0
while(i !=null){
    console.log(i.data);
    count++
    i = i.next
}

console.log(count);
console.log(node5);















// =====================================Question=========================
//length of link list (gfg)
// insertion at begining(gfg)
// link list end insertion (gfg)
// search in link list(gfg)
// insertion at last
//Q. Reverse the linkedlist leetcode









