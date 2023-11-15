// Function to perform sequential search
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the target
        if (arr[i] === target) {
            // Return the index if the target is found
            return i;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage
const myArray = [2, 4, 6, 8, 10, 12];
const targetElement = 8;

// Perform linear search
const result = linearSearch(myArray, targetElement);

// Display the result and debug information
console.log("myArray:", myArray);
console.log("targetElement:", targetElement);
console.log("result:", result);

// Display the result
if (result !== -1) {
    console.log(`Target element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Target element ${targetElement} not found in the array.`);
}
