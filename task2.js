function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  const reverseString = require('./reverseString');
  
  describe('reverseString', () => {
    it('reverses a string', () => {
      expect(reverseString('hello')).toEqual('olleh');
    });
    
    it('reverses a string with spaces', () => {
      expect(reverseString('hello world')).toEqual('dlrow olleh');
    });
    
    it('reverses an empty string', () => {
      expect(reverseString('')).toEqual('');
    });
  });
//   The tests use the Jest testing framework to test the reverseString function.

// There are three tests in total:

// it('reverses a string', () => { ...: This test checks that the reverseString 
// function correctly reverses a string. It passes the string "hello" to 
// the reverseString function and expects the result to be "olleh".

// it('reverses a string with spaces', () => { ...: This test checks that 
// the reverseString function correctly reverses a string with spaces. 
// It passes the string "hello world" to the reverseString function and expects 
// the result to be "dlrow olleh".

// it('reverses an empty string', () => { ...: This test checks that 
// the reverseString function correctly handles an empty string input. 
// It passes an empty string to the reverseString function and expects 
// the result to also be an empty string.

//  Each test uses the expect function from Jest to make an assertion about 
// the expected output of the reverseString function given a particular input. 
// If the output of the function matches the expected output, the test will pass. 
// If the output of the function does not match the expected output, 
// the test will fail.



