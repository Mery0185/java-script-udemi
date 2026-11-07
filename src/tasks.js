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

// задачи на функции

// function calculateVolumeAndArea(length) {
//   if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0,
//     area = 0;

//   volume = length * length * length;
// length ** 3 - это тоже самое, что и выше или варианты через цикл.
// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//   area = 6 * (length * length);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seatNumber) {
//   if (
//     typeof seatNumber !== "number" ||
//     seatNumber < 0 ||
//     !Number.isInteger(seatNumber)
//   ) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }

//   if (seatNumber === 0 || seatNumber > 36) {
//     return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(seatNumber / 4);
// тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// console.log(getCoupeNumber(5));

// function getTimeFromMinutes(minutesTotal) {
//   if (
//     typeof minutesTotal !== "number" ||
//     minutesTotal < 0 ||
//     !Number.isInteger(minutesTotal)
//   ) {
//     return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = "";

//   switch (hours) {
//     case 0:
//       hoursStr = "часов";
//       break;
//     case 1:
//       hoursStr = "час";
//       break;
//     case 2:
//     case 3:
//     case 4:
//       hoursStr = "часа";
//       break;
//     default:
//       hoursStr = "часов";
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(11));

// function findMaxNumber(a, b, c, d) {
// Самое простое - это использовать Math.max :)
// А оптимизировать такую проверку мы научимся совсем скоро
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// console.log(findMaxNumber(1, 5, 6.6, 10.5));
// findMaxNumber(1, 5, "6", "10");

// function fib(num) {
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }

// fib(5);

//объекты

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function (lang) {
//       str += `${lang.toUpperCase()} `;
//     });

//     return str;
//   },
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   return exp;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//   let str = "";
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }

//   return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   //   let str = "";
//   if (arr.length === 0) {
//     return "Семья пуста";
//   }
//   let str = "Семья состоит из: ";

//   arr.forEach((member) => {
//     str += `${member} `;
//   });
//   return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   arr.forEach((city) => {
//     console.log(city.toLowerCase());
//   });
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = "This is some strange string";

// function reverse(str) {
//   if (typeof str !== "string") {
//     return "Ошибка!";
//   }
// Самый оптимальный вариант решения
// return str.split("").reverse().join("");

// Решение при помощи цикла
// let newStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
// }
// return newStr
// }

// reverse(someString);

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];

// function availableCurr(arr, missingCurr) {
//   let str = "";
//   arr.length === 0
//     ? (str = "Нет доступных валют")
//     : (str = "Доступные валюты:\n");

//   arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });

// Или
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === missingCurr) {
//         continue;
//     }
//     str += `${arr[i]}\n`;
// }

//   return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };
// function isBudgetEnough(data) {
//   let square = 0;
//   let volume = 0;

//   data.shops.forEach((shop) => {
//     square += shop.width * shop.length;
//   });

//   volume = data.height * square;

//   if (data.budget - volume * data.moneyPer1m3 >= 0) {
//     return "Бюджета достаточно";
//   } else {
//     return "Бюджета недостаточно";
//   }
// }

// function isBudgetEnough(data) {
//   let square = 0;
//   let volume = 0;

//   data.shops.forEach((shop) => {
//     square += shop.width * shop.length;
//   });

//   volume = data.height * square;

//   if (data.budget - volume * data.moneyPer1m3 >= 0) {
//     return "Бюджета достаточно";
//   } else {
//     return "Бюджета недостаточно";
//   }
// }

// console.log(isBudgetEnough(shoppingMallData));

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i];
//   }

//   console.log(result);
//   return result;
// }
// thirdTask();

// const arr = [1, 16, 1985, 2025];
// arr.push(2007, 2014);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} - находится в массиве ${arr}`);
// });
// console.log(arr.length);

// for (let value of arr) {
//   console.log(value);
// }

// задачи на собеседование

// let x = 5;
// alert(++x); // 5

// console.log([] + false - null + true); // NaN

// let y = 1;
// let x = (y = 2);
// alert(x); // 2

// console.log ([] + 1 + 2); // 12

// alert("1"[0]); // 1

// console.log(2 && 1 && null && 0 && undefined); // null, && - запинается на лжи, || - запинается на правде

// console.log(!!(1 && 2) === (1 && 2));

// alert(null || (2 && 3) || 4); //3

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);

// alert(+"Infinity");

// console.log("Ёжик" > "яблоко");

// console.log(0 || "" || 2 || undefined || true || falsе);

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";
//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (
//     +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
//     +average.slice(0, -1)
//   ) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   // Нам просто нужно менять весь массив данных,
//   // а не лезть напрямую менять каждого из сотрудников
//   // Так как это верхний уровень объекта, то значение
//   // будет меняться только у копии
//   copy.waitors = [{ name: "Mike", age: 32 }];
//   return copy;
// }

// transferWaitors(restorantData);

// factorial

// function factorial(n) {
//   if (typeof n !== "number" || !Number.isInteger) {
//     return "Ошибка, проверьте данные";
//   }
//   if (n >= 1) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }

// // factorial(5);
// console.log(factorial(5));

fnk;
