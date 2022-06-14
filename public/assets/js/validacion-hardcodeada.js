function mostrarResultado(Origen, Destino,  FechaVuelta, Botonbuscar, BotonVolveraBuscar, CampoResultado, ContenedorAcompañantes) {

    let origen, destino, fechaVuelta, botonbuscar, botonVolveraBuscar, campoResultado, contenedorAcompañantes;

    if (Origen == false && FechaVuelta == false) {
        destino = document.getElementById(Destino);
       
        botonbuscar = document.getElementById(Botonbuscar);
        botonVolveraBuscar = document.getElementById(BotonVolveraBuscar);
        campoResultado = document.getElementById(CampoResultado);
        contenedorAcompañantes = document.querySelector(ContenedorAcompañantes);
    }
    else {
        origen = document.getElementById(Origen);
        destino = document.getElementById(Destino);
       
        fechaVuelta = document.getElementById(FechaVuelta).value;

        botonbuscar = document.getElementById(Botonbuscar);
        botonVolveraBuscar = document.getElementById(BotonVolveraBuscar);

        campoResultado = document.getElementById(CampoResultado);
        contenedorAcompañantes = document.querySelector(ContenedorAcompañantes);
    }



    botonbuscar.addEventListener("click", () => {
        if (Origen == false && FechaVuelta == false) {
            if(destino.value == "Elegí destino"){
                alert("Se debe seleccionar un destino")
                return;
            }
            contenedorAcompañantes.style.display = "none";
            hideComprarButonShowVolverAmostrar();
            campoResultado.innerHTML = `<div class="list-group">
        <div class="list-group-item list-group-item-action " aria-current="true">
            <div class="d-flex w-80 justify-content-between">
                <h5 class="mb-1 text-dark">UN DIA ${destino.value}</h5>
                <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
            </div>
            <p class="mb-1">Ida y vuelta en el día ARS 13.632 </p>
            <p class="mb-1"> Pasajes ida y vuelta en el día; Almuerzo (sin bebidas) en Restaurante "El Fogon"; City tour. Visita al Shopping.</p>
            <p class="mb-1"> Asistencia al viajero. Incluye cobertura de salud (COVID)</p>
            <button id="btnComprarDay1" type="button" class="btn-comprar btn btn-primary mt-3">comprar</button>
        </div>
    </div>
        `;
            
    }


        else if (origen.value == "Elegí origen" && destino.value == "Elegí destino") {
            contenedorAcompañantes.style.display = "none";
            hideComprarButonShowVolverAmostrar();
            let b = 1;
            for (let o = 1; o < origen.length; o++) {
                for (let d = 1; d < destino.length; d++) {
                    campoResultado.innerHTML += `
            <div class="list-group">
             <div class="list-group-item list-group-item-action " aria-current="true">
                <div class="d-flex w-80 justify-content-between">
                    <h5 class="mb-1 text-dark">${origen[o].value} - ${destino[d].value}</h5>
                    <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
                </div>
                <p class="mb-1">${destino[d].value == "Montevideo" ? "Buque directo Montevideo + Hotel Cristal + Palace Seguros. 26.175$" : "Buque directo Punta del Este + Bodega + Apart Yoo + Seguros. 26.175$"}</p>
                <button id="bntComprar${b++}" type="button" class="btn-comprar btn btn-primary mt-3">comprar</button>
             </div>
        </div>
        `;
                }
            }
        }
        else if (origen.value != "Elegí origen" && destino.value == "Elegí destino") {
            contenedorAcompañantes.style.display = "none";
            hideComprarButonShowVolverAmostrar();
            let b = 1;
            for (let d = 1; d < destino.length; d++) {
                campoResultado.innerHTML += `
            <div class="list-group">
             <div class="list-group-item list-group-item-action " aria-current="true">
                <div class="d-flex w-80 justify-content-between">
                    <h5 class="mb-1 text-dark">${origen.value} - ${destino[d].value}</h5>
                    <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
                </div>
                <p class="mb-1">${destino[d].value == "Montevideo" ? "Buque directo Montevideo + Hotel Cristal + Palace Seguros. 26.175$" : "Buque directo Punta del Este + Bodega + Apart Yoo + Seguros. 26.175$"} </p>
                <button id="bntComprar${b++}" type="button" class="btn-comprar btn btn-primary mt-3">comprar</button>
             </div>
        </div>
        `;
            }

        }
        else if (origen.value == "Elegí origen" && destino.value != "Elegí destino") {
            contenedorAcompañantes.style.display = "none";
            hideComprarButonShowVolverAmostrar();
            let b = 1;
            for (let d = 1; d < origen.length; d++) {
                campoResultado.innerHTML += `
            <div class="list-group">
             <div class="list-group-item list-group-item-action " aria-current="true">
                <div class="d-flex w-80 justify-content-between">
                    <h5 class="mb-1 text-dark">${origen[d].value} - ${destino.value}</h5>
                    <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
                </div>
                <p class="mb-1">${destino.value == "Montevideo" ? "Buque directo Montevideo + Hotel Cristal + Palace Seguros. 26.175$" : "Buque directo Punta del Este + Bodega + Apart Yoo + Seguros. 26.175$"} </p>
                <button id="bntComprar${b++}" type="button" class="btn-comprar btn btn-primary mt-3">comprar</button>
             </div>
        </div>
        `;
            }

        }
        else {
            contenedorAcompañantes.style.display = "none";
            hideComprarButonShowVolverAmostrar();
            campoResultado.innerHTML = `
            <div class="list-group">
             <div class="list-group-item list-group-item-action " aria-current="true">
                <div class="d-flex w-80 justify-content-between">
                    <h5 class="mb-1 text-dark">${origen.value} - ${destino.value}</h5>
                    <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
                </div>
                <p class="mb-1">${destino.value == "Montevideo" ? "Buque directo Montevideo + Hotel Cristal + Palace Seguros. 26.175$" : "Buque directo Punta del Este + Bodega + Apart Yoo + Seguros. 26.175$"}</p>
                <button id="bntComprar1" type="button" class="btn-comprar btn btn-primary mt-3">comprar</button>
             </div>
        </div>
        `;


        }
        mostrarBotonesCompra();

    });
    botonVolveraBuscar.addEventListener("click", () => {
        campoResultado.innerHTML = "";
        campoResultado.style.display = "none";
        contenedorAcompañantes.style.display = "flex";
        botonVolveraBuscar.classList.remove("enabled");
        botonbuscar.classList.remove("disabled");
        botonbuscar.classList.add("enabled")
        botonVolveraBuscar.classList.toggle("disabled");
    })


    function mostrarBotonesCompra() {
        let botones = document.getElementsByClassName("btn-comprar");
        campoResultado.style.display = "block";
        for (const boton of botones) {
            boton.addEventListener("click", (e) => {
                e.preventDefault();
                if (ingresado) {
                    alert('Compra realizada');
                    return;
                }
                else {
                    alert('No ha iniciado sesión');
                }
            });
        }
    }

    function hideComprarButonShowVolverAmostrar() {
        botonbuscar.classList.remove("enabled");
        botonbuscar.classList.add("disabled");
        botonVolveraBuscar.classList.remove("disabled");
    }

}
mostrarResultado("selectOrigenPaquete", "selectDestinoPaquete",
    "SalidaPaquete",  "botonBuscarPaquete", "botonVolverAbuscarPaquete", "resultadoPaquete", ".contenedor-acompañante-Paquete");

mostrarResultado("selectOrigenPasaje", "selectDestinoPasaje",
    "SalidaPasaje", "botonBuscarPasaje", "botonVolverAbuscarPasaje", "resultadoPasaje", ".contenedor-acompañante-pasaje");
    
    mostrarResultado(false, "selectOrigenDaytour",
    false, "botonBuscarDaytour", "botonVolverAbuscarDaytour", "resultadoDaytour", ".contenedor-acompañante-daytour");
    