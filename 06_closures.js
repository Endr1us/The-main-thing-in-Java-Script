//замыкания функций

function sayHelloTo(name) {
  const message = "Hello" + " " + name;

  return function() {
    console.log(message);
  };
}

const helloJulia = sayHelloTo("Julia");
const helloAndrey = sayHelloTo("Andrey");
console.log(helloJulia);
console.log(sayHelloTo);
helloJulia();
helloAndrey();
/*

function creatFrameworkManager() {
  fw = ["Angular", "ReactJS"];

  return {
    print: function() {
      console.log(fw.join(" "));
    },
    add: function(framework) {
      fw.push(framework);
    }
  };
}

const manager = creatFrameworkManager();
console.log(manager);
manager.print();
manager.add("VueJS");
manager.print();

//setTimeout

const fib = [1, 2, 3, 5, 8, 13];
/*
// данное решение не выводит правильный ответ
for (var i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
*/
/*
// данное решение выводит правильный ответ
for (let i = 0; i < fib.length; i++) {
  setTimeout(function() {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
*/
/*
// данное решение выводит правильный ответ
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}

/*
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();
*/
/*
function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();
*/
