// 해쉬(Hash)란 키(key)와 값(val) 짝을 이루는 dict 형태의 자료구조
// Hash 함수를 통해 빠른 탐색이 가능하다. 시간복잡도 O(1)

let map = new Map();

let number = 0;
let str = 'string';
let obj = { a: 1};
let fnc = () => {
    console.log('fnc');
};

// value 설정: set()
map.set(number, 4); // key에 number 가능
map.set(str, 1); // key에 string 가능
map.set(obj, 2); //key에 object 가능
map.set(fnc, 3); // key에 함수 가능
map.set(number, 0); // 덮어쓰기 가능

console.log(map); // Map(4) { 0 => 0, 'string' => 1, { a: 1 } => 2, [Function: fnc] => 3 }

// value 얻기: get()
map.get(str); // 1
map.get(obj); // 2
map.get('none'); // undefined  
map.get({ a: 1 }); // undefined, obj !== { a: 1 }

// value 찾기 : has()
map.has(str); // true
map.has(obj); // true
map.has('none'); // false  

// value 삭제 : delete()
map.delete(str); // true 
map.get('none'); // false

// value 존재유무 : size
map.size // 4
map.length // undefined

// hash 탐색 : for-of 문
//key, value 쌍으로 출력
for (let [key, value] of map) {
    console.log(key + ' = ' + value)
  }
  
  //key만 출력
  for (let key of map.keys()) {
    console.log(key)
  }
  
  //value만 출력
  for (let value of map.values()) {
    console.log(value)
  }