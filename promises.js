function construir(muro){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            muro.construido = true
            if(muro.construido){
                resolve(muro)
            }else{
                const error = new Error('No se pudo construir')
                reject(error)
            }
        }, 1000);
    })
}

const promesaDeConstruccion = construir({})
promesaDeConstruccion
.then((muroConstruido) =>{
    console.log('muro construido: ', muroConstruido)
})
.catch((error)=>{
console.error('Error al construir', error)
})