function stringLength(string) {
  return string.length;
}

test('returns the length of a string', () => {
  expect(stringLength("hello")).toBe(5);
});

test('returns 0 for an empty string', () => {
  expect(stringLength("")).toBe(0);
});
// This code defines the stringLength function and two test cases 
// using Jest. The stringLength function uses the length property of 
// JavaScript strings to get the number of characters in the string 
// passed as an argument. The test cases use the test function and 
// the expect function with the toBe matcher from Jest to check the output 
// of the stringLength function against the expected values.