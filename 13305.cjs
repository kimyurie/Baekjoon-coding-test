// 주유소
// https://www.acmicpc.net/problem/13305
const [n,a,b] = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
let km = a.split(' ').map(BigInt); // 입력받는 범위가 클 때 Number 대신 BigInt사용
let price = b.split(' ').map(BigInt);

let answer = 0n; // BigInt는 Number와 연산할 수 없음 => 같은 자료형으로 변환하기 위해 n을 붙인다.
let min = price[0];

//  더 작은 기름값이 있는 도시가 나올 때까지 현제 도시에서 기름을 채우도록 조건문을 건다.
for(let i = 0; i < n-1; i++) {
    if(price[i] <= min) {
        min = price[i];
    }
    answer += min * km[i];
}

console.log(String(answer)); // BigInt는 그냥 출력시 n이 붙어 출력되므로 String으로 변환해 출력해야 됨
