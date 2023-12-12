// 괄호
// https://www.acmicpc.net/problem/9012
// 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다.
//  그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다.
//   한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 
//   만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨
//    새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 
// 여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 

const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const k = Number(input[0]);

for(let i = 0; i < k; i++) {
    // s배열에 각 괄호 집어넣기 ex) ['(', '('....]
    const s = input[i+1].split('');
    // s배열 요소를 집어넣을 stack 배열
    const stack = [];
    let isFinish = false;

    for(let x of s) {
        // 스택에 아무것도 없을 때
        if(stack.length === 0) { 
            // ')'을 넣을 차례라면 
            if(x === ')') {
                console.log('NO');
                isFinish = true; // 다음 반복으로 넘어가기 위해 필요!
                break; // 반복문 탈출
            }
            // '('을 넣을 차례라면 
            else stack.push(x);
        }
        // 스택에 괄호가 하나라도 있다면
        // 위에서 ')'이 오면 반복문 탈출이므로 
        // 괄호가 하나라도 있는 경우에서 괄호는 '('이다 
        else{
            if(x === ')'){
                stack.pop();
            }
            if(x === '('){
                stack.push(x);
            }
        }
    }
    if(isFinish) continue; // continue는 실행 중단하고 반복문 증감식으로 이동(탈출x)
    stack.length !== 0 ? console.log('NO') : console.log('YES');
}

