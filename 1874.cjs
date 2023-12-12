// 스택 수열
// https://www.acmicpc.net/problem/1874
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const n = input[0];
let i = 1;
let c = 0;
const stack = [];
let arr = [];

while(i <= n){
    while(c < input[i]){
        c++;
        arr.push('+');
        stack.push(c);
    }
    if(stack[stack.length-1] == input[i]){
        stack.pop();
        arr.push('-');
    }
    i++;
}

if(stack.length > 0){
    console.log('NO');
    return;
}

console.log(arr.join('\n'));