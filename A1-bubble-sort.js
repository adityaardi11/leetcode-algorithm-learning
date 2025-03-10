// const arr = [45, 69, 19, 15, 73, 9, 58, 72, 58, 59, 35, 72, 72, 46, 27, 59, 44, 68, 72, 14, 23, 67, 78, 40, 38, 13, 80, 73, 2, 70, 12, 7, 73, 20, 76, 34, 17, 68, 68, 27, 17, 65, 3, 79, 76, 52, 51, 80, 57, 51];
//generate 1000 random array
let sorted_arr = [];
function bubbleSort(arr) {
    //benchmark this
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    let end_time = performance.now();
    return arr;
}

function selectionSort(arr) {
    let tmp = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;

    }
    return arr;
}

function insertionSort(arr) {
    let tmp = 0;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        tmp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = tmp;
    }
    arr;
    return arr;
}

function merge(left, right) {
    let result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il), right.slice(ir));
}
function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

}

function quickSort(arr) {

    if (arr.length <= 1) {
        console.log(arr);
        return arr;
    }

    let pivIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivIndex];

    let left_arr = [];
    let right_arr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left_arr.push(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > pivot) right_arr.push(arr[j]);
    }

    let left = quickSort(left_arr);
    let right = quickSort(right_arr);

    return left.concat(arr[pivIndex]).concat(right);

}

const arr = new Array(1000).fill(0).map(() => Math.floor(Math.random() * 1000));
// const arr = [5, 7, 1, 8, 6, 2, 9];

let start_time = performance.now();

// sorted_arr = bubbleSort(arr);
// sorted_arr = selectionSort(arr);
// sorted_arr = insertionSort(arr);
// sorted_arr = mergeSort(arr);
sorted_arr = quickSort(arr);

let end_time = performance.now();
let time_elapsed = (end_time - start_time);
console.log("Time elapsed: " + (time_elapsed / 1000) + "s");
sorted_arr;
const sorted = `[${sorted_arr.join(",")}]`;
