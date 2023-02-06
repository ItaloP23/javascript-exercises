const palindromes = function ( givenString ) {

    /*put everything lower case*/
    givenString = givenString.toLowerCase();

    /*store in an array each character of the string,
    except spaces and punctuations */
    const arrayChar = givenString.match(/\w/gi);

    /*create a string from givenString without
    spaces and punctuations*/
    const cleanString = arrayChar.join('');
    
    /*reverse the array with the givenString without
    spaces and punctuation*/
    const arrCharReverse = arrayChar.reverse();

    /*create the string reverse*/
    const givenStringReverse = arrCharReverse.join('');

    /*compare the two strings*/
    if ( cleanString === givenStringReverse ) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
