(()=>{
    const Fecha = new Date().toISOString().split('T')[0];
    const contenedoresFecha = document. querySelectorAll('input[type="date"]')
    contenedoresFecha.forEach((e)=>{
        e.setAttribute('min', Fecha);
        e.value = Fecha;
    })

})();