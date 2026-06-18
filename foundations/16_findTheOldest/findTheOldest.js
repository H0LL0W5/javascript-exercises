const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : 2023 - oldest.yearOfBirth;
        const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : 2023 - current.yearOfBirth;
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
