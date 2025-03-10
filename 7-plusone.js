/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let output;
    let rev_digits = [...digits].reverse();

    let carry = 0;

    for (let i = 0; i < rev_digits.length; i++) {

        if(i === 0){
            rev_digits[i] += 1;
        }

        if(rev_digits[i] + carry === 10) {
            rev_digits[i] = 0;
            carry = 1;
        } else {
            rev_digits[i] += carry;
            carry = 0;
        }
    }

    if(carry === 1) {
        output = [...rev_digits,1].reverse();
    } else {
        output = [...rev_digits].reverse();
    }


    return output;
};

let input = [1,2,3];
input = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

let output = plusOne(input);
console.log(output);