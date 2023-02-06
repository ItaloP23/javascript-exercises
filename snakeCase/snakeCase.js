const snakeCase = function( str ) {

    //if the string includes the two points replace with a whitespace
    //then put the string to lower case
    if (str.includes('..')) {
        str = str.replace(/\.\./g,' ').toLowerCase()
    }
    
    // first: create an array of strings separating each word using match and Regex
    // join each word of the array with a _
    //put everything lowercase
    return str.match(/[a-z]+|[A-Z][a-z]+/g //one of more lowercase OR One Uppercase followed by more lowercase
    || /\b(\w+)\b/gi) //OR a group of characters (\w+) bounded by word boundaries
    .join('_')
    .toLowerCase()

};

// Do not edit below this line
module.exports = snakeCase;
