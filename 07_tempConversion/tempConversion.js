const convertToCelsius = function( x ) {

  let y = ( x - 32 ) * 5/9;
  y = Math.round( y * 10 ) / 10;
  return y
};

const convertToFahrenheit = function( x ) {

  let y = ( x * 9/5 + 32) ;
  y = Math.round( y * 10 ) / 10
  return y
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
