1.To find Next greatest number(21----21)

To solve the problem of finding the next permutation of a number's digits that is greater than the given number 
𝑛
n, we can use a well-known algorithm that is commonly used for generating the next lexicographical permutation of a sequence. Here's the step-by-step explanation and the JavaScript implementation of the solution:

Steps to Find the Next Permutation
Identify the pivot: Find the largest index i such that the digit at i is smaller than the digit at i + 1. If no such i exists, the number is the largest permutation, and we should return -1.

Find the successor: Find the largest index j greater than i such that the digit at j is larger than the digit at i.

Swap: Swap the digits at indices i and j.

Reverse: Reverse the sequence of digits from i + 1 to the end of the array.

Explanation
Convert: We convert the number into a string, then split it into an array of digits for easy manipulation.

Find pivot i: We look for the largest index where the current digit is less than the next digit. This identifies the part of the number that can be incremented to form the next permutation.

Find successor j: We find the smallest digit larger than the pivot to the right of it.

Swap: We swap these two digits to form the smallest possible increment at the pivot.

Reverse: We reverse the digits to the right of the pivot to get the smallest lexicographical sequence.

Convert back: We join the digits back into a string and convert it to an integer to return the final result.

This algorithm ensures that we find the smallest number greater than n that contains the same digits, or -1 if no such number exists.