let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
const audio = document.getElementById('myAudio');

spinBtn.onclick = function () {
  wheel.style.transform = 'rotate(' + value + 'deg)';
  value += Math.ceil(Math.random() * 3600);
};

const button = document.getElementById('mybutton');
button.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 1!');
});

const button2 = document.getElementById('mybutton2');
button2.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 2!');
});

const button3 = document.getElementById('mybutton3');
button3.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 3!');
});

const button4 = document.getElementById('mybutton4');
button4.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 4!');
});

const button5 = document.getElementById('mybutton5');
button5.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 5!');
});

const button6 = document.getElementById('mybutton6');
button6.addEventListener('click', function () {
  audio.play();
  alert('You clicked Button 6!');
});
