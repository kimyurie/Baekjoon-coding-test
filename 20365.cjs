// 블로그2
// https://www.acmicpc.net/problem/20365
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));

let blueArr = input[1].split("R").filter((e) => e != ''); // ['BB', 'B', 'BB']
// filter 없으면  ['BB', 'B', 'BB', ''] 이렇게 결과 나옴
let redArr = input[1].split("B").filter((e) => e != ''); // ['R', 'R', 'R']

let result = 0;

if (blueArr.length === 1 && redArr.length === 1) {
    result = 2;
}

// 더 많이 칠해야 하는 컬러는 맨 처음에 전체적으로 딱 한번만 실행되게
// 더 적게 칠해야 하는 컬러는 하나씩 칠함 
if (blueArr.length > redArr.length) {
  result += redArr.length + 1;
} else {
  result += blueArr.length + 1;
}
console.log(result);
