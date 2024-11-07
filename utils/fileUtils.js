const fs = require('fs');
function writeToFile(fileName, content) {
  fs.appendFileSync(fileName, content + '\n');
}

module.exports = { writeToFile };
