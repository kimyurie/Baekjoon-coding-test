// 동전
// https://www.acmicpc.net/problem/11047

const [n, ...arr] = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
let price = parseInt(n.split(' ').pop());
// 1. 동전의 금액에 대해 내림차순으로 정렬
arr.sort((a, b) => b - a);

// 2. 배열을 순회하며 price보다 큰 동전들은 continue로 넘겨주고,
//  작은 값들이 나오면 최대 개수만큼 빼준다.
let count = 0; // 동전의 개수

for(let i = 0; i < arr.length; i++) {
    if(price < arr[i]) {
        continue;
    }else {
        const value = Math.floor(price / arr[i]);
        price -= value * arr[i];
        count += value;

        if(price === 0) {
            break;
        }
    }
}

console.log(count);