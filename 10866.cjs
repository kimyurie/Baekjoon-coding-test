// 덱
// https://www.acmicpc.net/problem/10866
class Deque {
    constructor() {
        this.storage = [];
        this.front = 0;
        this.back = 0;
    }

    pushFront(x) {
        if(this.storage[0]) {
            for(let i = this.storage.length; i > 0; i--) {
                this.storage[i] = this.storage[i-1];
            }
        }
        this.storage[this.front] = x;
        this.back += 1;
    }

    pushBack(x) {
        this.storage[this.back] = x;
        this.back += 1;
    }

    popFront() {
        if(this.front >= this.back) {
            return null;
        }else{
            const result = this.storage[this.front];
            this.front += 1;
            return result;
        }
    }

    popBack() {
        if(this.front >= this.back) {
            return null;
        }else {
            this.back -= 1;
            const result = this.storage[this.back];
            return result;
        }
    }

    size() {
        return this.back - this.front;
    }
}

const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const N = Number(input[0]);
const answer = [];

let deque = new Deque();

for(let i = 0; i < N; i++) {
    const s = input[i+1].split(' ');

    switch(s[0]) {
        case 'push_back':
           deque.pushBack(Number(s[1]));
            break;
        case 'push_front':
            deque.pushFront(Number(s[1]));
            break;
        case 'front':
            answer.push(deque.size() > 0 ? deque.storage[deque.front] : -1)
            break;
        case 'back':
            answer.push(deque.size() > 0 ? deque.storage[deque.back - 1] : -1)
            break;
        case 'size':
            answer.push(deque.size());
            break;
        case 'pop_front':
            answer.push(deque.size() > 0 ? deque.popFront() : -1)
            break;
        case 'pop_back':
            answer.push(deque.size() > 0 ? deque.popBack() : -1)
            break;
        case 'empty':
            answer.push(deque.size() > 0 ? 0 : 1)
            break;
        default:
            break;
    }
}

console.log(answer.join('\n'));

