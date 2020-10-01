const fs = require('fs');

let src = fs.readFileSync(process.argv[1]).toString();

src = src.replace(/(\r\n|\n|\r)/gm,"");
src = src.replace("String[] args", "String[]a")
src = src.replace("String args[]", "String[]a")

console.log(src);
