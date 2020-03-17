### Filter
Implement the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter) function.
```javascript
filter([1, 2, 3, 4], n => n < 3) // [1, 2]
```

### Reduce
Implement the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function.
```javascript
reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
```

### Reverse
Reverses the given string
```javascript
reverse('') // ''
reverse('abcdef') // 'fedcba'
```

### Index of
Implement the [indexOf](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function for arrays.
```javascript
indexOf([1, 2, 3], 1) // 0
indexOf([1, 2, 3], 4) // -1
```

### Is palindrome
Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
```javascript
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true
```

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
