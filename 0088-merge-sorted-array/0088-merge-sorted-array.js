/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    /*if(n === 0) {
        return nums1;
    } else if (m === 0) {
        for(let k = 0; k < n; k++) {
            nums1[k] = nums2[k];
        }
        return nums1;
    }
    */
    
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
    
    /*for(let i = 0; i < n; i++) {
        const num2Current = nums2[i];
        
        for(let j = 0; j < m + n; j++) {
            const num1Current = nums1[j];
             if( num1Current < num2Current && num1Current === 0 && nums1[j-1] !== 0) {
                nums1[j] = num2Current;
                //console.log(nums1);
                break;
            } 
           /* if( num1Current > num2Current ) {
                let remainder = nums1.slice(j, m + n - 1);
                let remainingNums = remainder.length;
                nums1[j] = num2Current;
                
                while(remainingNums > 0) {
                    nums1[j + remainingNums] = remainder[remainingNums - 1];
                    remainingNums--;
                }
                break;
            } */
        

    
   return nums1;
};