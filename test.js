const fs = require('fs')
fs.writeFile('created.txt','Hola desde node fs','utf8',(error)=>{
    if (error){
        console.log('Error en write')
        return
    }
    console.log('Se escribió el archivo')
})
