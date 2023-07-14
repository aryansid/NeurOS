const { expect } = require('chai');

import { inputParser, argListParser } from ".";

describe('Input Parsing', function () {

  describe('argListParser', function () {
    it('should return argList with one string', function () {
      const input = "commit";
      const expected = ['commit'];
      const result = argListParser(input);

      expect(result).to.deep.equal(expected);
    });

    it('should return argList with multiple strings (no string retention)', function () {
      const input = "git status";
      const expected = ['git', 'status'];
      const result = argListParser(input);

      expect(result).to.deep.equal(expected);
    });

    it('should return argList with multiple strings while retaining internal string', function () {
      const input = "commit -m 'I am committing a random message' ";
      const expected = ['commit', '-m', "'I am committing a random message'"];
      const result = argListParser(input);

      expect(result).to.deep.equal(expected);
    });
  });

  describe('inputParser', function () {
    it('should return an object with empty \'argList\' when there are no spaces', function () {
      const input = "git";
      const expected = {commandString: 'git', argList: []};
      const result = inputParser(input);

      expect(result).to.deep.equal(expected);
    });

    it('should return an object with multiple arguments in arg list', function () {
      const input = "git add .";
      const expected = {commandString: 'git', argList: ['add', '.']};
      const result = inputParser(input);

      expect(result).to.deep.equal(expected);
    });

    it('should return an object with multiple arguments in arg list (w string retention)', function () {
      const input = "git commit -m 'I am committing a random message' ";
      const expected = {commandString: 'git', argList: ['commit', '-m', "'I am committing a random message'"]};
      const result = inputParser(input);

      expect(result).to.deep.equal(expected);
    });

  });
});