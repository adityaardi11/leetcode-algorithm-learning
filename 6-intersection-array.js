let input = {
  nums1: [4, 9, 5],
  nums2: [9, 4, 9, 8, 4]
};

// input = {
//   nums1: [1, 2, 2,1],
//   nums2: [2,2]
// };
// input = {
//     nums1: [1],
//     nums2: [1]
// };

// input = {
//   nums1: [2,1],
//   nums2: [1,2]
// };


function intersection(input) {
  let output = [];

  let arr1 = input.nums1.sort();
  let arr2 = input.nums2.sort();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        i--;
        j--;
      }
    }
  }

  return output;
}

let output = intersection(input);
console.log(output);
