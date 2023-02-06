const findTheOldest = function( people ) {

    let oldest;
    let age;

// if the first person is still alive (not dead) then get the current year
    if (!people[0].yearOfDeath) {
        const now = new Date();
        people[0].yearOfDeath=now.getFullYear();
    }
// assign the first person as the oldest
    let ageOldest = people[0].yearOfDeath-people[0].yearOfBirth; 

// loop over the array of people
    for ( let person of people) {

        // if the current person is not dead, assign the current year
        if (!person.yearOfDeath) {
            const now = new Date();
            person.yearOfDeath=now.getFullYear();
        } 

        //get the age of the current person
        age = person.yearOfDeath - person.yearOfBirth;

        //compare the age of the current person with the oldest
        // is it is older, set the current person as the oldest
        if (age >= ageOldest) {
            oldest = person;
            ageOldest = age;
        };

    }
    return oldest

};

// Do not edit below this line
module.exports = findTheOldest;
