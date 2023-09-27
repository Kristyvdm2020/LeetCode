/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newNum = x.toString();
    let mirror = '';
    for(let i = newNum.length - 1; i >= 0 ; i--) {
        mirror += newNum[i];
    }
    if(mirror !== newNum) {
        return false;
    }
    return true;
};