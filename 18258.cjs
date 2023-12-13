// [자료구조] 18258번 큐2
// https://www.acmicpc.net/problem/18258
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const a = input[0];
const que = [];
let front = 0;
let back = 0;
const answer = [];

for(let i = 0; i < a; i++){
    const arr = input[i+1].split(' ');
    
    switch(arr[0]){
        case 'push':
            que[back++] = Number(arr[1]);
            break;
        case 'pop':
            answer.push(front !== back ? que[front++] : -1);
            break;
        case 'size':
            answer.push(back - front);
            break;
        case 'empty':
            answer.push(front == back ? 1 : 0);
            break;
        case 'front':
            answer.push(front !== back ? que[front] : -1);
            break;
        case 'back':
            answer.push(front !== back ? que[back - 1] : -1);
            break;
        default:
            break;
    }
}

console.log(answer.join('\n'));