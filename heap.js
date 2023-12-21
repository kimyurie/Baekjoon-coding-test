// 최소 힙 구현
// : 각 노드가 그 자식 노드보다 작거나 같은 값을 가지는 힙

// 부모노드의 인덱스 * 2 왼쪽 자식노드
// 부모노드의 인덱스 * 2 + 1 오른쪽 자식노드
class Heap {
  constructor() {
    this.heap = [null];
  }

  heapPush(value) {
    this.heap.push(value)
    let currentIndex = this.heap.length - 1 // 현재 추가된 값의 인덱스 
    let parentIndex = Math.floor(currentIndex / 2) // 부모 인덱스

    // 현재 노드가 루트 노드가 아니고, 
    // 부모 노드의 값이 현재 노드의 값보다 큰 동안 반복
    while(currentIndex > 1 && this.heap[parentIndex] > this.heap[currentIndex]) {
        [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex],this.heap[parentIndex]]
        currentIndex = parentIndex
        parentIndex = Math.floor(currentIndex / 2)
    }
  }
  
  heapPop() {
    // [null,2,4,3]
    // 1.제일 작은 값을 빼고
    // 2.부모 노드 위치에 그 다음 작은 값을 넣어줘야 된다 

    // 현재 힙의 루트 노드에 있는 가장 작은 값을 저장
    const min = this.heap[1] 

    //부모와 자식노드 둘 다 존재하지 않기에 2번 목적할 필요없다
    if( this.heap.length <= 2 ) this.heap = [null] 
    // 둘 다 존재하면  루트 노드를 힙의 마지막 노드로 대체하고, 마지막 노드는 제거
    else this.heap[1] = this.heap.pop();

    // 노드 재배치
    let parentIndex = 1
    let leftChildIndex = parentIndex * 2
    let rightChildIndex =parentIndex * 2 + 1

    // 1) 왼오른 둘 다 없을 때 2)왼만 있을 때 3)왼 오른 둘 다 있을 때
    if (!this.heap[leftChildIndex]) return min;
    if (!this.heap[rightChildIndex]) {
        if(this.heap[leftChildIndex] < this.heap[parentIndex]) {
            [this.heap[leftChildIndex],this.heap[parentIndex]] =[this.heap[parentIndex],this.heap[leftChildIndex]]     
        }
        return min;
    }
    while (this.heap[leftChildIndex] < this.heap[parentIndex] || this.heap[rightChildIndex] < this.heap[parentIndex]) {
      // 왼쪽과 오른쪽 자식 중 작은 값을 가진 자식의 인덱스를 찾는다
        const minIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? rightChildIndex : leftChildIndex;
        [this.heap[minIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[minIndex]]
        parentIndex = minIndex
        leftChildIndex = parentIndex * 2
        rightChildIndex = parentIndex * 2 + 1
    }
    return min
  }
}

const heap = new Heap()
heap.heapPush(3)
console.log(heap.heap)
heap.heapPush(5)
heap.heapPush(4)
console.log(heap.heap)
heap.heapPush(1)
console.log(heap.heap)
console.log(heap.heapPop())
console.log(heap.heap)
// 2
 
// 1 3 
// 4 5 6  7

// 부모노드

// 2 1 3 -> 왼쪽 녀석만 낮을 때
// 2 3 1 -> 오른쪽 녀석만 낮을 때
// 3 1 2 -> 자식 둘 다 부모보다 낮을 떄
// 1 3 2



//    1
//   2 3
//  3 2 


// 1~3 , 4~6, 2~4