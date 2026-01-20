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
// console.log(typeof String(null)); // string
// console.log(typeof String(56));// string

// //2 конкатинация
// console.log(typeof (Object + ""));// string
// console.log(typeof (5 + ""));// string
// console.log(typeof (null + ""));// string

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

// function createCounter() {
//   let counter = 0;

//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };

//   return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// lesson 41 - 42 DOM

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button");

// console.log(btns[1]);

// const circles = document.getElementsByClassName("circle");

// console.log(circles);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach((item) => {
//   console.log(item);
// });

// const oneHeart = document.querySelector("div");

// console.log(oneHeart);

// const wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "#FBDDFD";
// box.style.width = "500px";

// btns[1].style.borderRadius = "20%";

// circles[0].style.backgroundColor = "violet";

// box.style.cssText = "background-color: violet; width: 500px";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "yellow";
// }
// hearts.forEach((item) => {
//   item.style.backgroundColor = "black";
// });

// const div = document.createElement("div");
// div.classList.add("black");
// wrapper.append(div);
// // document.body.append(div); помещает в конец

// document.querySelector(".wrapper").append(div);

// wrapper.prepend(div); // помещает в начало

// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div);

// document.body.appendChild(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "Hello";
// div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "I am happy";

// div.insertAdjacentHTML("afterend", "<h1>Hi!</h1>");
// const text = document.createTextNode("I am happy");

// div.style.color = "white"; // цвет текста
// div.style.backgroundColor = "pink"; // фон
// div.style.padding = "20px"; // внутренние отступы
// div.style.borderRadius = "10px"; // скруглённые углы
// div.style.fontSize = "24px"; // размер шрифта
// div.style.textAlign = "center"; // выравнивание по центру
// div.style.marginTop = "40px"; // отступ сверху
// div.style.width = "200px"; // ширина блока
// div.style.marginInline = "auto"; // центрирование по горизонтали

//Рекурсия

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x; //(result = x * result)
//   }
//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// pow(2, 2); // 4
// pow(2, 3); // 4
// pow(2, 4); // 16

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],

//   html: {
//     basic: [
//       {
//         name: "Peter",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],

//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//     semi: {
//       students: [
//         {
//           name: "Test",
//           progress: 100,
//         },
//       ],
//     },
//   },
// };

// function getTotalProgress(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / students;
// }

// console.log(getTotalProgress(students));

// function getTotalProgressByRecurcion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }

//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (let subData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecurcion(subData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//   }
// }

// const result = getTotalProgressByRecurcion(students);

// console.log(result[0] / result[1]);

//mobile vertion

// touchstart - мобильное событие при клике
// touchmove - косание и движение
// touchend - убираем палец и выполнилось событие
// touchenter - когда зашел на элемент с событием
// touchleave - когда ушел за пределы элемента
// touchcancel - палец вышел за пределы браузера
//touches - список всех пальцев которые сейчас взаимодействуют с экраном
//targetTouches - все пальци которые взаимодействуют с этии конкретно элементом
//changedTouches - список пальцев которые взаимодействуют с этии конкретно элементом

// window.addEventListener("DOMContentLoaded", () => {
//   const box = document.querySelector(".box");

//   box.addEventListener("touchstart", (e) => {
//     e.preventDefault();

//     console.log("Start");
//     // console.log(e.touches);
//     console.log(e.targetTouches);
//   });
//   // box.addEventListener("touchmove", (e) => {
//   //   e.preventDefault();

//   //   console.log("Move");
//   // });
//   // box.addEventListener("touchend", (e) => {
//   //   e.preventDefault();

//   //   console.log("End");
//   // });
// });

// defer, async - отложенные скрипты

// const p = document.querySelectorAll("p");
// console.log(p);

// const script = document.createElement("script");
// script.src = "js/script.js";
// document.body.append(script);

// Symbol
// const obj = {
//   name: "Test",
// };
// let id = Symbol("id");
// obj[id] = 1;
// console.log(obj);
// console.log(obj["id"]);

//Дескрипторы свойств

//writable - если он стоит в позиции true - то свойства можно изменить, если false - то только для чтения.
//enumerable - если это свойство true - то свойства будут перечисляться в циклах, если нет - но циклы будут его игнорировать.
//configurable -  если это свойство true - то свойства можно удалить, а атрибуты изменить, иначе делать этого нельзя.

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birthday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };
// Object.defineProperty(user, "birthday", {
//   value: prompt("Date?"),
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });
// // user.birthday = "16.01.1985";
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Object.defineProperty(user, "showMyPublicData", { enumerable: false });
// for (let key in user) console.log(key);

// Object.defineProperties(user, {
//   name: { writable: false },
//   surname: { writable: false },
// });
// Object.defineProperty(user, "name", { writable: false });
// Object.defineProperty(user, "gender", { value: "male" });
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

//Полезные методы объектов
//Object.is - определяет являются ли два значения разлечимыми(одинаковыми)
//Object.preventExtensions() - предотвращает расширение объектов
//Object.seal() - предотвращает удаление свойств объекта другим кодом
//Object.freeze() - замораживает объект, другой код не сможет удалить или изменить объект

//Проверяющие методы

//Object.isExtensible() - определяет разрешено ли расширение
//Object.isFrozen() - определяет был ли объект заморожен
//Object.isSealed() - определяет является ли объект запечатан

//Object.keys() - возвращает массив из собственных ключей объекта
//Массивоподобный объект:
// var obj = {
//   0: "a",
//   1: "b",
//   2: "c",
// };
// console.log(Object.keys(obj)); [0, 1, 2]

