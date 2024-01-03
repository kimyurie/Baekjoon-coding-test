// 우체국
// https://www.acmicpc.net/problem/2141
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
let [M,...arr] = input
// 마을 번호 정렬되서 들어오도록
arr = arr.map(e=>e.split(" ").map(i=>+i)).sort((a,b)=>a[0]-b[0])
let people_sum = 0; 
const people_middle = arr.reduce((acc,cur,idx)=>{
     return acc+cur[1]
},0)/2
for (let i = 0; i < arr.length; i++) {
    const [num,people] = arr[i]
    people_sum += people
    // 우체국을 놓을 위치 = 인구수의 절반을 넘는 지점
    if (people_middle <= people_sum) {
        console.log(num)
        break;
    }
}
