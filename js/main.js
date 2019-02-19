var colors = [rgbColor(), rgbColor(), rgbColor(), rgbColor(), rgbColor(), rgbColor()];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var message = document.querySelector(".message");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var h1 = document.querySelector("h1");
var newColor = document.querySelector(".newColor");

newColor.addEventListener("click",function(){
  colors = [rgbColor(), rgbColor(), rgbColor(), rgbColor(), rgbColor(), rgbColor()];
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#232323";
  message.textContent = " ";
  newColor.textContent = "New Color";
  for(var i = 0; i <= squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  };
});

easy.addEventListener("click",function(){
  for(var i = 3; i <= squares.length; i++){
    squares[i].classList.add("hide");
  }
});

hard.addEventListener("click",function(){
  for(var i = 3; i <= squares.length; i++){
    squares[i].classList.remove("hide");
  }
});

colorDisplay.textContent = pickedColor;

function randomRGB(){
  var randomNums = Math.floor(Math.random() * 256);
  return randomNums;
}

function rgbColor(){
  return  "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
}

function pickColor(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function changeColor(color){
  for(var i = 0; i <= squares.length; i++){
    squares[i].style.backgroundColor = color;
  };
}

for(var i = 0; i <= squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      message.textContent = "Correct!";
      h1.style.backgroundColor = pickedColor;
      newColor.textContent = "Play Again";
      changeColor(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  });
}
