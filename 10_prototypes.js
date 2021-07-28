// __proto__ - свойство ES6 синтаксиса, для доступа к родительскому прототипу объекта
// Object.getPrototypeOf() - свойство ES5 синтаксиса, для доступа к родительскому прототипу объекта

//второй контекст использования прототипов относится к функциям, для передачи свойст объектам которые создаються, к примеру, через ключевое слово "new"
/*
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says mju`);
};

const cat = new Cat("Tom", "white");

console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.constructor);
console.log(Cat.constructor);

cat.voice();
*/

// собственные свойства объектов или свойства доступные в прототипе
/*
function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = "white";

const person = new Person();
person.name = "Andrey";

console.log("skin" in person);
console.log(person.legs);
console.log(person.eyes);
console.log(person.name);
console.log(person.hasOwnProperty("name")); //метод позволяет определить относится ли свойство к объекту или к его прототипу
console.log(person.hasOwnProperty("skin"));
*/

// Object.create() метод позволяет создавать некоторые объекты через уже существующие прототипы
var proto = { year: 2020 };
const myYear = Object.create(proto);

proto.year = 3000; // такое изменение сработает

//proto = { year: 999 }; // такое изменение не сработает, но при проверке прототипа даст false

console.log(myYear.year);

console.log(myYear.hasOwnProperty("year"));
console.log(myYear.__proto__ === proto);
