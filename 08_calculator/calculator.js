const add = function( a , b ) {
  return a+b
};

const subtract = function( a , b) {
	return a-b
};

const sum = function(x) {

  let y = x.reduce( (previous,current) => {
    return previous+current
  } , 0); 

  return y
};

const multiply = function(x) {

  let y = x.reduce( (previous,current) => {
    return previous*current
  } , 1);

  return y

};

const power = function( base , exponent ) {
	
  if (exponent === 0 ) return 1
  else if (exponent === 1 ) return base
  
  let y=base;
  for (let i = 2 ; i<=exponent ; i++) {
    y*=base;
  }

  return y
};

const factorial = function(n) {

  if ( n === 0 ) return 1
	return n * factorial(n-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
