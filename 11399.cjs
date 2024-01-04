// ATM
// https://www.acmicpc.net/problem/11399
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
// 걸리는 시간이 적은 순서대로 배열을 sort한 다음에
//  i 역순으로 횟수가 더해지므로 거꾸로 곱한다 
let N = input[0]; // 5
// 오름차순 정렬 // 1 2 3 4 5
let arr = input[1].split(' ').map(Number).sort((a,b) => a - b);
let answer = 0;

for(let i = 0; i < N; i++) {
    answer += arr[i] * (N-i); // 1 * 5 + 2 * 4 + 3 * 3 + 4 * 2 + 5 * 1 
};

console.log(answer);
