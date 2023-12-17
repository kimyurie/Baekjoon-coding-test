// [자료구조] 18258번 큐2
// https://www.acmicpc.net/problem/18258
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
// 방법1)
// const a = input[0];
// const que = [];
// let front = 0;
// let back = 0;
// const answer = [];

// for(let i = 0; i < a; i++){
//     const arr = input[i+1].split(' ');
    
//     switch(arr[0]){
//         case 'push':
//             que[back++] = Number(arr[1]);
//             break;
//         case 'pop':
//             answer.push(front !== back ? que[front++] : -1);
//             break;
//         case 'size':
//             answer.push(back - front);
//             break;
//         case 'empty':
//             answer.push(front == back ? 1 : 0);
//             break;
//         case 'front':
//             answer.push(front !== back ? que[front] : -1);
//             break;
//         case 'back':
//             answer.push(front !== back ? que[back - 1] : -1);
//             break;
//         default:
//             break;
//     }
// }

// console.log(answer.join('\n'));

// 방법2 클래스 이용)
const answer = [];

class Queue {
    constructor(){
        this.front = 0;
        this.back = 0;
        this.storage = [];
    }    

    push(x) {
        this.storage.push(x);
        this.back += 1;
    }

    popLeft(){
        if(this.front !== this.back) {
            const temp = this.storage[this.front];
            this.front+= 1;
            answer.push(temp);
        }else{
            answer.push(-1);
        }
    }

    size() {
        answer.push(this.back - this.front);
    }

    printFront() {
        answer.push(this.front !== this.back ? this.storage[this.front] : -1);
    }

    printBack() {
        answer.push(this.front !== this.back ? this.storage[this.back-1] : -1);
    }

    empty() {
        answer.push(this.front == this.back ? 1 : 0);
    }

    
}

const queue = new Queue();
const n = Number(input[0]);

for (let i = 0; i < n; i++) {
    const s = input[i+1].split(' ');

    switch(s[0]){
        case 'push':
            queue.push(Number(s[1]));
            break;
        case 'pop':
            queue.popLeft();
            break;
        case 'size':
            queue.size();
            break;
        case 'empty':
            queue.empty();
            break;
        case 'front':
            queue.printFront();
            break;
        case 'back':
            queue.printBack();
            break;
        default:
            break;
    }
}

console.log(answer.join('\n'));
