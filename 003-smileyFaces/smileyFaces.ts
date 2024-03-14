const countSmileys2 = (arr: Array<string>): number => {
  return arr.filter((el) => /^[;:][~-]?[D)]$/.test(el)).length;
}

// /: Delimiters indicating the start of the regular expression.
// ^: Anchors the regex at the beginning of the input string.
// [;:]: A character class that matches either a semicolon ; or a colon :.
// [~-]?: An optional character class that matches either a tilde ~ or a hyphen -.
// [D)]: A character class that matches either a capital 'D' or a closing parenthesis ).
// $: Anchors the regex at the end of the input string.
// /: Delimiters indicating the end of the regular expression.
// So, this regular expression is checking if a given string (el) meets the following criteria:

// Starts with either a semicolon ; or a colon :.
// May have an optional tilde ~ or hyphen -.
// Ends with either a capital 'D' or a closing parenthesis ).
// The test method is used to check whether the given string matches the regular expression. If the string matches, the method returns true; otherwise, it returns false