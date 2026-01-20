// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector("#current").parentNode);
// console.log(document.querySelector("#current").parentNode.parentNode);
// console.log(document.querySelector("#current").parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(
//   document.querySelector('[data-current="3"]').previousElementSibling
// );

// for (let node of document.body.childNodes) {
//   if (node.nodeName == "#text") {
//     continue;
//   }
//   console.log(node);
// }

//ClassList

// const btns = document.querySelectorAll("button");
// const wrapper = document.querySelector(".btn-block");
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); //позволяет получить класс который расположен под определённым индексом
// console.log(btns[1].classList.add("red")); //+ класс
// console.log(btns[0].classList.remove("red")); //удаляет класс
// console.log(btns[0].classList.toggle("red")); //убирает класс если он есть на элементе и добавляет класс если его нет

// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

// btns[0].addEventListener("click", () => {
//   //   if (!btns[1].classList.contains("red")) {
//   //     btns[1].classList.add("red");
//   //   } else {
//   //     btns[1].classList.remove("red");
//   //   }

//   btns[1].classList.toggle("red");
// });

// console.log(btns[0].className);
// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.matches("button.red")) {
//     console.log("Hello");
//   }
// });

// // btns.forEach((btn) => {
// //   btn.addEventListener("click", () => {
// //     console.log("Hello");
// //   });
// // });

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);
