const leapYears = function(year) {
    let yeardivisibleBy4 = year % 4 === 0;
    let yeardivisibleBy100 = year % 100 === 0;
    let yeardivisibleBy400 = year % 400 === 0;
    if (yeardivisibleBy4 && (!yeardivisibleBy100 || yeardivisibleBy400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
