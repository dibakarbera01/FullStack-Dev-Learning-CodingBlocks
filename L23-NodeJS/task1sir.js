
const path = require('path')
const fs = require('fs/promises')
const outputpath = path.join(__dirname,'/database/siranswer.json')
async function mergeFile(file1,file2){
    try{
        let data1 = await fs.readFile(file1)
        let data2 = await fs.readFile(file2)
        data1=JSON.parse(data1)
        data2=JSON.parse(data2)
        let data = [...data1,...data2];
       
        data.sort((a,b)=>a-b);
        // data.sort();
        console.log(data)
        await fs.writeFile(outputpath,JSON.stringify(data));
    }catch(err){
        console.log(err)
    }
}

let file1 = path.join(__dirname,'/database/data1.json');
let file2 = path.join(__dirname,'/database/data1.json');

mergeFile(file1,file2)