const sumAll = function( a , b ) {

    //declare variables
    let min , max , sum;

    //check if arguments are number variables type
    if ( ( typeof(a)!=='number' ) | ( typeof(b) != 'number' ) ) {
        return 'ERROR'
    } else if ( (a < 0) | (b<0) ) {  //check if arguments are positive numbers
        return 'ERROR'
    }

    // setting max and min between the arguments
    if ( b >=a ) {
        max = b;
        min = a;
    } else {
        max = a;
        min = b;
    }

    
    sum = min;

    //loop from min to max and each iteration update sum with i value
    for ( let i = min+1 ; i<=max ; i++ ) {
        sum += i;
    }

    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
