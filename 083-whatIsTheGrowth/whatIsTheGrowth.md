Write the function` getGrowth()`, which accepts an arbitrary number of comma separated integers and returns the difference between each subsequent and previous number in the series, as a string.

The function must return a string value where each "growth instance" is separated by a comma followed by a space character.

## Example 1:
`getGrowth(1, 2, 3)  // returns the string: "1 (+0, +0%), 2 (+1, +100%), 3 (+1, +50%)"`

In the above example the returned string says that:

- The first number: 1, is not higher or lower than the previous number (because it is the first number in the queue), therefore both the difference and the percent difference are zero.
- The second number: 2, is "+1". I.e. the difference between the second and the first number in the series.
- The third number: 3, is also "+1". I.e. the difference between the third and second number in the series.

The format of the string must be on the following format: current (diff diffPercent)... and so on separated by ", " (a comma and a space).

**Where**

- `current` is the current integer.
- `diff` is the difference between the current integer and the previous integer (if it is the first integer the previous integer is assumed to be zero).
- And `diffPercent` is the rounded percentual difference between the current integer and the previous integer.

Let's look at another example.

## Example 2:
`getGrowth(5, 10, 25)  // returns the string: "5 (+0, +0%), 10 (+5, +100%), 25 (+15, +150%)"`

- The first number is 5 and the difference and percent difference are again both zero (since it is the first in the queue)
- The second number is 10 and the difference between 10 and 5 is a positive five (+5). The percentual difference between 10 and 5 is a 100%. I.e. 10 is 100% larger than 5.
- The third number is 25. The difference between the previous number: 10, and the current number: 25, is a positive fifteen (+15). The percentual difference between 25 and 10 is +150%.

The function shall also be able to handle a declining growth.

## Example 3:
`getGrowth(100, 50, 10) // returns the string: "100 (+0, +0%), 50 (-50, -50%), 10 (-40, -80%)"`

## Restrictions:
- You can assume that the function will only recieve integers.
- You can assume that the function will not recieve any zeroes or negative numbers.

## Tips:
- Use Math.round() for the diffPercent value.
- Don't forget to add space character after your comma (i.e the comma that is used a separator in the resulting string)
- Positive numbers and zero must be preceeded by a plus sign. - - Negative numbers must be preceeded by a minus sign.