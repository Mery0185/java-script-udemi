"use strict";

// a = 15;
// console.log(a);

// const obj = {
//   a: 50,
// };

// obj.a = 10;
// console.log(obj);

// alert("Have a nice day my love!");

// const result = confirm("Are you here?");
// console.log(result);
// const answer = prompt("Вам есть 18?", " ");
// console.log(answer);
// console.log(typeof answer);

// const answers = [];

// answers[0] = prompt("Как Ваше имя?", "");
// answers[1] = prompt("Как Ваша фамилия?", "");
// answers[2] = prompt("Сколько Вам лет?", "");

// document.write(answers);

// const category = "toys";
// console.log(
//   "https://developer.mozilla.org/ru/docs/conflicting/Learn_web_development/Core/Styling_basics" +
//     category
// );
// console.log(
//   `https://developer.mozilla.org/ru/docs/conflicting/Learn_web_development/Core/Styling_basics${category}`
// );

// const user = "Ivan";
// alert(`Hello, ${user}`);
// console.log(`arr` + " - object");
// console.log(`arr` + " - object");
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// const isChecked = true,
//   isClose = false;

// console.log(!isChecked || isClose);

// const hamburger = 0;
// const fries = 0;
// const cola = 3;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "fghdgfnhdm");

// if (hamburger === 3 && fries) {
//   console.log("Все сыты");
// } else {
//   console.log("Мы уходим!");

// if (hamburger || cola || fries) {
//   console.log("Все довольны");
// } else {
//   console.log("Все уходят");
// }

// console.log(hamburger || cola || fries);

// let john,
//   alex,
//   sam,
//   maria = "done";

// console.log(john || alex || sam || maria);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola == 2) || (fries == 3 && nuggets)) {
//   console.log("Все довольны");
// } else {
//   console.log("Все уходят");
// }

// console.log((hamburger === 3 && cola == 2) || (fries == 3 && nuggets));

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

//Циклы

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

