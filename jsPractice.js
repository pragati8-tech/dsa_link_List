// class demo{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         console.log(`my name is ${this.name} age: ${this.age}`)
//     }
// }
// const output = new demo("sara",23)
// output.greet()

//What is object destructuring?

// const obj={
//     name1:"chhaya",
//     age:23
// }
// const {name1,age} = obj
// console.log(name1)

// const {name1:data} = obj
// console.log(data)

// What are array methods like map(), filter(), and reduce() used for

// function display(arr){
// let result = arr.map((num)=>num*2)
// console.log(result)
// }
// console.log(display([1,2,3,4,5,6,7,8,9,10]))
// function display1(arr){
// let result = arr.filter((num)=>num%2===0)
// console.log(result)
// }
// console.log(display1([1,2,3,4,5,6,7,8,9,10]))
// function display2(arr){
// let result = arr.reduce((initial,curr)=>initial+curr,0)
// console.log(result)
// }
// console.log(display2([1,2,3,4,5,6,7,8,9,10]))

//The spread operator (...) expands elements of an array or object into individual elements.

// let arr =[1,2,3]
// let obj = {
//     name1:"sara",
//     age:23
// }
// console.log(arr)
// console.log(...arr)
// console.log(obj)
// let data = {...obj}
// console.log(data)

//How do you remove duplicates from an array?

// let arr =[1,2,3,3,4,4]

// let output = new Set(arr)
// console.log(output)

//. Explain closures with an example.

// function outer(){
//     let name1 ="shital"
//     function inner(){
//         console.log(name1)
//     }
//     return inner
// }

// const result =outer()
// result()

//IIFE
// (function display(){
// console.log("hello")
// })()

//max SubArray

// function maxSubArray(arr){
// let currentMax=arr[0]
// let finalMax = arr[0]
// for(let i=1;i<arr.length;i++){
//     currentMax=Math.max(arr[i], currentMax+arr[i])
//     finalMax=Math.max(currentMax,finalMax)
// }
// return finalMax
// }
// console.log(maxSubArray([1,-2,-2,3,4,5]))

function binarySearch(arr,target){
let left =0
let right =arr.length-1
while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    } else if(arr[mid]>target){
        right=mid-1
    } else{
        left=mid+1
    }
}
return -1
}
console.log(binarySearch([-1,2,4,56,78],77))