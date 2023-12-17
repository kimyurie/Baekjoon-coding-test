// 괄호의 값
// https://www.acmicpc.net/problem/2504
// ()  2
// []  3
// (x) 2 * x
// [x] 3 * x
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const n = input[0];
let stack = [];
answer = 0;
let temp = 1;

for (let i = 0; i < n.length; i++) {
  if (n[i] == "(") {
    stack.push("(");
    temp *= 2;
  } else if (n[i] == "[") {
    stack.push("[");
    temp *= 3;
  } else if (n[i] == ")") {
    if (stack.length == 0 || stack[stack.length - 1] == "[") {
      answer = 0;
      break;
    }
    if (n[i - 1] == "(") {
      answer += temp; // answer에 + 2*temp
    }
    stack.pop();
    temp = Math.floor(temp / 2); // ()로 나갔으니까 1로 초기화
  } else { // ']'가 먼저올때
    if (stack.length == 0 || stack[stack.length - 1] == "(") {
      answer = 0;
      break;
    }
    if (n[i - 1] == "[") {
      answer += temp; // answer에 + 3*temp
    }
    stack.pop();
    temp = Math.floor(temp / 3); // []로 나갔으니까 1로 초기화 
  }
}
console.log(stack.length > 0 ? 0 : answer)