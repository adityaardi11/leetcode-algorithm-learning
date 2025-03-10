/**
 * Finds two numbers in the given array that add up to the target value.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target value.
 * @returns {number[]} - An array containing the indices of the two numbers.
 */
function twoSum(nums, target) {
    // Create a map to store the numbers and their indices
    let map = new Map();
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        let complement = target - nums[i];
        // Check if the complement exists in the map
        if (map.has(complement)) {
            // If it does, return the indices of the two numbers
            return [map.get(complement), i];
        } else {
            // Otherwise, add the current number and its index to the map
            map.set(nums[i], i);
        }
        // Check if the current number already exists in the map
        if (map.has(nums[i])) {
            // If it does and the index is different from the current index,
            // return the indices of the two numbers
            if (map.get(nums[i]) !== i) {
                return [map.get(nums[i]), i];
            }
        }
    }
}

let nums = [3,2,4];
let target = 7;

let output = twoSum(nums, target);
console.log(output);