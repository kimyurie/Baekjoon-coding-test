// 빙고
// https://www.acmicpc.net/problem/2578
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
let board = [];
let visited = Array.from({length:5}, () => Array(5).fill(0));
// [
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ]
//   ]
let nums = [];

for(let i = 0; i < 5; i++) { // 빙고판
    board.push(input[i].trim().split(' ').map(Number));
}
// [
//     [ 11, 12, 2, 24, 10 ],
//     [ 16, 1, 13, 3, 25 ],
//     [ 6, 20, 5, 21, 17 ],
//     [ 19, 4, 8, 14, 9 ],
//     [ 22, 15, 7, 23, 18 ]
//   ]

for(let i = 0; i < 10; i++) { // 부르는 숫자
    nums.push(input[i].trim().split(' ').map(Number));
}
// [
//     [ 11, 12, 2, 24, 10 ],
//     [ 16, 1, 13, 3, 25 ],
//     [ 6, 20, 5, 21, 17 ],
//     [ 19, 4, 8, 14, 9 ],
//     [ 22, 15, 7, 23, 18 ],
//     [ 5, 10, 7, 16, 2 ],
//     [ 4, 22, 8, 17, 13 ],
//     [ 3, 18, 1, 6, 25 ],
//     [ 12, 19, 23, 14, 21 ],
//     [ 11, 24, 9, 20, 15 ]
//   ]

// 대각선 빙고 있는지 확인
const isCross = visited => {
    let cnt = 0;
    if ( // 왼쪽 대각선
    visited[0][0] &&
    visited[1][1] &&
    visited[2][2] &&
    visited[3][3] &&
    visited[4][4] 
    ) {
        cnt++;
    }
    if( // 오른쪽 대각선
        visited[0][4] &&
        visited[1][3] &&
        visited[2][2] &&
        visited[3][1] &&
        visited[4][0]
    ) {
        cnt++;
    }
    return cnt;
};

// 가로 세로 빙고 있는지 확인
const isLine = visited => {
    let cnt = 0;
    for(let i = 0; i < 5; i++) {
        if ( // 가로 빙고 확인
            visited[i][0] &&
            visited[i][1] &&
            visited[i][2] &&
            visited[i][3] &&
            visited[i][4]
        ){
            cnt++;
        }
        if ( // 세로 빙고 확인
            visited[0][i] &&
            visited[1][i] &&
            visited[2][i] &&
            visited[3][i] &&
            visited[4][i]
        ) {
            cnt++;
        }
    } 
    return cnt;
};

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const now = nums[i][j];
        board.map((e, idx) => {
            // 방문한 자리와 같은 visted 배열 자리 1로 수정
            if (e.includes(now)) {  // 빙고판 수가 부르는 수를 가지고 있다면
                visited[idx][e.indexOf(now)] = 1; // 배열 자리 0->1로 수정
            }
        });

        let cross = isCross(visited); // 대각선 개수
        let line = isLine(visited); // 가로 세로 개수

        if(cross + line >= 3) {
            let answer = i * 5 + (j + 1);
             // //i는 십의자리이므로 x5 / j는 0부터시작이므로 +1
            // ex ) 5 10 7 16 2 에서 5가 답이라 치면 이 자리는 (0 * 5) + (0 + 1) => 첫번째자리수 
            console.log(answer);
            i = 5; // 안하면 답 15 16 21 이렇게 출력
            break;
        }
    }
}


