const fibonacci = function(num) {
    let p_num;
    if (typeof num !== 'number') {
        p_num = parseInt(num);
    }
    else {
        p_num = num;
    }

    if (p_num < 0) {
        return "OOPS";
    } else if (p_num === 0) {
        return 0;
    }
    
    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= p_num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
}

// Do not edit below this line
module.exports = fibonacci;
