// 2. Variable
// let (added in ES6)
let globalName = "Global Name";
{
  let name = "noah";
  console.log(" block in name 1 : " + name);

  name = "haon";
  console.log(" block in name 2 : " + name);

  // 전역변수
  console.log(" block in global name : " + globalName);
}
console.log(" block out name : " + name);
console.log(" block out global name : " + globalName);
