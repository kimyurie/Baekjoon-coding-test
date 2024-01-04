// 행복 유치원
// https://www.acmicpc.net/problem/13164
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
let [X,...arr] = input
let [N,K] = X.split(" ").map(e=>+e) // 5 3
arr = arr[0].split(" ").map(e=>+e) 
let diff = []

arr.forEach((e,idx)=>{
    if (idx != arr.length-1) {
        // 2 2 1 4 
        diff.push(arr[idx+1]-arr[idx])
    }
})

// 1 2 2 4
diff.sort((a,b)=>a-b)

while(K-1 > 0) { // 3개 조니까 2개 가림막 
    diff.pop() 
    K-=1
}

console.log(diff.reduce((acc,cur)=>acc+cur,0))

