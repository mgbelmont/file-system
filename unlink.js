const fs = require('fs')

fs.unlink('created2.txt',(error)=>{
    if (error) throw error;
    console.log('archivo eliminado');
   
})