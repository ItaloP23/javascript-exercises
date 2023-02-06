const leapYears = function( year ) {

    // being divisible by 4 is a necessary condition
    if ( year % 4 === 0 ) {

        // if year is divisible by 100 but not divisible by 400 return false
        if ( year % 400 !== 0 && year % 100 === 0 ) {
            return false;
        } else return true;
    } else return false

};

// Do not edit below this line
module.exports = leapYears;
