// [자료구조] 10828번 스택
// https://www.acmicpc.net/problem/10828
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const k = Number(input[0]);
const stack = [];
const answer = [];

for(let i = 0; i < k; i++){
    const s = input[i+1].split(' ');

    switch(s[0]) {
        case 'push':
            stack.push(Number(s[1]));
            break;
        case 'top':
            answer.push(stack.length !== 0 ? stack[stack.length-1] : -1);
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case 'pop':
            answer.push(stack.length !== 0 ? stack.pop() : -1);
            break;
        default:
            break;
    }
}

console.log(answer.join('\n'));