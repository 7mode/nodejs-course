const fs = require('fs');

// const book = {
//     title: 'some book title',
//     author: 'some author'
// };
//
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const jsonFileName = '1-json.json';
const dataBuffer = fs.readFileSync(jsonFileName);
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
data.name = 'Muhamad';
data.age = 25;
console.log(data);
const modifiedJSON = JSON.stringify(data);
fs.writeFileSync(jsonFileName, modifiedJSON);
