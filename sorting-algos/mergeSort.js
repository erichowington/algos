// Function to merge two sorted arrays into a single sorted array
function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;
  // Loop until we reach the end of either array
  while (i < arr1.length && j < arr2.length) {
  // Compare elements from both arrays
    if (arr2[j] > arr1[i]) {
  // If the element in arr2 is greater, push arr1 element to result
      results.push(arr1[i]);
      i++;  // Move to the next element in arr1
    } else {
 // If the element in arr1 is greater or equal, push arr2 element to result
      results.push(arr2[j]);
      j++;// Move to the next element in arr2
    }
  }
// After one array is exhausted, push remaining elements from the other array
  while (i < arr1.length) {
    results.push(arr1[i]);// Push remaining elements from arr1
    i++;// Move to the next element in arr1
  }
  while (j < arr2.length) {
    results.push(arr2[j]);// Push remaining elements from arr2
    j++;// Move to the next element in arr2
  }

  return results; //Return the merged array
}
// Function to perform merge sort recursively
function mergeSort(arr) {
// Base case: if the array has 1 or fewer elements, it is already sorted
  if (arr.length <= 1) return arr;
// Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));// Recursively sort the left half
  const right = mergeSort(arr.slice(mid));// Recursively sort the right half

  // Merge the sorted halves using the merge function
  return merge(left, right)// Return the merged result
}

console.log(mergeSort([14, 22, 78, 63, 74, 1, 10]));
