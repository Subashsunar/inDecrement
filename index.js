var _count = document.querySelector('#count');
var _increment = document.querySelector('#increment');
var _decrement = document.querySelector('#decrement');

var count = 0;

function inDeCrement() {
  _count.textContent = count;
};

_increment.addEventListener('click', function() {
  count++;
  inDeCrement();
});

_decrement.addEventListener('click', function() {
  if (count === 0) {
    return;
  } else {
    count--;
    inDeCrement();
  }
});
