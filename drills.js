'use strict';

//FIND A BOOK
//Find book in library with a Dewey Decimal index--how to find?  Express this process as a searching algorithm
//look at first node, 


/*
 const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];
*/

// use binary search to find the right dewey decimal 
// then go in one direction (of those dewey decimals), checking for the title
// when we reach a number that isn't that dewey decimal
// go in the other direction from the original object
// when we reach a number that isn't that dewey decimal
// if it's not there,
// return an error


// max profit : Max profit
// The share price for a company over a week's trading is as follows: 
// [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, 
// and sell the shares on one of the following days, write an algorithm to work out what the maximum profit you could make would be.

// need to find the min first
// what if there are multiple minimums?

// need to find the max (after the min)
// what if there are multiple maximums?
// return the difference

// nested for loops ? not good
// 
// 

function maxProfit (array) {
  const length = array.length;
  let max = array[length-1];
  let profit = 0;
  for (let i = length - 2; i >= 0; i--) { // starting from the second to last
    if (array[i] > max) max = array[i];
    if (max - array[i] > profit) profit = (max - array[i]);
  }
  return profit;
  // input array
  // output max Profit
}

console.log(maxProfit([128, 97, 100, 123, 98, 97, 105, 5, 35]));
// 123,
