// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  name = 'Ralpe';
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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



