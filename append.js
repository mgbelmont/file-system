const fs = require('fs')
let message = 'Este es un nuevo mensaje'

fs.appendFile('created.txt',message,(error)=>{
    if (error) throw error;
    console.log('mensaje agregado: ', message);
   
})