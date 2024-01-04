// 알바생 강호
// 주려했던 돈 - (등수-1) 단, 음수 제외
// https://www.acmicpc.net/problem/1758
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const N = input.shift();
let answer = 0;
// 내림차순 정렬
input.sort((a, b) => b - a); 

for(let i = 0; i < N; i++) {
    const num = input[i] - ((i+1) - 1);
    if(num > 0) answer += num;
    else if(num <= 0) break;
}

console.log(answer);

