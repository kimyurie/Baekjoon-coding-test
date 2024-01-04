// 로프
// https://www.acmicpc.net/problem/2217

//여러개의 로프를 이용할 경우, 
// 가장 작은 무게를 들 수 있는 로프를 전체 사용하는 것이 최대

// 물건을 들 수 있는 경우의 수
// 15  : 15kg
// 15, 10 : 20kg  (각각 로프에 10씩 중량 걸림)
// 10 : 10kg
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const N = input.shift();
const rope = input.map(Number);

// input을 내림차순으로 정열하여 로프를 사용하는 모든 경우에 
// 대해 계산하고 그중 가장 큰 값을 찾아주면 된다.
rope.sort((a,b) => b -a); // 15 -> 10
const answer = [];

for(let i = 0; i < N; i++) {
    answer.push(rope[i] * (i+1)); // rope[0] * 1 = 15, rope[1] * 2 = 20
}

console.log(Math.max(...answer));