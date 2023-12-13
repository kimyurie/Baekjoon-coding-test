const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const a = Number(input[0]);
const stack = [];
const answer = [];

for(let i = 0; i < a; i++){
   const arr = input[i+1].split(' ');

   switch(arr[0]){
    case 'push':
        stack.push(Number(arr[1]));
        break;
    case 'top':
        answer.push(stack.length !== 0 ? stack[stack.length-1] : -1);
        break;
    case 'size':
        answer.push(stack.length);
        break;
    case 'empty':
        answer.push(stack.length == 0 ? 1 : 0);
        break;
    case 'pop':
        answer.push(stack.length !== 0 ? stack.pop() : -1);
        break;
    default:
        break;
   }
}

console.log(answer.join('\n'));