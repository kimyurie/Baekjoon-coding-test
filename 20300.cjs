// 서강근육맨
// https://www.acmicpc.net/problem/20300
let [n, ...loss] = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
loss = loss[0].split(' ').map(i => BigInt(i));

let answer = 0;
// BigInt는 sort안에서 빼기, 더하기 연산이 되지 않으므로 둘의 대소 비교해 정렬
// 오름차순 1 2 3 4 5 
loss.sort((a, b) => a < b ? -1 : 1);

if(loss.length % 2 === 1) { // 배열이 홀수일 때 
    answer = loss.pop(); // 제일 큰 근손실량 
    n -= 1;
}

for(let i = 0; i < n/2; i++) { // 0 1
    const sum = loss[i] + loss[loss.length - 1 - i]; 
    answer = sum > answer ? sum : answer; 
}

console.log(String(answer));



