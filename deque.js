class Deque {
    constructor() {
        this.storage = [];
        this.front = 0;
        this.back = 0;
    }

    pushFront(x){
        if(this.storage[0]) { // 이미 원소가 존재한다면 
            for(let i = this.storage.length; i > 0; i--) {
                // 기존의 모든 원소를 오른쪽으로 한 칸씩 이동
                this.storage[i] = this.storage[i-1];
            }
        }
        // 새로운 원소를 맨 앞에 추가
        this.storage[this.front] = x;
        this.back += 1;
    }

    pushBack(x) {
        this.storage[this.back] = x;
        this.back += 1;
    }

    popFront() {
        // 덱이 비어있으면 null을 반환
        if(this.front >= this.back) {
            return null;
        }else {
            // 덱의 맨 앞에서 원소를 제거하고 반환
            const result = this.storage[this.front];
            this.front += 1;
            return result;
        }
    }

    popBack() {
        // 덱이 비어있으면 null을 반환
        if(this.front >= this.back) {
            return null;
        }else {
            // 덱의 맨 뒤에서 원소를 제거하고 반환
            this.back -= 1;
            const result = this.storage[this.back];
            return result;
        }
    }
}

let deque = new Deque();


deque.pushFront(1);
deque.pushFront(2);
console.log(deque.popFront());
deque.pushFront(3);
console.log(deque.popFront());
console.log(deque.popFront());
console.log(deque.popFront());
deque.pushBack(5);
console.log(deque.popBack());
console.log(deque.popBack());