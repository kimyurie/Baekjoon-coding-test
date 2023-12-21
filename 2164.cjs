// 카드2
// https://www.acmicpc.net/problem/2164
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));

class Queue {
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = [];
  }

  push(x) {
    this.storage[this.back] = x;
    this.back += 1;
  }

  popLeft() {
    if (this.front !== this.back) {
      const temp = this.storage[this.front];
      this.front += 1;
      return temp;
    }
  }
}

const queue = new Queue();
const n = Number(input[0]);

for (let i = 0; i < n; i++) {
  queue.push(Number(i+1));
}

// 큐에 한개 남을 때까지 반복
// queue.back - 1은 현재 큐의 맨 뒤에서 한 칸 앞의 위치를 나타내며 이 위치는 큐에서 가장 최근에 추가된 원소의 위치이다 
while (queue.front !== queue.back - 1) { // 한 개만 남아있다면 둘은 같아지게 되고 종료 
  // 제일 위에 있는 카드를 버림
  queue.popLeft();

  // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮김
  const temp = queue.popLeft();
  queue.push(temp);
}

// 마지막에 남은 카드 출력
console.log(queue.popLeft());
