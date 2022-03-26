const findTheOldest = function(people) {
    const ages = people.map(person => (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth);
    const maxAge = ages.reduce((result, age) => age > result ? age : result, 0);
    return people[ages.findIndex(a => a === maxAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
