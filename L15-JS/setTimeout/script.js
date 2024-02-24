let id = setTimeout(function(){
    console.log("Hello World")
},5000,setTimeout(function(){
    clearTimeout(id); 
},6000));

//console.log(id);
// clearTimeout(id); //setTimeout not work

// setTimeout(function(){
//     clearTimeout(id); 
// },6000);
console.log("Hey There!")