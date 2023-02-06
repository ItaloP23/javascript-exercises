const repeatString = function( str , num ) {
    
    // creates a new string to store the repeated strings
    let newStr='';
    
    for (let i = 1 ; i<=num ; i++) {
        //add every time the string
        newStr+=str;
    }

    if (num < 0) return 'ERROR';

    return newStr;

};

// Do not edit below this line
module.exports = repeatString;
