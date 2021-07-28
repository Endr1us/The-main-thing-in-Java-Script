//new
function Cat(color, name) {
  this.color = color;
  this.name = name;
}
//const cat = new Cat("black", "KOT");
//console.log(cat);
/*
//как устроено нью в ес5 синтаксисе
function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}
const cat = myNew(Cat, "black", "KOT");
console.log(cat);
*/

//без применения new не будет передано значение
const cat = Cat("black", "KOT");
console.log(cat);
