class Node{
    constructor(data){
        this.data =data
        this.next = null
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

forthNode.next = head
head = forthNode
console.log(head)

    for(let i=head;i != null;i=i.next){
        console.log(i.data)
    }



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