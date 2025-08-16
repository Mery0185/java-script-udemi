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

// function test() {
//   for (let i = 0; i < 6; i++) {
//     console.log(i);
//     if (i === 5) return;
//   }
//   console.log("Done");
// }

// test();
// function sayHello(name) {
//   console.log("Привет, " + name + "!");
// }
// sayHello("Антон");

// function returnNumbers(num) {
//   return [num - 1, num, num + 1];
// }
// console.log(returnNumbers(5));

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }

//   return str;
// }

// console.log(getMathResult(10, 5));

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

//методы и свойства чисел

// const num = 12.2;

// console.log(Math.round(num)); //округлили до ближайшего целого

// const test = "12.2 px";

// console.log(parseInt(test)); //переведение из другой системы исчисления в число округляя

// console.log(parseFloat(test)); //переведение из другой системы исчисления в число не округляя