//Повторение циклов

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level:${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level:${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level:${k}`);
//     }
//   }
// }

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;

// //  for (let i = 2; i <= 16; i++) {
// //  if (i % 2 === 0) {
// //  continue;
// //  } else {
// //  console.log(i);
// //  }
// //  }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }
// function firstTask() {
//   for (let i = 5; i < 11; i++) {
//     console.log(i);
//   }
// }

// firstTask();

// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
//   }
// }

// secondTask();

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// thirdTask();

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// fourthTask();

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }

//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   console.log(result);
//   return result;
// }

// firstTask();

// function secondTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
//   return data;
// }

// secondTask();

// function thirdTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }

//   console.log(result);
//   return result;
// }

// thirdTask();0+

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// let result = "";
// const length = 8;

// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * (length - i) - 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// for (let i = 20; i >= 10; i--) {
//   if (i === 13) break;
//   console.log(i);
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

//Функции

//Function declaration

// let num = 20;
// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }
// showFirstMessage("Hello, Masha");
// console.log(num);

// function calc(a, b) {
//   return (a + b) * a;
// }
// console.log(calc(4, 6));
// console.log(calc(5, 6));

// function ret() {
//   let num = 50;
//   return num;
// }
// const another = ret();
// console.log(another);

//funtion expretion

// const logger = function () {
//   console.log("Hello");
// };
// logger();

//Стрелочные функции
// const calc = (a, b) => a + b;
// console.log(calc(2, 9));

// const calc = (a, b) => {
//   return a + b;
// };
// console.log(calc(6,8 ));

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// // promotion(convert(500, usdCurr));
// //или
// const res = convert(500, usdCurr);
// promotion(res);

//методы и свойства строки

// str.length // свойства строки

// let str = "test";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("f"));

// console.log(fruit.slice(5, 10));

// console.log(fruit.substring(5, 10)); //тоже что и slice

// console.log(fruit.substr(5, 5)); //тоже, но нам надо во втором значении указать сколько надо вырезать символов

// str.trim() // метод удаляет пробелы и символы сначала и в конце строки
// const a = prompt(`Один из последних просмотренных фильмов?`, "").trim();

//методы и свойства чисел

// const num = 12.2;

// console.log(Math.round(num)); //округлили до ближайшего целого

// const test = "12.2 px";

// console.log(parseInt(test)); //переведение из другой системы исчисления в число округляя

// console.log(parseFloat(test)); //переведение из другой системы исчисления в число не округляя

// console.log(Math.ceil(4.1)); // 5 округляет до большего числа

// console.log(Math.floor(4.1)); // 4 округляет до меньшего

// console.log(Math.max(1, 7, 68, 3)) // 68 показывает самое большое число

//Callback functions

// function first() {}
// //Do something
// setTimeout(function () {
//   console.log(1);
// }, 500);

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJs(lang, callback) {
//   console.log(`I learn ${lang}`);
//   callback();
// }
// function done() {
//   console.log("I comleted this lesson!");
// }

// learnJs("JavaScript", done);

//  Обьекты

// const obj = new Object(); // так тоже можно создавать объект

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
// };

// console.log(options.colors);

// console.log(Object.keys(options)); // метод создаёт массив и перечисляет ключи
// console.log(Object.keys(options).length); // метод создаёт массив и перечисляет ключи

// delete options.name; // удалить что-то из объекта
// console.log(options);

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// } //перебираем ключи и значения

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       // counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };

// options.makeTest();
// console.log(options);

// деструктиризация

// const { border, bg } = options.colors;
// console.log(border);

// Массивы

// const arr = [1, 62, 83, 996, 108];
// arr.sort(compareNumber);
// console.log(arr);
// // функция отсортирует массив с числами
// function compareNumber(a, b) {
//   return a - b;
// }
// arr[99] = 0;
// console.log(arr.length); // 5, length = последний индекс в массиве + 1
// console.log(arr);

//методы массива

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr.pop(); //удаляет последний елемент массива.
// arr.push(10); // добавляет эллемент в конец
// console.log(arr);

// чтоб пперебрать элементы массива
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", ""); // создание массива из строки
// const products = str.split(", ");
// products.sort(); // сортирует элементы массива как строки
// console.log(products.join("; ")); // собирает из массива - строку

//Передача по ссылке или по значению, Spread оператор

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj;
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add); // создаст копию и добавит к нашему объекту
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"]; // копирование массива
// const newArray = oldArray.slice();

// newArray[1] = "gggggg";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"];
// const blogs = ["wordpress", "livejournal", "blogger"];
// const internet = [...video, ...blogs, "vk", "facebook"]; //создаёт копии массива

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAaray = [...array];
// console.log(newAaray);
// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q, three: 3 }; // копия объекта

// console.log(newObj);

///Прототипно-ориентированное наследие

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);
// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHi: function () {
//     console.log("Hi");
//   },
// };

// const john = Object.create(soldier); // создаём объект который будеи иметь свойства прототипа soldier

// john.__proto__ = soldier; // устаревшее
// Object.setPrototypeOf(john, soldier); // новый способ установки прототипов
// john.sayHi();

//Динамическая типизация
//To String -
// 1 способ преврвтить в строку
// console.log(typeof String(null));
// console.log(typeof String(56));

// //2 конкатинация
// console.log(typeof (5 + ""));

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";
// console.log(fontSize);
// console.log(typeof fontSize);

//To Number
//1
// console.log(typeof Number("56"));

// //2
// console.log(typeof +"string");

// // 3
// console.log(typeof parseInt("56px", 10));

// let answer = +prompt("Введите свой возраст", "");
// console.log(answer);

//To boolean
// false - 0, null, undefined, ''; NaN
// 1
// let switcher = null;
// if (switcher) {
//   console.log("Work");
// }
// switcher = 1;
// if (switcher) {
//   console.log("Work");
// }

// // 2

// console.log(typeof Boolean("56"));

// 3

// console.log(typeof !!"44");

//Замыкание

// let number = 5;
// debugger;

// function logNumber() {
//   let number = 4;
//   debugger;
//   console.log(number);
// }
// number = 6;
// debugger;
// logNumber();

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
