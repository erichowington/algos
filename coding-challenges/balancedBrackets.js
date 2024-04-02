// Challenge: 23-balancedBrackets
// Difficulty:  Intermediate
// Prompt:
// - Write a function called balancedBrackets that accepts a single string as argument.
// - The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
// - The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
// - The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
// Examples:
// balancedBrackets( '()' ) // => true
// balancedBrackets( '(]' ) // => false
// balancedBrackets( '[{}]' ) // => true
// balancedBrackets( '[(])' ) // => false
// balancedBrackets( '[({}[])]' ) // => true

function balancedBrackets(str) {
  let x = [];
  return (
    str 
      .split("")
      .every((i) =>
        "([{".includes(i) ? x.push(i) : "() {} []".includes(x.pop() + i)
      ) && x.length === 0
  );
}
