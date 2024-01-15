// 별 찍기
// https://www.acmicpc.net/problem/10994
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(e=>e.replace("\r",""));
const gridLength = 4 * (input - 1) + 1; // 첫째 젤 긴 가로줄 별 개수
const expansion = input - 1; // 2 - 1 = 1
const middleCoordinates = Math.floor(gridLength / 2); // 중간 가로줄 별 개수 
// 5 / 2 = 3
let grid = [];

// n x n 격자 만들기
for (let row = 0; row < gridLength; row++) {
    const rowArr = [];
    for (let column = 0; column < gridLength; column++) {
        rowArr.push('*');
    }
    grid.push(rowArr);
}

// 맨 중간을 기준으로 삭제하기
for (let number = 1; number <= expansion; number++) {
    const startRemoveIndex = middleCoordinates - (2 * number - 1); // 삭제 시작 인덱스(젤 왼쪽)
    // 3 - ( 2 * 1 - 1) = 2
    const endRemoveIndex = middleCoordinates + (2 * number - 1); // 삭제 끝 인덱스(젤 오른쪽)
    // 3 + ( 2 * 1 - 1) = 4

    // 윗 줄 제거
    for (let column = startRemoveIndex; column <= endRemoveIndex; column++) {
        grid[startRemoveIndex][column] = ' ';
    }
    // 아랫 줄 제거
    for (let column = startRemoveIndex; column <= endRemoveIndex; column++) {
        grid[endRemoveIndex][column] = ' ';
    }
    // 왼쪽 줄 제거
    for (let row = startRemoveIndex; row <= endRemoveIndex; row++) {
        grid[row][startRemoveIndex] = ' ';
    }
    // 오른쪽 줄 제거
    for (let row = startRemoveIndex; row <= endRemoveIndex; row++) {
        grid[row][endRemoveIndex] = ' ';
    }
}

// 한 줄씩 출력
grid.map((e) => console.log(e.join('')));