"use strict";

const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button");

console.log(btns[1]);

const circles = document.getElementsByClassName("circle");

console.log(circles);

const hearts = document.querySelectorAll(".heart");

hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector("div");

console.log(oneHeart);

const wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "#FBDDFD";
box.style.width = "500px";

btns[1].style.borderRadius = "20%";

circles[0].style.backgroundColor = "violet";

box.style.cssText = "background-color: violet; width: 500px";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "yellow";
}
hearts.forEach((item) => {
  item.style.backgroundColor = "black";
});

const div = document.createElement("div");
div.classList.add("black");
wrapper.append(div);
// document.body.append(div); помещает в конец

// document.querySelector(".wrapper").append(div);

// wrapper.prepend(div); // помещает в конец

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
