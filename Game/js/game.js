var colors = generateRandomColors(6);
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var nbSquares = 6;
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  nbSquares = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  h1.style.background = "#536283";
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0 ; i < 3 ; ++i) {
    squares[i].style.background = colors[i];
  }
  for (var i = 3 ; i < 6 ; ++i) {
    squares[i].classList.remove("square");
  }
});

hardBtn.addEventListener("click", function() {
  nbSquares = 6;
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  h1.style.background = "#536283";
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0 ; i < 6 ; ++i) {
    squares[i].classList.add("square");
    squares[i].style.background = colors[i];
  }
});


reset.addEventListener("click", function() {
  reset.textContent = "NEW COLORS";
  message.textContent = "";
  h1.style.background = "#536283";
  //generate all new colors
  colors = generateRandomColors(nbSquares);
  //picked one color from the array
  pickedColor = pickColor();
  //change colordisplay to match pickedColor
  colorDisplay.textContent = pickedColor;

  for (var i = 0 ; i < squares.length ; ++i) {
    squares[i].style.background = colors[i];
  }
});


for (var i = 0 ; i < squares.length ; ++i) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listener to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor == pickedColor) {
      message.textContent = "CORRECT !";
      changeColors(pickedColor);
      h1.style.background = pickedColor;
      reset.textContent = "PLAY AGAIN ?";
    }
    else {
      this.style.background = "#232323";
      message.textContent = "TRY AGAIN !";
    }
  });
}

function changeColors(color) {
  //loop throught all squares
  for(var i = 0 ; i < squares.length ; ++i) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var array = [];
  for (var i = 0 ; i < num ; ++i) {
    array[i] = randomColor();
  }
  return array;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
