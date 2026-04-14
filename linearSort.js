

// function fibonacci(n){
//     if(n==0){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci(n-1)
// }
// console.log(fibonacci(10))
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
// let nums=[2,7,11,15]

// function twoSum(nums,target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(twoSum(nums,9))

// function twoSum(nums,target){
//     let map = new Map()
//     for(let i=0;i<nums.length;i++){
//         let c=target-nums[i]
//         if(map.has(c)){
//             return [map.get(c),i]
//         }
//         map.set(nums[i],i)
//     }
// }
// console.log(twoSum(nums,9))

// function countKDifference(nums, k) {
//     let count = 0;
//     let freq = new Map(); // khali register

//     for (let num of nums) {  // har number uthao

//         // kya koi aisa number aaya tha jiska
//         // is number se fark k ho? (num - k)
//         if (freq.has(num - k)) {
//             count += freq.get(num - k);
//             // .get() batata hai wo number kitni baar aaya tha
//         }

//         // dusri taraf bhi check karo (num + k)
//         if (freq.has(num + k)) {
//             count += freq.get(num + k);
//         }

//         // current number ko register mein likho
//         freq.set(num, (freq.get(num) || 0) + 1);
//         //             agar pehle se hai → +1
//         //             nahi hai → 0+1 = 1
//     }

//     return count;
// }
// console.log(countKDifference([1,2,2,1], 1))

// function goodPair(nums){
// let count =0
// let map = new Map()
// for(let num of nums){
//     if(map.has(num)){
//         count += map.get(num)
//     }
//     map.set(num,(map.get(num) || 0) +1)
// }
// return count
// }
// console.log(goodPair([1,1,2,3,2,1]))

// 

// function factorial(n) {
//         // code here
//         if(n==1){
//             return 1
//         }
//         return n* factorial(n-1)
            
//     }

//     console.log(factorial(5))

// function power1(base,power){
//     if(power==1){
//         return base
//     }
//     return base * power1(base,power-1)
// }
// console.log(power1(2,6))

// function power1(base,power){
//     if(power==1){
//         return base
//     }
//     let ans= power1(base,Math.floor(power/2))
//     if(power%2 !==0){
//         return base*ans*ans
//     } else{
//         return ans*ans
//     }
// }
// console.log(power1(2,7))

// function factorial(n){
//     if(n==0) return 1
//     return n* factorial(n-1)

// }
// console.log(factorial(5))

// function occ(str,char){
//     return str.split(char)
// }
// console.log(occ("banana","a"))

function remove(arr){
    return [...new Set(arr)]

}

console.log(remove([1,2,2,3,3,4]))