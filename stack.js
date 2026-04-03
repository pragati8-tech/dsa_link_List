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

class stack{
    constructor(data){
        this.top = -1
        this.size = data
        this.arr = new Array(this.size)
    }

    push(data){
        this.top++
        if(this.top>this.size-1){
            console.log("stack is full")
            this.top--
            return
        }
        this.arr[this.top] = data //ye line ka matlb
    }

    pop(data){
        if(this.top<0){
            console.log("stack is empty")
            return
        }
        let x = this.arr[top]
        this.top--
        return x

    }
}