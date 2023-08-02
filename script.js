console.log("hello");
let count = 0;
let add = document.getElementById("button");

let int = document.getElementById("number");

add.addEventListener("click", function () {
  count += 1;
  int.innerHTML = count;
});
