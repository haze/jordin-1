const fs = require('fs');

let src = fs.readFileSync('code.java').toString();

src = src.replace(/(\r\n|\n|\r)/gm,"");
src = src.replace("String[] args", "String[]a")
src = src.replace("String args[]", "String[]a")

console.log(src);