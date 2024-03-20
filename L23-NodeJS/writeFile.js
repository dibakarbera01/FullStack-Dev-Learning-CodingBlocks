const fs = require('fs/promises')
const filepath = __dirname+'/database/data.json'

let data =['coding','Dancing','singing']

//writing file :-
fs.writeFile(filepath,JSON.stringify(data)).then(()=>{
    console.log("work sucess")
}).catch(err=>{
    console.log(err)
})


//reading file :- 

fs.readFile(filepath,{
    encoding: 'utf-8'
})
.then((data)=>{
    data=JSON.parse(data)
    data.forEach(d=>{
        console.log(d)
    })

}).catch(err=>{
    console.log(err)
})