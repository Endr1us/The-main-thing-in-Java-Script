//Immediate Invoked Function Expression

//эио проблемный код, с неверным результатом
/*
let result = [];
for (var i = 0; i < 5; i++) {
  result.push(function() {
    console.log(i);
  });
}

result[2](); // результат - 5
result[4](); // результат - 5
*/
//правильный результат

let result = [];
for (var i = 0; i < 5; i++) {
  (function() {
    var j = i;
    result.push(function() {
      console.log(j);
    });
  })();
}

result[2]();
result[4]();

