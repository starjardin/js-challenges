The first input array is the key to the correct answers to an exam, like `["a", "a", "b", "d"]`. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving `+4` for each correct answer, `-1` for each incorrect answer, and `+0` for each blank answer.

If the score < 0, return 0.

### For example:


```javascript
    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
 ```