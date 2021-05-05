const fs = require('fs')

fs.unlink('created2.txt',(error)=>{
    if (error){
        console.log('Error en unlink')
        return
    }
    console.log('archivo eliminado');
   
})