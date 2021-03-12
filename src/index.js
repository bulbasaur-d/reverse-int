module.exports = function reverse(n) {
    if (n > 0) {
        aStr = String(n).split('').reverse().join('');
        return aStr;
    } else {
        aStr = -n;
        aStr = String(-n).split('').reverse().join('');
        return aStr;
    }

}