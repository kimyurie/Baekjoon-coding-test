// 문자열 집합
// https://www.acmicpc.net/problem/14425
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e => e.replace("\r", ""));
const [N, M] = input.shift().split(' ').map(a => +a);

let strMap = new Map();
let count = 0;

for (let i = 0; i < N; i++) {
    strMap.set(input[i], true);
}

for (let i = N; i < N + M; i++) {
    if (strMap.has(input[i])) {
        count++;
    }
}

console.log(count);
