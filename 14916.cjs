const input = require("fs").readFileSync("예제.txt").toString().trim().split("\n").map((e) => e.replace("\r", ""));
let n = input[0]; // 13원
const FIVE = 5;
const SECOND = 2;
// 5원의 개수
let FIVE_DIVIDE = Math.floor(n / FIVE);
// 2원의 개수
let SECOND_DIVIDE = Math.floor(n / SECOND);

while(FIVE_DIVIDE >= 0) {
    let temp = n;
    n -= FIVE_DIVIDE * FIVE;
    SECOND_DIVIDE = Math.floor(n / SECOND);
    n = n % SECOND;
    if(n == 0) break;
    FIVE_DIVIDE--;
    n = temp;
}

if(FIVE_DIVIDE < 0) console.log(-1);
else console.log(FIVE_DIVIDE + SECOND_DIVIDE);



