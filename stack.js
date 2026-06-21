class Stack{
    constructor(){
        this.arr=[]
    }
    push(el){
        return this.arr.push(el)
    }
    pop(){
        if(this.arr.length==0){
            return "Satck is empty"
        }
        return this.arr.pop()
    }
    top(){
        if(this.arr.length ==0){
            return "Stack is empty"
        }
        return this.arr[this.arr.length-1]
    }
    isEmpty(){
        return this.arr.length ==0
    }
}
let s = new Stack()
let str ="(())"

function validPara(str){
        if(str.length%2 !==0){
            return false
        }
        for(let i =0;i<str.length;i++){
            if(str[i]=="("){
                s.push(str[i])
            } else{
                if(s.isEmpty()){
                    return false
                } else{
                    s.pop()
                }
            }
        }
        if(s.isEmpty())
        {
            return true
        }
        return false
}

let result = validPara(str)
if(result){
    console.log("valid Para");
} else{
    console.log("invalid Para");
}




















// class Stack{
//     constructor(){
//         this.array =[]
//     }
//     empty(){
//         return this.array.length ==0
//     }
//     pop(){
//         if(this.array.length == 0){
//             console.log("Array is empty");
//         } else{
//             return this.array.pop()
//         }
//     }
//     push(el){
//         this.array.push(el)
//         return this.array
//     }
//     top(){
//         if(this.array.length == 0){
//             return "Array is empty";
//         }
//         return this.array[this.array.length-1]
//     }
// }
// let data = new Stack()
// // console.log(data.empty());
// console.log(data.push(23));
// data.push(34)
// console.log(data);
// console.log(data.pop());
// console.log(data.top())

// //
// class Stack{
//     constructor(){
//         this.arr=[]
//     }
//     push(el){
//         return this.arr.push(el)
//     }
//     pop(){
//         if(this.arr.length==0){
//             return "Satck is empty"
//         }
//         return this.arr.pop()
//     }
//     top(){
//         if(this.arr.length ==0){
//             return "Stack is empty"
//         }
//         return this.arr[this.arr.length-1]
//     }
//     isEmpty(){
//         return this.arr.length ==0
//     }
// }
// let s = new Stack()
// let str =")[{)]}"

// function isValid(str){
// if(str.length%2 !=0){
//     return false
// }
// for(let i =0;i<str.length;i++){
//     if(str[i]=="(" || str[i] == "{" || str[i]=="["){
//         s.push(str[i])
//     } 
    
//     else{
//         if(s.isEmpty()){
//             return false
//         } else{
//             s.pop()
//         }
//     }
//     if(str[i] == "{"){
//         s.push(str[i])
//     } else {
//          if(s.isEmpty()){
//             return false
//         } else{
//             s.pop()
//         }
//     }
//     if(str[i] == "["){
//         s.push(str[i])
//     } else {
//          if(s.isEmpty()){
//             return false
//         } else{
//             s.pop()
//         }
//     }
// }
// if(s.isEmpty()){
//     return true
// }
// }
// let returnValue = isValid(str)
// if(returnValue){
//      console.log("valid parantheses")
// } else {
//      console.log("Invalid");
// }
//---------------------------------------------------------------------------
//is valid paranthesis ))((

// class Stack{
//     constructor(){
//         this.arr=[]
//     }
//     push(el){
//         return this.arr.push(el)
//     }
//     pop(){
//         if(this.arr.length==0){
//             return "Satck is empty"
//         }
//         return this.arr.pop()
//     }
//     top(){
//         if(this.arr.length ==0){
//             return "Stack is empty"
//         }
//         return this.arr[this.arr.length-1]
//     }
//     isEmpty(){
//         return this.arr.length ==0
//     }
// }
// let s = new Stack()
// let str ="))(("

// function isValid(str){
// if(str.length%2 !=0){
//     return false
// }
// for(let i =0;i<str.length;i++){
//     if(str[i]=="("){
//         s.push(str[i])
//     } else{
//         if(s.isEmpty()){
//             return false
//         } else{
//             s.pop()
//         }
//     }
// }
// if(s.isEmpty()){
//     return true
// }
// }
// let returnValue = isValid(str)
// if(returnValue){
//      console.log("valid parantheses")
// } else {
//      console.log("Invalid");
// }



//---------------------------------------------------------------------------------------

// class Stack{
//     constructor(){
//         this.arr = []
//     }
//     push(el){
//         this.arr.push(el)
//         return this.arr.length
//     }
//     pop(){
//         if(this.arr.length == 0){
//             return "stack is empty"
//         }
//         return this.arr.pop() 
//     }
//     isEmpty(){
//         return this.arr.length ==0
//     }
//     top(){
//         if(this.arr.length ==0){
//             return "stack is empty"
//         } 
//         return this.arr[this.arr.length-1] 
//     }
// }
// let s = new Stack()
// console.log(s);
// s.push(10)
// s.push(20)
// console.log(s.top())
// console.log(s.push(30))
// s.pop()
// s.pop()

// s.pop()
// s.pop()
// console.log(s);
// console.log(s.isEmpty());

//===============================================================================




// //- array implementation ----------------
// const stack_arr = new Array(5)

// let len = stack_arr.length
// let top = -1
// //--------------pushing--------------
// function push(data){
//     top++
//     if(top>len-1){
//         console.log(`cannot push the element ${data} on the stack`)
//         top-- 
//         return
//     }
//     stack_arr[top] = data
// }
// //------poping--------------------------
// function pop(){
//     if(top<0){
//         console.log("stack is empty")
//         return
//     } else{
//         let x= stack_arr[top]
//         top--
//         return x
//     }
// }
// //------------Top Element------------
// function topElement(){
//     if(top<0){
//         console.log("stack is empty")
//         return false
//     } else{
//         console.log(topElement()) 
//         return stack_arr[top]
//     }
// }
// //-----------check empty---------------
// function checkEmpty(){
//     if(top<0){
//         console.log("stack is empty")
//         return
//     }
// }
// //------------check full------------------
// function checkFull(){
//     if(top == len-1){
//         console.log("stack is full")
//         return
//     } else{
//         return false
//     }
// }
// push(10)
// push(20)
// push(30)
// push(40)
// push(50)
// // push(60)
// // pop()
// topElement()

// // checkEmpty()
// // checkFull()
// //=================display========================
// function display(){
//     for(let i=top;i>=0;i--){
//         console.log(stack_arr[i])
//     }
// }
// display()

//---------------------------------------------------------------------------------------------------------

// class stack{
//     constructor(data){
//         this.top = -1
//         this.size = data
//         this.arr = new Array(this.size)
//     }

//     push(data){
//         this.top++
//         if(this.top>this.size-1){
//             console.log("stack is full")
//             this.top--
//             return
//         }
//         this.arr[this.top] = data //ye line ka matlb
//     }

//     pop(data){
//         if(this.top<0){
//             console.log("stack is empty")
//             return
//         }
//         let x = this.arr[top]
//         this.top--
//         return x

//     }
// }