/*
  Problem: Write a recursive function that generates all possible combinations of a given set of elements.
  Explanation:
  A combination is a selection of elements from the set without regard to the order in which they are selected.
  For example, given a set {1, 2, 3}, the possible combinations are:
  {1}
  {2}
  {3}
  {1, 2}
  {1, 3}
  {2, 3}
  {1, 2, 3}
*/


function generateCombinations(set, combination = [], index = 0) {
  if (index === set.length) {
    // Base case: reached the end of the set
    console.log(combination);
    return;
  }

  // Include current element and make a recursive call
  combination.push(set[index]);
  generateCombinations(set, combination, index + 1);
  combination.pop(); // Backtrack by removing the current element

  // Exclude current element and make a recursive call
  generateCombinations(set, combination, index + 1);
}

// Example usage:
const set = [1, 2, 3];
generateCombinations(set);
