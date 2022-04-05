const instances = require('./stringLength');


describe('string methods', () => {

    test('check string count', () => {
      expect(instances.stringLength("qwerty")).toBe("This is working");
    });
  
    test('check reversed string', () => {
      expect(instances.reverseString("test")).toBe("tset");
    });

    test('check capitalized ', () => {
        expect(instances.capitalize("test")).toBe("Test");
      });
  });


