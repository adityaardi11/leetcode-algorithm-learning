/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i],i);
        } else {
            return true;
        }
    }

    return false;
};

nums = [1,3,5,7,9,2,8];

console.log(containsDuplicate(nums));