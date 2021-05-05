const fs = require('fs')

fs.copyFile('created.txt','copyofcreated.txt',(error)=>{
    if (error) throw error;
    console.log('archivo fue copiado');
   
})