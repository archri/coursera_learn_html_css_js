// function factory
function multiplier(factor) {
  return function(y) {
    return factor * y;
  }
}

var multiplyBy4 = multiplier(4);
console.log(multiplyBy4(7));
