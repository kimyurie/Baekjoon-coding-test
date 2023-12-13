// 요세푸스 문제
// https://www.acmicpc.net/problem/1158
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const [n,k] = input[0].split(' ');

const queue = [];
const answer = [];

for (let i = 0; i < n; i++){
    queue.push(i+1);
}

let count = 1;
// queue 길이 0이 될 때까지 while문 통해 맨 앞자리 하나빼줌(shift 이용)
while (queue.length) {
    const shiftItem = queue.shift();
    // 만약 k번째라면 answer에 push
    if (count % k === 0) {
        answer.push(shiftItem); // 3
    // 아니면 큐에 다시 push
    }else {
        queue.push(shiftItem); // 1,2
    }
    count += 1;
}

console.log(`<${answer.join(', ')}>`);