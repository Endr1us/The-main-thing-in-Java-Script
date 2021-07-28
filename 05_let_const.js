//let, var
/*
let a = "Variable a";
let b = "Variable b";
{
  a = "New variable A";
  let b = "Scope varible b";
  console.log("Scope A", a);
  console.log("Scope B", b);
  //console.log("Scope C", c);
  //let c = "Varible c";
}
console.log("Global A", a);
console.log("Global B", b);
*/

//const
const PORT = 8080;
const array = ["JavaScript", "is", "Awesome"];
array.push("!");
array[0] = "JS";
//console.log(array);

const obj = {};
obj.name = "Andrey";
obj.age = 39;
//console.log(obj);

delete obj.age;
console.log(obj);
