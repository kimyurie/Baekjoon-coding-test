// 프린터 큐
// https://www.acmicpc.net/problem/1966
const input = require("fs").readFileSync("예제.txt").toString().trim().split("\n").map((e) => e.replace("\r", ""));

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }
  push(x) {
    this.storage[this.back] = x;
    this.back += 1;
  }
  popleft() {
    const temp = this.storage[this.front];
    this.front += 1;
    return temp;
  }
}

const answer = [];
const T = input[0]; //테스트케이스 개수
let i = 0;

for (let j = 0; j < T; j++) {
  const [N, M] = input[i + 1].split(" "); // 테스트 케이스 첫번째 줄 
  const doc = input[i + 2].split(" "); // 테스트 케이스 두번째 줄
  const queue = new Queue();

  let count = 1; // 문서가 몇번째로 인쇄되었는지 (답으로 출력될 부분)
  const testArr = [];
  let n = 0; // 테스트 케이스 두번째줄 중요도 별 인덱스
  for (x of doc) {
    queue.push([x, n++]); // {[1,0],[1,1]..}
    testArr.push(x); // [1,1,9,1,1,1]
  }
  testArr.sort((a, b) => a - b); // [1,1,1,1,1,9]

  while (testArr.length > 0) {
    let isBreak = false;
    // 중요도 높은순
    const ta = testArr.pop(); 
    while (true) {
      // 가장 앞에 있는 문서부터 중요도 확인
      const qp = queue.popleft(); // [1,0]      
      //오름차순으로 정렬된 testArr의 첫번째 요소와 
      // 테스트 케이스 두번째 줄의 첫번째 요소 중요도가 같지 않으면 
      if (ta != qp[0]) { 
        queue.push(qp); // 큐의 가장 뒤에 재배치
      } else { 
        // 테스트 케이스 두번째 줄에서 각 중요도의 인덱스와 
        // 테스트 케이스 첫번째 줄에서 몇번째로 놓여있는지 궁금한 문서의 위치(M)이 같다면
        if (qp[1] == M) { 
          answer.push(count); // 그 문서가 몇번째로 출력되는 지 answer에 추가
          isBreak = true;
        }
        count += 1;
        break;
      }
    }
    if (isBreak == true) {
      break;
    }
  }
  i += 2; 
}
console.log(answer.join("\n"));
