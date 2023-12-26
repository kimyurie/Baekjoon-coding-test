// 나는야 포켓몬 마스터
// https://www.acmicpc.net/problem/1620
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const [N, M] = input.shift().split(' ').map(a=>+a);

const NumToName = new Map(); // 포켓몬 번호 => 포켓몬 이름
const NameToNum = new Map(); // 포켓몬 이름 => 포켓몬 번호

for (let i = 0; i < N; i++) {
    NumToName.set(i+1, input[i]); // 1 => 'Bulbasqur' , 2 => 'Ivysaur', ... 26 => 'Raichu'
    NameToNum.set(input[i], i+1); // 'Bulbasaur' => 1, 'Ivysaur' => 2, ... 'Raichu' => 26
}

let answer = '';
//  N이후 그 다음 줄부터 총 M개의 줄에 내가 맞춰야하는 문제가 입력으로 들어온다 
for(let i=N; i<input.length; i++) {
    if(isNaN(input[i])) { // 입력요소가 숫자가 아니라면 (문자라면)
        answer += NameToNum.get(input[i]) + '\n';
    } else { // 숫자라면 
        answer += NumToName.get(+input[i]) +'\n'; 
    }
}
console.log(answer);
