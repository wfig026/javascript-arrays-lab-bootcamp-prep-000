// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  name = 'Ralph';
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.shift(name);
  name = 'Bob';
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  
}

function appendKitten(name) {
  
}

function prependKitten(name) {
  
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}



