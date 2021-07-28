//context

const person = {
  surname: "Пулька",
  knows: function(what, name) {
    console.log(`Ты, ${what} нюхаешь цветы, ${name} ${this.surname}`);
  }
};

const andr = { surname: "Бородулька" };

person.knows("носом", "Юлька");
person.knows.call(andr, "усами", "Андрюлька"); // call принимает три параметра, первый контекст
person.knows.apply(andr, ["усами 2", "Андрюлька 2"]); // apply смысл тотже что и у call, но принимает два параметра и второй обязательно массив
person.knows.call(andr, ...["усами 3", "Андрюлька 3"]); //также можно передавать массив, но нужно его разворачивать с помощью спред оператора ...
const bound = person.knows.bind(andr, "усами 4", "Андрюлька 4"); // bind принимает не ограниченное число параметров, но не вызывает функцию, а возвращает новую функцию.
bound();
person.knows.bind(andr, "усами 5", "Андрюлька 5")();

/*
// объекты типа: Класс
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const julia = new Person("Юлька", 30);
const andr = new Person("Андрей", 30);
*/
/*
// бандинг, явная передача контекста
function logThis() {
  console.log(this);
}
const obj = { num: 42 };
logThis.call(obj);
logThis.apply(obj);
logThis.bind(obj)();

// имплисит, не явная передача контекста
const animal = {
  legs: 4,
  logThis: function() {
    console.log(this);
  }
};

animal.logThis();
*/
/*
// стрелочная функция не создаёт контекст, а использует укащанный выше
function Cat(color) {
  this.color = color;
  console.log("This", this);
  (() => console.log("Arrow this", this))();
}

new Cat("red");
*/
