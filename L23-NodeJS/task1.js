const fs = require('fs');
const filepath = __dirname + '/database/data2.json';
const filepath1 = __dirname + '/database/data1.json';

const dataJson = fs.readFileSync(filepath);
const data = JSON.parse(dataJson);


const data1Json = fs.readFileSync(filepath1);
const data1 = JSON.parse(data1Json);


const combinedData = data.concat(data1);


fs.writeFileSync('output.json', JSON.stringify(combinedData));

console.log('Data successfully written to output.json');

