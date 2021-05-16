// Function

// 1. Fuction declaration
// function name(param1, param2){body... return;}
// one fuction === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint

function printHello() {
  console.log(`Hello`);
}

printHello();

function log(msg) {
  console.log(msg);
}

log("파라미터 로그");

/* 타입 스크립트
// 함수명(파라미터:데이터타입):리턴타입
function log(msg:string):number{
    console.log(msg);
    return 0;`
}
*/

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'haon';
}

// name속성에 noah라는 value값을 가진 noah 오브젝트가 메모리에 적재
const noah = { name : 'noah'};
// changeName 함수에 noah Object 전달
changeName(noah);
// 참조하고 있는 메모리 수정되어 haon 출력.
console.log(noah);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');