const fs = require('fs')
fs.readFile('created.txt','utf8',(error,data)=>{
    if (error){
        console.log('Error en read')
        return
    }
    console.log('leyendo el archivo: ',data);
   
})