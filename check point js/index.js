let buttonplus = document.getElementsByClassName("add");
for (let x of buttonplus) {
  x.addEventListener("click", function () {
    x.nextElementSibling.innerHTML++;
    somme();
  });
}

let buttonmoins = document.getElementsByClassName("moins");
for (let x of buttonmoins) {
  x.addEventListener("click", function () {
    if (x.previousElementSibling.innerHTML > 0) {
      x.previousElementSibling.innerHTML--;
      somme();
    }
  });
}

let hearts = document.getElementsByClassName("fas fa-heart");

for (let x of hearts) {
  x.addEventListener("click", function () {
    if (x.style.color == "red") {
      x.style.color = "gray";
    } else {
      x.style.color = "red";
    }
  });
}
let buttonremove = document.getElementsByClassName("fas fa-trash");

for (let x of buttonremove) {
  x.addEventListener("click", function () {
    x.parentNode.remove();
    somme();
  });
}

somme = function () {
  let achat = Array.from(document.getElementsByClassName("achat"));
  let prix = Array.from(document.getElementsByClassName("prix"));
  let sum = 0;

  for (let i = 0; i < achat.length; i++) {
    sum += achat[i].innerHTML * prix[i].innerHTML;
  }
  document.getElementById("total").innerHTML = sum;
};
