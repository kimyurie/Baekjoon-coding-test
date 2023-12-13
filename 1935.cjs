// 후위 표기식2
// https://www.acmicpc.net/problem/1935
const [a, b, ...c] = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
// 입력 세번째 줄부터 c

const stack = [];
// 각 알파벳에 숫자(c)를 바인딩하여 객체({A:1})로 저장
const obj = {};
let start = 65;
for(let x of c){
    // String.fromCharCode(65, 66, 67); // "ABC"
    obj[String.fromCharCode(start++)] = +x; // {A:1}
}

// stack에서 pop한수 1, pop한 수 2를 꺼내
// 해당 연산자로 연산한 뒤 다시 스택에 푸쉬
const createOperation = (e) => {
    const y = stack.pop();
    const x = stack.pop();
    if(e === '+') stack.push(x + y);
    if(e === '-') stack.push(x-y);
    if(e === '*') stack.push(x * y);
    if(e === '/') stack.push(x/y);
}

// 입력 두번째 줄 순회하는데
for (let x of b) {
    // 각 요소가 연산자면 createOperation 함수로 이동
    if(x === '+' || x === '-' || x === '*' || x === '/') createOperation(x);
    // 각 요소가 알파벳이면 stack에 push
    else stack.push(obj[x]);
}

console.log(stack[0].toFixed(2));
