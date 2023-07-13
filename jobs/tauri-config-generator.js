const fs = require('fs');

console.log(fs);


const data = "text";

fs.writeFile('Output.txt', data, (err) => {
          
  // In case of a error throw err.
  if (err) throw err;
});
