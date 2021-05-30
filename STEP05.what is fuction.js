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
function showMessage(message, from = 'unknown') {

  // 이전에는 전달되는 파라미터값이 undefined이면
  // unknown값을 세팅하였지만 파라미터부에 선언하여 사용 가능
  // if(from === undefined) { from = 'unknown'}

  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest Paramters (added in ES6)
function printAll(...args) {
  // 기본적인 for문
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // for문에서 하나하나 get하는 행위를 수행해주는 for
  for (const key in args) {
    console.log(key);
  }

  args.forEach(arg => console.log(arg));
}

printAll('developer','programmer','coder');

// 5. Local scope
// 썬팅된 차량 창문 비유 
// 전역변수 : (함수) 안에서는 밖을 볼 수 있지만
// 지역변수 : (함수) 밖에서는 안을 들여다 볼 수 없음.
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hola';
  }
  console.log(childMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a+b;
}
const result = sum(1,2);
console.log(`sum:${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.print > 10) {
    // long upgrade logic...
  }
}
// good
function upgradeUser(user) {
  if (user.print <= 10) {
    return;
  }  
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 함수 호출을 수행함. 
// ( 현업에서는 사용하지 않지만, 디버깅용으로 사용 )
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 5, 6));