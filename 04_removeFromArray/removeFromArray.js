const removeFromArray = function( initialArray , ...elementsToRemove ) {

    //store the initialArray in newArray
    let newArray = initialArray;

    // loop over the elements to remove
    for ( const elementToRemove of elementsToRemove) {

        //give back all the items different from the element to remove
        newArray = newArray.filter( e => e!==elementToRemove)

    }

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
