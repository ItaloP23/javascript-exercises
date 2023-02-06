const fibonacci = function(n) {

    if ( n < 0 ) return 'OOPS'

    if ( n == 1 ) return 1;

    let last = 1;
    let secondToLast = 0;
    let nthFibonacci;

    for ( i = 2 ; i<= n ; i++ ) {

        nthFibonacci = last + secondToLast;
        secondToLast = last;
        last = nthFibonacci;

    }

    return nthFibonacci

};

// Do not edit below this line
module.exports = fibonacci;
