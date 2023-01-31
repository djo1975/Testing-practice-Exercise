function stringLength(string) {
    if (string.length === 0) {
      throw new Error('The string must be at least 1 character long');
    }
    if (string.length > 10) {
      throw new Error('The string must not be longer than 10 characters');
    }
    return string.length;
  }
  
  test('returns the length of a string between 1 and 10 characters', () => {
    expect(stringLength("hello")).toBe(5);
  });
  
  test('throws an error for a string shorter than 1 character', () => {
    expect(() => stringLength("")).toThrowError('The string must be at least 1 character long');
  });
  
  test('throws an error for a string longer than 10 characters', () => {
    expect(() => stringLength("a very long string")).toThrowError('The string must not be longer than 10 characters');
  });
//   This code defines the stringLength function and three test cases using Jest.
//  The stringLength function checks if the input string is at least 1 character 
//  long and not longer than 10 characters, and throws errors if those conditions 
//  are not met. The test cases use the test function and the expect function with 
//  the toBe and toThrowError matchers from Jest to check the output of 
//  the stringLength function against the expected values and error messages.  