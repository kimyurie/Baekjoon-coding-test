// 잃어버린 괄호
// https://www.acmicpc.net/problem/1541
// -를 기준으로 나눈다
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const numbers = input[0].split("-").map((e) => // -를 기준으로 분리해서 분리한 문자열을 모두 탐색
        e.split("+").map(Number).reduce((acc, cur) => acc + cur, 0) // +를 기준으로 나눠서 모두 더해준다.
); // -를 기준으로 분리된 문자열의 갯수만큼 numbers 배열의 원소 개수가 된다.
// console.log(numbers); // [55, 90]
// console.log(numbers[0] * 2); // 110 

 // 첫번째 원소에서 나머지 모든 원소를 빼준다.
 // => 두 번째 이후의 모든 원소를 빼는 것이므로 numbers[0] * 2
let answer = numbers[0] * 2 - numbers.reduce((acc, cur) => acc + cur, 0);
// 110 - 145 = -35
console.log(answer);