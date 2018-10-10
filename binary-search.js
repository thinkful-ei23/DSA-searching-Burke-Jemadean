'use strict';
function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  // we haven't found the item past our end condition, return -1
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) { // if item is less than value, then we know it's in the second half of the array
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) { // if item is greater tha nvalue, then we know it's in the first half of the array
    return binarySearch(array, value, start, index - 1);
  }
}

function makeArray(string) {
  const newArray = string.split(' ').map(element => parseInt(element, 10)).sort((a,b) => a - b).join(', ');
  console.log(newArray);
}