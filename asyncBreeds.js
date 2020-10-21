const fs = require('fs');

const breedDetailsFromFile = function(breed, Callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      Callback(data);
      return;
    }
    Callback(undefined);
  });
};



// breedDetailsFromFile('Bombay', breedInfo => console.log("Return value: " , breedInfo));

module.exports = breedDetailsFromFile;
