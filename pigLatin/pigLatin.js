function pigLatin( str ) {

    //split the string
    let arrayOfString = str.split(' ');
    
    //loop over each string of the array and modify it according to Pig Latin
    //pattern is to split the word in 2 parts:
    // at first vowel split the word
    let pigLatinArray = arrayOfString.map( word=>{
    
    //where to split
    const indexToSplit = firstVowelIndex( word )

    //split
    const ending = word.slice( 0 , indexToSplit )
    const beginning = word.slice( indexToSplit )

    //recompose
    return `${beginning}${ending}ay`


    //-------functions---------
        function firstVowelIndex( singleWord ) {

            //if word begin with vowel, return 0
            if ( /^[aeiou]/.test(singleWord)) {

                return 0

            } else {

            //if vowel is after letter q, return index after vowel
            if ( /qu/.test( singleWord) &&
                ( singleWord.match(/[qu]/).index == 0 
                || singleWord.match(/[qu]/).index == 1) ) {

                    return (singleWord.match(/[qu]/).index+2)

                } else {

                    return singleWord.match(/[aeiou]/).index
                }            
            
            }


        }
    
    
    });

        

    return pigLatinArray.join(' ')
    

};
  
// Do not edit below this line
module.exports = pigLatin;
