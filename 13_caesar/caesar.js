const caesar = function( str , shift ) {

    //input: string and a integer number which is the steps each character has to "move"
    //output: string

    //split string in single characters and put them into an array
    let singleChar = str.split('')
    //convert the characters in their unicode values -> string.charCodeAt(index)
    let unicodeArray = singleChar.map ( x => x.charCodeAt(0) );// unicode -> 65-90: A-Z , 97-122: a-z

    // shift each char of the shift number
    unicodeArrayShifted = unicodeArray.map ( ( x=> x=shifter(x , shift )) )

    //from unicode get back the string ->string.fromCharCode(num1,num2,....)
    return String.fromCharCode(...unicodeArrayShifted)

//--------------------functions------------------------------
    //function shifter
    function shifter( oldUnicode , num ) {
      
        //declare new unicode variable
        let newUnicode;

        //calculate che new unicode variable in the case that is a Upper or Lower case
        if ( isUpperCase(oldUnicode) ) {

            return newUnicode = mod( (oldUnicode +  num) - 65, 26)+65 //26 are the letters A-Z

        } else if  ( isLowerCase(oldUnicode)  ) {

            return newUnicode = mod( (oldUnicode +  num) - 97, 26)+97

        } else return oldUnicode //if it's not a char, return the old unicode


        //function to check if is a upper or lower character
        function isUpperCase( unicode ) {
            if (unicode>=65 && unicode<=90) {
                return true
            }
            return false
        }

        function isLowerCase( unicode ) {
            if (unicode>=97 && unicode<=122) {
                return true
            }
            return false
        }

        //function for negative reminder
        function mod(n, m) {
            return ((n % m) + m) % m;
          }

    }

};

// Do not edit below this line
module.exports = caesar;
