/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if(n === 0) return 1;

    let recursiveStep = factorial(n-1)

    return n * recursiveStep;
};

// console.log(factorial(5)); // 120
//------------------------------------------------------------------------------------------

// 2. Compute the sum of an array of integers.

var sum = function(array) {
    if(!array.length) return 0;

    let first = array[0]

    let recursiveCall = sum(array.slice(1))

    return first + recursiveCall;
};

// console.log(sum([1,2,3,4,5,6])); // 21

//------------------------------------------------------------------------------------------

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array){
    let newArr = array.flat(array.length)

    if(!newArr.length) return 0;

    let first = newArr[0]

    let recursiveCall = sum(newArr.slice(1))

    return first + recursiveCall;

}

// console.log(arraySum([1,[2,3],[[4]],5])); // 15

//------------------------------------------------------------------------------------------

// 4. Check if a number is even.
var isEven = function(num) {
        if (num == 1) return false;

        if (num == 0) return true;

        return isEven(num - 2);
};

// console.log(isEven(10));
//------------------------------------------------------------------------------------------

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

function sumBelow(n){
    if(n < 0) return null;

    if(n === 0) return 0; 

    let recursiveCall = sumBelow(n-1)

    return (n - 1) + recursiveCall;
  }

// console.log(sumBelow(10)); // 45
// console.log(sumBelow(7)); // 21
//------------------------------------------------------------------------------------------

// 6. Get the integers within a range (x, y).

var range = function(x, y, result = []) {
    if(y <= x) return result;

    if((y -1) === x) return result;

    result.push(x + 1)

    return range(x + 1, y, result)

};

// console.log(range(2,9)); // [3,4,5,6,7,8]
//------------------------------------------------------------------------------------------

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp < 0) return (1/ exponent(base, -exp));

    if(exp > 1) return (base * exponent(base, exp -1));

    if(exp === 1) return  base;
};

// console.log(exponent(4,3)); // 64
//------------------------------------------------------------------------------------------

// 8. Determine if a number is a power of two.

var powerOfTwo = function(n) {
    if(n === 1) return true;
    if (n <= 0) return false;

    return powerOfTwo(n / 2)
};

// console.log(powerOfTwo(1)); // true
// console.log(powerOfTwo(16)); // true
// console.log(powerOfTwo(10)); // false
//------------------------------------------------------------------------------------------

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if(!string.length) return "";

    let first = string[0]

    let recursiveStep = string.slice(1)

    return recursiveStep + first;
};

// console.log(reverse("house")); // "esuoh"
//------------------------------------------------------------------------------------------

// 10. Write a function that determines if a string is a palindrome.
const palindrome = str => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    
    return palindrome(str.slice(1,-1)) //would return aya
  }

// console.log(palindrome("kayak"))
//------------------------------------------------------------------------------------------

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.

//assuming they're all positive integers;

var modulo = function(x, y) {
    if(x < y) return x;

    return modulo(x - y, y);
};

// if including negative integers do;
// var modulo = function(x, y) {
//     if (y === 0)  return NaN;

//     if (x < 0)  return -modulo(-x,  y);   // -5 %  2  -> -(5 % 2)

//     if (y < 0)  return  modulo( x, -y);  //  5 % -2  ->   5 % 2

//     if (x < y)  return  x;
    
//     return modulo(x - y, y);
// };

// console.log(modulo(5,2)) // 1
// console.log(modulo(17,5)) // 2
// console.log(modulo(22,6)) // 4
//------------------------------------------------------------------------------------------

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y, product = 0) {
    if(y === 0) return product;

    if(y > 0) return multiply(x, y - 1, product += x)
};

// console.log(multiply(5,2)) // 10
// console.log(multiply(17,5)) // 85
// console.log(multiply(22,6)) // 132
//------------------------------------------------------------------------------------------

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

//if they wanted to return an exact amount with decimals would have to change code

var divide = function(a, b){
    if (a < b) return 0;

    return 1 + divide(a - b, b)
}

// console.log(divide(8,2)) // 4
// console.log(divide(25,5)) // 5
// console.log(divide(30,6)) // 5
//------------------------------------------------------------------------------------------

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.

// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if(x % y === 0) return y;

    if(y % x === 0) return x;

    if(x > y) return gcd(y, x % y)

    if(y > x) return gcd(x, y % x)
};

// console.log(gcd(4,36)); // 4
// console.log(gcd(31, 5)); // 1
// console.log(gcd(81, 9)); //9
//------------------------------------------------------------------------------------------

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.

var compareStr = function(str1, str2) {
    if(str1.length === 0 && str2.length === 0) return true;

    if(str1[0] === str2[0]) return compareStr(str1.slice(1), str2.slice(1))

    else return false; 
};

