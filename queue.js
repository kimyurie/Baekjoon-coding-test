//클래스 선언
class Queue {
    constructor() {
      this.front = 0;
      this.back = 0;
      this.storage = {};
    }
  
    push(x) {
      this.storage[this.back] = x;
      this.back += 1;
    }
  
    popLeft() {
      if (this.front != this.back) {
        // front가 백보다 작을 떄
        const temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
        return temp;
      }
    }
  
    size() {
      if (this.front == this.back) return 0;
      return this.back - this.front;
    }
  }
  //
  //인스턴스(클래스에 종속된 객체) 호출
  const queue = new Queue();
  console.log(queue);
  queue.push(3);
  console.log(queue);
  console.log(queue.popLeft());
  console.log(queue);
  queue.push(2);
  console.log(queue);