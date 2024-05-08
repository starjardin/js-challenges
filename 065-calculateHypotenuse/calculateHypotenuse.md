To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

- The returned value should be a number rounded to three decimal places
- An error (`ArgumentException in C#`) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)

```javascript
calculateHypotenuse(1, 1); // returns 1.414
calculateHypotenuse(3, 4); // returns 5
calculateHypotenuse(-2, 1); // throws error
calculateHypotenuse("one", "two"); // throws error
```