//Object.values() - возвращает массив из собственных значений свойств объекта

// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object1));
// // ["somestring", 42, false]

//Object.entries() - метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]

// var obj = {
//   0: "a",
//   1: "b",
//   2: "c",
// };
// console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

//Итерируемые конструкции - те которые могут быть перебраны с помощью for of (те которые содержат Symbol.iterator)

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birthday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// for (const key in user) {
//   console.log(user[key]);
// }

// // const arr = ["b", "a", "c"];

// // for (const key in arr) {
// //   console.log(arr[key]);
// // }

// const str = "string";

// for (const key in str) {
//   console.log(str[key]);
// }

// const arr = ["b", "a", "c"];

// // for (const key of arr) {
// //   console.log(key);
// // }

// Array.prototype.someMethod = function () {};
// console.dir(arr);
// for (const key of arr) {
//   console.log(key);
// }

// const salar = {
//   john: 500,
//   ivan: 1000,
//   ann: 5000,
//   sayHi: function () {
//     console.log("Hi");
//   },
// };

// salar[Symbol.iterator] = function () {
//   return {
//     current: this.john,
//     last: this.ann,
//     next() {
//       if (this.current < this.last) {
//         this.current = this.current + 500;
//         return { done: false, value: this.current };
//       } else {
//         return { done: true };
//       }
//       // {done: true, value: 123}
//     },
//   };
// };

// const iterator = salar[Symbol.iterator]();
// console.log(iterator.next());
// for (let res of salar) {
//   console.log(res);
// }

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birthday: "20/04/1993",
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };
// console.log(typeof Object.keys(user)[0]);

//чтоб перевести в формат карты

// const userMap = new Map(Object.entries(user));
// // console.log(userMap);

// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);

// const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

// //Map - называется специфические структуры данных, свойствами которых могут быть и объекты и масив и функция итд
// const budget = [5000, 15000, 2500];
// const map = new Map([[{ paper: 400 }, 8000]]);

// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// });
// map.set(shops[0], 5000);
// map.set(shops[1], 25000);
// map.set(shops[2], 15000);

// console.log(map.get(shops[0])); //берём
// console.log(map.has(shops[0])); //проверяем
// map.delete(key); //удаляет что-то из карты
// map.clear(); //очистить нашу карту
// map.size(); //количество елементов внутри карты
// console.log(map);
//методы Map

// map.keys(); // возвращаеи итерируемый объект по ключам
// console.log(map.keys());
// for (let shop of map.keys()) {
//   console.log(shop);
// }

// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//   console.log(price);
// }

// for (let price of map.entries()) {
//   console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//   console.log(key, value);
// });

//Set - особый вид коллекций по типу массива, где каждое значение может повторятся один раз.

// const arr = ["Alex", "Lena", "Sweta", "Toma", "Alex"];

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(unique(arr));

// const set = new Set(arr);
// console.log(set);
// set.add("Oleg"); //добавить
// set.delete(value); //удалить
// set.has("Lena"); //проверить
// set.clear(); //очистить
// set.size;// размер

// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) => {
//   console.log(value, valueAgaing);
// });
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

//BigInt

// const bigint = 43484587587647634236428675845673845959n;

// const sameBigint = BigInt(43484587587647634236428675845673845959);

// // console.log(typeof bigint);

// let bigint = 1n;
// let number = 2;
// console.log(bigint + BigInt(number));
// console.log(Number(bigint) + number);

// const timerId = setTimeout(function () {
//   console.log("Hello");
// }, 2000);

// const timerId2 = setTimeout(logger, 2500);

// clearInterval(timerId2);

// const btn = document.querySelector(".btn");
// let timerId,
//   i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);
// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 2500);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);

//Weakset - динамическая структура которая может очищатся только сборщиком мусора
// у него есть только add, has, delete

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "World", from: "Alex" },
//   { text: "Good bay", from: "Mery" },
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);

// readMessages.add(messages[0]);
// messages.shift();
// console.log(readMessages.has(messages[0]));

//DATA

// const now = new Date();
// new Date.parse("2026 - 01 - 09");
// console.log(now);

//методы чтоб получить дату

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // разница между часовым временем и UTC
// console.log(now.getTime()); // сколько времени в милисек с 1970г прошло до сегодня?

//методы чтоб получить дату

// console.log(now.setHours(18, 40));
// console.log(now);

// let start = new Date();

// for (let i = 0; i < 1000000; i++) {
//   let some = i ** 3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);

// 74 Функции конструкторы

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User("Ivan", 28);
// const alex = new User("Alex", 23);

// ivan.exit();
// ivan.hello();
// alex.hello();
// console.log(ivan);
// console.log(alex);

// 75 контекст вызова функции this - то что окружает функцию и в каких условиях она вызывется
// 4 способа когда меняется контекст:
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// 1) Обычная функция - this = window (если use strict - undefined)

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   },
// };
// obj.sum();
// //2) Контекст у методов объектов - сам объект

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }
//3) this в конструкторах и классах - новый экземпляр объекта

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// sayName.call(user, " Smith");
// sayName.apply(user, [" Bush"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// // 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   // console.log(this);
//   this.style.backgroundColor = "red";
// });

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };

//     say();
//   },
// };

// obj.sayNumber();

// const double = (a) => a * 2;
// console.log(double(2));

// 76 Классы

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, "World", "blue");
// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// Принципы объектно-ориентированного програмирования:
// 1) Абстракция - когда мы отделяем концепцию от экземпляра.
// 2) Наследование - способность объекта или класа базироваться на другом объекте или классе.
