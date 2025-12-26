import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car', 'my phone'];
  let when = ['before class', 'right on time', 'when I was sleeping', 'during lunch'];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
}

  const excuseEl = document.querySelector("#excuse");
  const btn = document.querySelector("#btn");

  excuseEl.innerHTML = generateExcuse();

btn.addEventListener("click", function () {
  excuseEl.style.opacity = 0;
  setTimeout(() => {
    excuseEl.innerHTML = generateExcuse();
    excuseEl.style.opacity = 1;
  }, 150);
});

};


