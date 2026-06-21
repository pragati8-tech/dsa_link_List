//tribonacci

function fibonacci(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-1)
}
console.log(fibonacci(10))
// $ node Fi-bo-na-c-ci.js 
// 512

// function factorial(n){
//     if(n==1|| n==0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5)) 





// function powerr(base,power){
//     if(power==1){
//         return 1
//     }
// let ans = powerr(base, Math.floor(power/2))
// if(!power%2 ===0){
//     return base * ans * ans
// } else{
//     return ans * ans
// }
// }
// console.log(powerr(2,10))

// // $ node power.js
// // 128



// function pow(base,power){
//     if(power==1){
//         return base
//     }
//     return base*pow(base,power-1)
// }
// const result = pow(2,10)

// console.log(result);