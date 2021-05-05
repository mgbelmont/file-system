const ejepmloMuro = {
    construido: false,
    aplanado: false,
    pintado: false
  }

  let tiempoDeEspera = 1000
  function construir (muro, cb) {
    setTimeout(() => {
      muro.construido = true
      cb(false, muro)
    }, tiempoDeEspera)
  }
/*
  function aplanar (muro) {
    muro.aplanado = true
    return muro
  }*/
  function aplanar (muro,cd) {
    setTimeout(() => {
        muro.aplanado = true
        cb(false, muro)
      }, tiempoDeEspera)
  }

/*
  function pintar (muro) {
    muro.pintado = true
    return muro
  }*/

  function pintar (muro) {
    setTimeout(() => {
        muro.pintado = true
        cb(false, muro)
      }, tiempoDeEspera)
  }

  //´primero definimos la función y luego la pasamos 
  //function alConstruir(error, muroConstruido) {
    //console.log('muroConstruido: ', muroConstruido)
  //}
 // construir(ejepmloMuro,alConstruir);

  //Definimos la funcion directamente donde la necesitamos
  construir(ejepmloMuro, (error, muroConstruido) => {
      if(error){
          console.error('No se pudo construir')
          return
      }
    console.log('muroConstruido: ', muroConstruido)
    aplanar(muroConstruido, (error, muroAplanado)=>{
      if(error){
        console.error('No se pudo construir')
        return
    }
    console.log('muro aplanado: ', muroAplanado)
    pintar(muroAplanado, (error, muroPintado)=>{
      if(error){
        console.error('No se pudo construir')
        return
    }
    console.log('muro pintado: ', muroPintado)
    })
    })

  })

  //callback hell



