const reverseString = function( str ) {

    //place every character of the string in an array
    const charArr = str.split('');

    //reverse the charArr
    const revCharArr = charArr.reverse();

    //join each character in a new string
    const revStr = revCharArr.join('');

    return revStr;

};

// Do not edit below this line
module.exports = reverseString;
