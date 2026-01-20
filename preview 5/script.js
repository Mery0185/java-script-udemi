"use strict";

const box = document.querySelector(".box");

let obsever = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
});

obsever.observe(box, {
  childList: true,
});

obsever.disconnect();
