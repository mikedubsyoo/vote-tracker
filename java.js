
var arr = ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/07.jpg", "images/08.jpg", "images/09.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg"]
var getpic = function() {
  document.getElementById('leftpic').src = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById('leftpic').style.borderColor = "blue";
};
var getpic1 = function() {
  document.getElementById('rightpic').src = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById('rightpic').style.borderColor = "green";
};
console.log(getpic1(), getpic());
if (getpic1() == getpic()) {
  document.getElementById('rightpic').src = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById('leftpic').src = arr[Math.floor(Math.random() * arr.length)];
};
document.getElementById("leftpic").addEventListener('click', function colors() {
    document.getElementById("leftpic").style.borderColor = "red";
  });
document.getElementById("rightpic").addEventListener('click', function colors() {
    document.getElementById("rightpic").style.borderColor = "red";
  });

