class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  const calculator = new Calculator();
  
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toEqual(5);
    });
    
    it('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toEqual(-1);
    });
    
    it('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toEqual(-5);
    });
  });
  
  describe('subtract', () => {
    it('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toEqual(2);
    });
    
    it('subtracts a positive and a negative number', () => {
      expect(calculator.subtract(2, -3)).toEqual(5);
    });
    
    it('subtracts two negative numbers', () => {
      expect(calculator.subtract(-2, -3)).toEqual(1);
    });
  });
  
  describe('divide', () => {
    it('divides two positive numbers', () => {
      expect(calculator.divide(6, 3)).toEqual(2);
    });
    
    it('divides a positive and a negative number', () => {
      expect(calculator.divide(6, -3)).toEqual(-2);
    });
    
    it('divides two negative numbers', () => {
      expect(calculator.divide(-6, -3)).toEqual(2);
    });
  });
  
  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
    });
    
    it('multiplies a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toEqual(-6);
    });
    
    it('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toEqual(6);
    });
  });
//   This code defines a Calculator class with four methods: add, subtract, divide, 
//   and multiply. Each method takes two arguments, a and b, and performs 
//   a mathematical operation on them. The add method returns the sum of a and b, 
//   the subtract method returns the difference between a and b, the divide method 
//   returns the quotient of a and b, and the multiply method returns 
//   the product of a and b.

//   After defining the Calculator class, an instance of the class is created 
//   and assigned to the constant calculator.
  
//   The code then uses the describe method from Jest to group tests for 
//   each method. For each method, there are three tests that use the it method 
//   from Jest to define the behavior that is being tested and the expected outcome. 
//   The tests use the expect method from Jest to make an assertion about the expected output 
//   of the method, and the toEqual method to specify the expected value. If the output of 
//   the method matches the expected output, the test will pass. If the output of the method 
//   does not match the expected output, the test will fail.  