console.log(sum(2, 42));

function sum(a, b) {
  return a + b;
}

var i;
console.log(i);
i = 42;
console.log(i);
/*
console.log(i);
let i;
i = 42;
console.log(i);
*/
/*
console.log(i);
const i;
i = 42;
console.log(i);
*/
// var подвержен хоистингу, тоесть доступу к данным до их инициилизации,
// let const не подвержены хоистингу, тоесть пока переменная или константа не инициилизирована к ней нет доступа

//Function Declaration - мы можем вызывать функцию в любом месте, неважно где она объявлена
/*console.log(square(25));

function square(num) {
  return num ** 2;
}*/

//Function Expression - мы можем вызывать функцию только поле её объявления, даже если она объявлена через var

var square = function(num) {
  return num ** 2;
};

console.log(square(25));
