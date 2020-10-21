const {assert} = require('chai');
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {

  it('return bombay breed info when given "Bombay"', (done) => {
    breedDetailsFromFile('Bombay', desc => {
      const expected = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expected, desc);
      done();
    });
  });

  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', desc => {
      assert.equal(undefined, desc);
      done(); 
    });      
  });

});