// console.log(compareStr('house', 'houses')) // false
// console.log(compareStr('tomato', 'tomato')) // true
// console.log(compareStr('bus', 'bart')) //false

//------------------------------------------------------------------------------------------

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, newArr = []) {
    if(str.length === 0) return newArr;

    newArr.push(str[0])

    return createArray(str.slice(1), newArr)
};

// console.log(createArray("Star Wars"));
// console.log(createArray("Harry Potter"));
//------------------------------------------------------------------------------------------

// 17. Reverse the order of an array
var reverseArr = function(array, newArr = []) {
    if(array.length === 0) return newArr;

    newArr.push(array[array.length -1])

    return reverseArr(array.slice(0, array.length -1), newArr)
};

// console.log(reverseArr([1, 2, 3, 4, 5])); //[ 5, 4, 3, 2, 1 ]
// console.log(reverseArr([20, 15, 10, 5, 0])); // [ 0, 5, 10, 15, 20 ]
//------------------------------------------------------------------------------------------

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, newArr =[]) {
    if(length === 0) return newArr;

    newArr.push(value)

    return buildList(value, length -1, newArr)
};

// console.log(buildList(0,5)) // [0,0,0,0,0]
// console.log(buildList(7,3)) // [7,7,7]
//------------------------------------------------------------------------------------------

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n, newArr = []) {
    // GO BACK TO !!!
    
};

// console.log(fizzBuzz(5)) // ['1','2','Fizz','4','Buzz']
// console.log(fizzBuzz(15)) // ['1','2','Fizz','4','Buzz', 'Fizz, 7, 8, 'Fizz', 'Buzz', 11, 'fizz', 13, 14, 'FizzBuzz]
//------------------------------------------------------------------------------------------

// 20. Count the occurrence of a value in a list.

var countOccurrence = function(array, value, count = 0) {
    if(array.length === 0) return count;

    if(array[0] === value) count++;

    return countOccurrence(array.slice(1), value, count);
};

// console.log(countOccurrence([2,7,4,4,1,4], 4)) // 3
// console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')) // 2
//------------------------------------------------------------------------------------------

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newArr = []) {
    if(!array.length) return newArr;

    let first = callback(array[0])

    newArr.push(first)

    return rMap(array.slice(1), callback, newArr)

};

// let timesTwo = function(n) {return n * 2}
// console.log(rMap([1,2,3], timesTwo)); // [2,4,6]
//------------------------------------------------------------------------------------------

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};
//------------------------------------------------------------------------------------------

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};
//------------------------------------------------------------------------------------------

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};
//------------------------------------------------------------------------------------------

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if(n <= 1 || n ===2 ) return 1;

    return fibonacci(n-1) + fibonacci(n-2)
};
// console.log(fibonacci(5)); // [0,1,1,2,3,5]
//------------------------------------------------------------------------------------------

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};
//------------------------------------------------------------------------------------------

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};
//------------------------------------------------------------------------------------------

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};
//------------------------------------------------------------------------------------------

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};
//------------------------------------------------------------------------------------------

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    let result = []

    for(let el of array){
        if(Array.isArray(el)) {
            result.push(...flatten(el))
        }
        else result.push(el)
    }
    return result;
};

// console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]
//------------------------------------------------------------------------------------------

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};
//------------------------------------------------------------------------------------------

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};
//------------------------------------------------------------------------------------------

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};
//------------------------------------------------------------------------------------------

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};
//------------------------------------------------------------------------------------------

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};
//------------------------------------------------------------------------------------------

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

//------------------------------------------------------------------------------------------
// // *** EXTRA CREDIT ***

// // 37. Return the number of times a tag occurs in the DOM.
// var tagCount = function(tag, node) {
// };

// // 38. Write a function for binary search.
// // var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// // binarySearch(array, 5) // 5
// // https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// var binarySearch = function(array, target, min, max) {
// };

// // 39. Write a merge sort function.
// // mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// // https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
// var mergeSort = function(array) {
// };

// // 40. Deeply clone objects and arrays.
// // var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// // var obj2 = clone(obj1);
// // console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// // obj1 === obj2 // false
// var clone = function(input) {
// };

// // //bubble sort
// // function bubbleSort(arr) {

// //     // Iterate through the array
// //     for(let i = 0; i < arr.length; i++){
// //     let el = arr[i]
  
// //       // If the current value is greater than its neighbor to the right
// //         // Swap those values
  
// //       // If you get to the end of the array and no swaps have occurred, return
  
// //       // Otherwise, repeat from the beginning
// //     }
// // }

