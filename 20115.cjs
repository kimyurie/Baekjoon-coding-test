// 에너지 드링크
// https://www.acmicpc.net/problem/20115
const line = require("fs").readFileSync("예제.txt", "utf8");
let [n, drinkAmount] = line.trim().split("\n");

drinkAmount = drinkAmount.split(" ").map(Number);
drinkAmount.sort((a, b) => a - b); // 2 3 6 9 10

// 반을 버려야하는 에너지 드링크 양이 작을수록 나중에 최종값이 커짐
while (drinkAmount.length > 1) { // 드링크 하나 남을 때까지 반복
  let throwDrink = drinkAmount.shift() / 2; // 반 버리는 드링크
  let newDrink = drinkAmount.pop();
  newDrink += throwDrink;
  drinkAmount.push(newDrink);
}

console.log(...drinkAmount);
