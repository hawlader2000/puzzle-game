let whitePosition = 2;
let temp = 0;
let turn = 0;
const imageOrder = [
  "images/0.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
];

const imageOrder2 = [
  "images/0.jpg",
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  whitePosition = imageOrder.indexOf("images/2.jpg");

  let imageBox = "";
  for (let i = 0; i < imageOrder.length; i++) {
    imageBox += `<div class="image">
  <img src=${imageOrder[i]} alt="" srcset="">
  </div>`;
  }

  document.getElementById("puzzle").innerHTML = imageBox;
}
console.log(shuffle(imageOrder));

function welcome(a, b) {
  let isEqual = JSON.stringify(a) === JSON.stringify(b);
  if (isEqual) {
    window.location = "file:///home/fariha/Music/Puzzle%20Game/confitti.html";
  }
}

const handleKeyDown = (e) => {
  if (e.key === "ArrowLeft") {
    if (whitePosition + 1 > 8) return;
    if (whitePosition + 1 == 6) return;
    if (whitePosition + 1 == 3) return;
    temp = imageOrder[whitePosition + 1];
    imageOrder[whitePosition + 1] = imageOrder[whitePosition];
    imageOrder[whitePosition] = temp;
    whitePosition = whitePosition + 1;
  } else if (e.key === "ArrowRight") {
    if (whitePosition - 1 < 0) return;
    if (whitePosition - 1 == 5) return;
    if (whitePosition - 1 == 2) return;
    temp = imageOrder[whitePosition - 1];
    imageOrder[whitePosition - 1] = imageOrder[whitePosition];
    imageOrder[whitePosition] = temp;
    whitePosition = whitePosition - 1;
  } else if (e.key === "ArrowUp") {
    if (whitePosition + 3 > 8) return;
    temp = imageOrder[whitePosition + 3];
    imageOrder[whitePosition + 3] = imageOrder[whitePosition];
    imageOrder[whitePosition] = temp;
    whitePosition = whitePosition + 3;
  } else {
    if (whitePosition - 3 < 0) return;
    temp = imageOrder[whitePosition - 3];
    imageOrder[whitePosition - 3] = imageOrder[whitePosition];
    imageOrder[whitePosition] = temp;
    whitePosition = whitePosition - 3;
    if (temp == whitePosition[imageOrder[2]] && e.key === "ArrowDown") {
      return (e.key = null);
    }
  }
  turn += 1;
  document.getElementById("turns").innerText = turn;
  localStorage.setItem("badol", turn);

  document.getElementById("hello2").innerHTML = JSON.parse(
    localStorage.getItem("badol")
  );

  let imageBox = "";
  for (let i = 0; i < imageOrder.length; i++) {
    imageBox += ` <div class="image">
        <img src=${imageOrder[i]} alt="" srcset="">
    </div>`;
  }

  console.log(imageBox);
  const puzzle = (document.getElementById("puzzle").innerHTML = imageBox);
  console.log(puzzle);
  welcome(imageOrder, imageOrder2);
};
document.addEventListener("keydown", handleKeyDown);

document.getElementById("hello2").innerHTML = localStorage.getItem("badol");
