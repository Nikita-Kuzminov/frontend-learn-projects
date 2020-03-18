### Filter
Implement the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter) function.
```javascript
filter([1, 2, 3, 4], n => n < 3) // [1, 2]
```
The solution of the problem:

const n = ['1', '2', '3', '4'];
const result = n.filter(num => num < 3);
console.log(result);

### Reduce
Implement the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function.
```javascript
reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
```
The solution of the problem:

const array1 = [1, 2, 3, 4];
const reducer = (a, b) => a + b;
console.log(array1.reduce(reducer, 0));

### Reverse
Reverses the given string
```javascript
reverse('') // ''
reverse('abcdef') // 'fedcba'
```
The solution of the problem:

const arr = ['']
console.log('array: ', arr.reverse()); 

const arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log('array: ', arr.reverse()); 

### Index of
Implement the [indexOf](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function for arrays.
```javascript
indexOf([1, 2, 3], 1) // 0
indexOf([1, 2, 3], 4) // -1
```
The solution of the problem:
const a = ['1', '2', '3'];
console.log(a.indexOf('1'));

`Implemented in another way`
const b = ['1', '2', 3];
indB = b.indexOf('2');
console.log(indB);

### Is palindrome
Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
```javascript
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true
```
The solution of the problem:



### Missing
Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
```javascript
missing([])                         // undefined
missing([1, 4, 3])                  // 2
missing([2, 3, 4])                  // 1
missing([5, 1, 4, 2])               // 3
missing([1, 2, 3, 4])               // undefined
```


### Is balanced
Takes a string and returns true or false indicating whether its curly braces are balanced.
```javascript
isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false
```
