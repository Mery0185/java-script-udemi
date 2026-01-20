const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("Click");
// };
// btn.addEventListener("click", () => {
//   alert("Click");
// });
// btn.addEventListener("click", () => {
//   alert("Second click");
// });
// btn.addEventListener("mouseenter", () => {
//   console.log("Hover");
// });
// btn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("Hover");
// });

// btn.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.remove();
//   //   console.log("Hover");
// });
let i = 0;
const deleteElement = (event) => {
  // console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.type);
  // i++;
  // if (i === 1) {
  //   btn.removeEventListener("click", deleteElement);
  // }
};

// btn.addEventListener("click", deleteElement);
// // btn.removeEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event.target);
});
