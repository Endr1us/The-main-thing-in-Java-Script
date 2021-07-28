// promise
/*
let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});
*/
/*
let promise = new Promise(function(resolve, reject) {
    // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
*/
/*
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // игнорируется
  setTimeout(() => resolve("…")); // игнорируется
});
*/
/*
let promise = new Promise(function(resolve, reject) {
  // задача, не требующая времени
  resolve(123); // мгновенно выдаст результат: 123
});
*/
//Потребители: then, catch, finally
/*
promise.then(
  function(result) {...} //обработает успешное выполнение
  function(error) {...} //обработает ошибку
);
*/

// resolve запустит первую функцию, переданную в .then
/*
promise.then(
  result => console.log(result), // выведет "done!" через одну секунду
  error => console.log(error) // не будет запущена
);
*/

// Если мы хотели бы только обработать ошибку,
// то можно использовать null в качестве первого аргумента:
// .then(null, errorHandlingFunction).
// Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое
// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f)
/*
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это тоже самое, что promise.then(null, f)
promise.catch(console.log); // выведет "Error: Ошибка!" спустя одну секунду
*/

// Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой
//finally хорошо подходит для очистки, например остановки индикатора загрузки, его ведь нужно остановить вне зависимости от результата
/*
new Promise((resolve, reject) => {
// сделать что-то, что займёт время, и после вызвать resolve/reject 
})
// выполнится, когда промис завершится, независимо от того, успешно или нет
.finally(() => остановить индикатор загрузки)
.then(result => показать результат, err => показать ошибку)
*/
// Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам
// Например, здесь результат проходит через finally к then
/*
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000);
})
  .finally(() => console.log("Промис завершён"))
  .then(result => console.log(result));
  */

// А здесь ошибка из промиса проходит через finally к catch
/*
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => console.log("Промис завершён"))
  .catch(err => console.log(err));
  */
// finally не предназначен для обработки результата промиса

// Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его. Однако, если промис уже завершён, то обработчики выполнятся сразу:
// при создании промиса он сразу переводится в состояние "успешно завершён"
let promise = new Promise(resolve => resolve("готово!"));

promise.then(console.log); // готово! (выведется сразу)
