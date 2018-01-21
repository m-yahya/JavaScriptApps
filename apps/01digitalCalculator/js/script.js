var buttonOne = document.getElementById('buttonOne');
buttonOne.addEventListener('click', function () {
  calc.display.value+=1;
});
var buttonTwo = document.getElementById('buttonTwo');
buttonTwo.addEventListener('click', function () {
  calc.display.value+=2;
});
var buttonThree = document.getElementById('buttonThree');
buttonThree.addEventListener('click', function () {
  calc.display.value+=3;
});
var buttonFour = document.getElementById('buttonFour');
buttonFour.addEventListener('click', function () {
  calc.display.value+=4;
});
var buttonFive = document.getElementById('buttonFive');
buttonFive.addEventListener('click', function () {
  calc.display.value+=5;
});
var buttonSix = document.getElementById('buttonSix');
buttonSix.addEventListener('click', function () {
  calc.display.value+=6;
});
var buttonSeven = document.getElementById('buttonSeven');
buttonSeven.addEventListener('click', function () {
  calc.display.value+=7;
});
var buttonEight = document.getElementById('buttonEight');
buttonEight.addEventListener('click', function () {
  calc.display.value+=8;
});
var buttonNine = document.getElementById('buttonNine');
buttonNine.addEventListener('click', function () {
  calc.display.value+=9;
});
var buttonZero = document.getElementById('buttonZero');
buttonZero.addEventListener('click', function () {
  calc.display.value+=0;
});

var buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', function () {
  calc.display.value+='+';
});
var buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', function () {
  calc.display.value+='-';
});
var buttonMultiply = document.getElementById('buttonMultiply');
buttonMultiply.addEventListener('click', function () {
  calc.display.value+='*';
});
var buttonDivide = document.getElementById('buttonDivide');
buttonDivide.addEventListener('click', function () {
  calc.display.value+='/';
});
var buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', function () {
  calc.display.value='';
});
var buttonEqual = document.getElementById('buttonEqual');
buttonEqual.addEventListener('click', function () {
  calc.display.value=eval(calc.display.value);
});
calc.display.value='';
