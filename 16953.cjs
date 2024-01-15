// A -> B
// https://www.acmicpc.net/problem/16953
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e => e.replace("\r", ""));
let [A, B] = input[0].split(' ');
let result = 0;

while (true) {
    if (A === B) {
        break;
    } else if (Number(B) < Number(A)) {
        return console.log(-1);
    }

    if (B % 2 === 0) {
        B = String(B / 2);
    } else if (B % 2 === 1) {
        // 마지막 자리 1이면
        if (B[B.length - 1] === '1') {
           B = B.slice(0, B.length - 1);
        // 마지막 자리 1 아니면 
        } else {
            return console.log(-1);
        }
    }
    result++;
}

console.log(result + 1);