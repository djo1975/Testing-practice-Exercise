const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  module.exports = capitalize;
  
  const capitalize = require('./capitalize');
  
  describe('capitalize', () => {
    it('capitalizes the first letter of the string', () => {
      const input = 'hello';
      const expectedOutput = 'Hello';
  
      const actualOutput = capitalize(input);
  
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    it('does not change the rest of the string', () => {
      const input = 'hello world';
      const expectedOutput = 'Hello world';
  
      const actualOutput = capitalize(input);
  
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    it('returns an empty string for an empty input', () => {
      const input = '';
      const expectedOutput = '';
  
      const actualOutput = capitalize(input);
  
      expect(actualOutput).toEqual(expectedOutput);
    });
  });
  