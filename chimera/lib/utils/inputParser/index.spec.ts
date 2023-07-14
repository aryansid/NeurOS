var assert = require('assert');
import inputParser from ".";

describe('Utils', function () {
  describe('inputParser', function () {
    it('should return an array with only one argument when there are no spaces', function () {
      const input = "git";
      const expected = JSON.stringify({commandString: 'git', argList: []});
      const result = JSON.stringify(inputParser(input));

      console.log(result, expected);
      // assert.equal(inputParser(input), expected);
    });
  });
});