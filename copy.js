const fs = require('fs')

fs.copyFile('created.txt','copyofcreated.txt',(error)=>{
    if (error){
        console.log('Error en copy')
        return
    }
    console.log('archivo fue copiado');
   
})