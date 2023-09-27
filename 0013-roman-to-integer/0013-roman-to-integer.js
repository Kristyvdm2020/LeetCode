/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let nums = {
        'I': 1,
        'V': 5, 
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for(let i = 0; i < s.length; i++) {
        const current = s[i];
        const next = s[i+1];
        if(nums[next] > nums[current] && nums[next] !== undefined) {
            total += nums[next] - nums[current];
            i++;
        } else {
            total += nums[current];
        }
    }
    return total;
};