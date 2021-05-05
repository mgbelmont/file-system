const fs = require('fs')
let message = 'Este es un nuevo mensaje'

fs.appendFile('created.txt',message,(error)=>{
    if (error){
        console.log('Error en append')
        return
    }
    console.log('mensaje agregado: ', message);
   
})