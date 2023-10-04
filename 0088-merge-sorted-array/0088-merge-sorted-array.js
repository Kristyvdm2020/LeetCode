/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    //Adding the numbers from second array to the first
    for(let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    
    
    //Sort the array
    for(let j = 0; j < m + n - 1; j++) {
        const current = nums1[j];
        for(let k = j + 1; k < m + n; k++) {
            const next = nums1[k];
            if( next < current) {
                let reorder = nums1.slice(j, k);
                let remainingNums = reorder.length;
                nums1[j] = next;
                
                while(remainingNums > 0) {
                    nums1[j + remainingNums] = reorder[remainingNums - 1];
                    remainingNums--;
                }
                
                console.log(nums1);
                break;
            }
        }
        
    }
   return nums1;
};