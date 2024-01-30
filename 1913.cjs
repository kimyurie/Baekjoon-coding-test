// 달팽이
// https://www.acmicpc.net/problem/1913
const input = require("fs").readFileSync("예제.txt").toString().trim().split("\n").map((e) => e.replace("\r", ""));
const n = Number(input[0]);
const findLocationNumber = Number(input[1]);
const findLocation = [];
const grid = [];

// 격자 만들기
for (let row = 0; row < n; row++) {
  const arr = [];
  for (let column = 0; column < n; column++) {
    arr.push(1);
  }
  grid.push(arr);
}



// 달팽이 그리기
const rotation = (n - 1) / 2; // 회전 반경 (행열 모두 0 1 2 3)
const center = [Math.floor(n / 2), Math.floor(n / 2)]; // [3,3]
let endLocation = [Math.floor(n / 2), Math.floor(n / 2)]; // 현재 타깃 숫자의 좌표의 위치 나타냄 [3,3] 행 열
let endNumber = 1; // 젤 처음 시작 숫자 

for (let number = 1; number <= rotation; number++) {
  // 찾으려는 수가 1일 때를 잡으려는 경우 이렇게 넣어줘야함.
  // 요 밑에는 다 endNumber가 최소 2이상일 때 부터만 해당되기 때문이다.
  if (findLocationNumber === endNumber) // 좌표 찾으려는 수 == 1
    findLocation.push(endLocation[0], endLocation[1]); // 3,3  즉 가장 중간 좌표를 나타냄
  
// 윗 -> 오 -> 아 -> 왼 순으로 숫자가 1씩 증가하므로 
  // 윗쪽
  for (let column = endLocation[1]; column <= center[1] + number; column++) {
    endNumber += 1; // 2
    if (findLocationNumber === endNumber)
      findLocation.push(endLocation[0] - 1, column); // 2의 좌표는 2, 3
    grid[endLocation[0] - 1][column] = endNumber; // 좌표 자리에 2추가 
  }
  endLocation = [endLocation[0] - 1, center[1] + number]; // 2,4 => 다음 숫자인 3의 좌표

  // 오른쪽
  for (let row = endLocation[0] + 1; row <= center[0] + number; row++) {
    endNumber += 1; // 3
    if (findLocationNumber === endNumber)
      findLocation.push(row, endLocation[1]);
    grid[row][endLocation[1]] = endNumber;
  }
  endLocation = [center[0] + number, endLocation[1]];

  // 아랫쪽
  for (
    let column = endLocation[1] - 1;
    column >= center[1] - number;
    column--
  ) {
    endNumber += 1;
    if (findLocationNumber === endNumber)
      findLocation.push(endLocation[0], column);
    grid[endLocation[0]][column] = endNumber;
  }
  endLocation = [endLocation[0], center[1] - number];

  // 왼쪽
  for (let row = endLocation[0] - 1; row >= center[0] - number; row--) {
    endNumber += 1;
    if (findLocationNumber === endNumber)
      findLocation.push(row, endLocation[1]);
    grid[row][endLocation[1]] = endNumber;
  }
  endLocation = [center[0] - number, endLocation[1]];
}

grid.map((x) => console.log(x.join(' ')));
console.log(findLocation[0] + 1, findLocation[1] + 1);

