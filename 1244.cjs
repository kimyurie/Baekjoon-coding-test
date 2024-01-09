// 스위치 켜고 끄기
// https://www.acmicpc.net/problem/1244
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const n = Number(input.shift());
const switches = input.shift().split(' ').map(Number);
input.shift();
const actions = input.map((e) => e.split(' ').map(Number));

function men(number, switches) {
    for (let i = 0; i < switches.length; i++) {
      // 현재 스위치의 위치가 주어진 번호의 배수일 때
      if ((i + 1) % number === 0) {
        // 스위치의 상태를 변경 (0을 1로, 1을 0으로)
        switches[i] = switches[i] === 0 ? 1 : 0; 
      }
    }
}

function women(number, switches) {
    // 대칭적으로 상태를 변경할 범위 계산
    const range = Math.max(number - 1, switches.length - number);

    // 주어진 번호의 스위치 상태를 변경
    switches[number - 1] = switches[number - 1] === 0 ? 1 : 0;

    // 대칭적으로 상태를 변경하는 작업
    for (let i = 1; i <= range; i++) {
        // 범위를 벗어나거나 대칭적인 상태가 아니면 반복 종료
        if (switches[number - 1 - i] !== switches[number - 1 + i]) break;

        // 대칭적으로 상태 변경
        switches[number - 1 - i] = switches[number - 1 - i] === 0 ? 1 : 0;
        switches[number - 1 + i] = switches[number - 1 + i] === 0 ? 1 : 0;
    }
}

actions.forEach(([type, number]) => {
    if (type === 1) men(number, switches);
    else if (type === 2) women(number, switches);
});

let result = [];

// 스위치 배열이 비어있을 때까지 반복
while (switches.length > 0) {
    // 스위치 배열에서 20개씩 뽑아내어 문자열로 변환
    result.push(switches.splice(0, 20).join(' '));
}

console.log(result.join('\n'));
