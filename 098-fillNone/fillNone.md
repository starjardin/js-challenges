## Task

Write a function that accepts a list that can contain missing data, and an integer representing the method on how to fill the missing data if there is any. Missing data is represented as `undefined`. The list will only contain integers and `undefined` values.

The fill method rules are outlined below:

```javascript
Fill method: 
  -1: backwards 
   0: nearest      
   1: forwards
```

## Example

```javascript
arr = [None, 1, None, None, None, 2, None]

fill(arr, -1) == [1, 1, 2, 2, 2, 2, None]  # None replaced by closest int on the right
fill(arr,  0) == [1, 1, 1, 1, 2, 2, 2]     # None replaced by closest int. If equidistant, choose the smallest int
fill(arr,  1) == [None, 1, 1, 1, 1, 2, 2]  # None replaced by closest int on the left
```