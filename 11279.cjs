// 최대 힙
// https://www.acmicpc.net/problem/11279

// 부모노드의 인덱스 * 2 왼쪽 자식노드
// 부모노드의 인덱스 * 2 + 1 오른쪽 자식노드
class Heap {
    constructor() {
      this.heap = [null];
    }
  
    heapPush(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor(currentIndex / 2);
  
      while(currentIndex > 1 && this.heap[parentIndex] < this.heap[currentIndex]){
        [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
      }
    }
  
    heapPop() {
      let max;
      if (this.heap.length == 1) {max = 0;}
      else if (this.heap.length == 2) {
        max = this.heap[1];
        this.heap = [null];
      }else {
        max = this.heap[1];
        this.heap[1] = this.heap.pop();
      }
  
      let parentIndex = 1;
      let leftChildIndex = parentIndex * 2;
      let rightChildIndex = parentIndex * 2 + 1;
  
      if(!this.heap[leftChildIndex]) return max;
      if(!this.heap[rightChildIndex]) {
        if(this.heap[leftChildIndex] > this.heap[parentIndex]) {
          [this.heap[leftChildIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[leftChildIndex]];
        }
        return max;
      }
      while(this.heap[leftChildIndex] > this.heap[parentIndex] || this.heap[rightChildIndex] > this.heap[parentIndex]) {
        const maxIndex = this.heap[leftChildIndex] < this.heap[rightChildIndex] ? rightChildIndex : leftChildIndex;
        [this.heap[maxIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[maxIndex]];
        parentIndex = maxIndex;
        leftChildIndex = parentIndex * 2;
        rightChildIndex = parentIndex * 2 + 1;
      }
      return max;
    }
  }
  
  const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));  
  const N = Number(input[0]);
  const heap = new Heap();
  const answer = [];
  
  for(let i = 1; i < N+1; i++) {
    if(input[i] == 0) answer.push(heap.heapPop());
    else heap.heapPush(Number(input[i]));
  }
  
  console.log(answer.join('\n'));
  
  