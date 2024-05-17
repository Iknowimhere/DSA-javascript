function nextGreaterNumber(n) {
  // Convert the number to a string and then to an array of digits
  let digits = n.toString().split('').map(Number);

  // Step 1: Find the largest index i such that digits[i] < digits[i + 1]
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such index exists, return -1
  if (i < 0) {
    return -1;
  }

  // Step 2: Find the largest index j greater than i such that digits[j] > digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 3: Swap the value of digits[i] with digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 4: Reverse the sequence from i + 1 to the end of the array
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // Convert the array of digits back to a number
  let result = parseInt(digits.join(''), 10);

  // If the result is larger than 2^31 - 1 (since we are working within 32-bit integer limits), return -1
  if (result > Math.pow(2, 31) - 1) {
    return -1;
  }

  return result;
}

// Sample usage
console.log(nextGreaterNumber(12)); // Output: 21
console.log(nextGreaterNumber(21)); // Output: -1
console.log(nextGreaterNumber(1234)); // Output: 1243
console.log(nextGreaterNumber(4321)); // Output: -1
