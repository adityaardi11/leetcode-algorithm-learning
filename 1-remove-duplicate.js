// question : https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums){
    let s=new Set(nums);
  	let sr = [...s.values()];

    for(let i=0;i<sr.length;i++){
        nums[i] = sr[i];
    }
    return s.size;
};