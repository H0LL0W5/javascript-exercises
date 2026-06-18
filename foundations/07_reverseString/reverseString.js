const reverseString = function(string) {
    let word = "";
    for (let i = string.length - 1; i >= 0; i--)
    {
        word += string[i]
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
