
const submit = document.querySelector('#buttonLogin');
const formulario = document.querySelector('#one');
const submitBuscar = document.querySelector('#botonBuscar');
const divResultado = document.querySelector('#resultado');
const valorOrigen = document.querySelector('#selectOrigen');
const valorDestino = document.querySelector('#selectDestino');
const soloIdaActive = document.querySelector('#flexRadioDefault2');
const fechaSalida = document.querySelector('#startDate');
const pasajeros = document.querySelector('#selectPasajeros');

const destinoDayTour = document.querySelector('#selectOrigenDaytour');
const butonBuscarDayTour = document.querySelector('#botonBuscar2');
const pasajerosDay = document.querySelector('#selectPasajerosDaytour');
const dateDay = document.querySelector('#startDate3');
const resultadoDay = document.querySelector('#resultadoDayTour');

var ingresado = false;



submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');


    const email = document.querySelector('#emaillogin').value;
    const password = document.querySelector('#password').value;

    console.log({ email, password });

    console.log(validarMail(email));
    if (email === 'emanuelelgani@gmail.com' && password === '123456') {
        alert('Bienvenido');
        document.querySelector('#one').style.display = 'none';
        ingresado = true;
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});


const validarMail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}


submitBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');

    if (valorOrigen.value != 'Elegí origen' && valorDestino.value != 'Elegí destino'
        && soloIdaActive.checked == true && fechaSalida.value != '' && pasajeros.value != 'Pasajeros') {


        divResultado.innerHTML = `<div class="list-group">
    <div class="list-group-item list-group-item-action " aria-current="true">
        <div class="d-flex w-80 justify-content-between">
            <h5 class="mb-1 text-dark">Clase Baja</h5>
            <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
        </div>
        <p class="mb-1">Buque rápido ARS 11.773 </p>
        <button id="btnComprar1" type="button" class="btn btn-primary mt-3">comprar</button>
    </div>
    <div class="list-group-item list-group-item-action ">
        <div class="d-flex w-80 justify-content-between">
            <h5 class="mb-1 text-dark">Clase Media</h5>
            <small class="text-dark">Salida: 12:15 - Llegada: 16:15</small>
        </div>
        <p class="mb-1">Buque rápido ARS 19.800</p>
        <button id="btnComprar2" type="button" class="btn btn-primary mt-3">comprar</button>
    </div>
    <div  class="list-group-item list-group-item-action">
        <div class="d-flex w-80 justify-content-between">
            <h5 class="mb-1 text-dark">Clase alta</h5>
            <small class="text-dark">Salida: 18:45 - Llegada: 22:45 </small>
        </div>
        <p class="mb-1">Buque rápido ARS 23.100</p>
        <button id="btnComprar3" type="button" class="btn btn-primary mt-3">comprar</button>
    </div>
   
</div>
`;
        const btnComprar1 = document.querySelector('#btnComprar1');
        btnComprar1.addEventListener('click', (e) => {
            e.preventDefault();

            if (ingresado) {
                alert('Compra realizada');
            }
            else {
                alert('No ha iniciado sesión');
            }
        });

        const btnComprar2 = document.querySelector('#btnComprar2');
        btnComprar2.addEventListener('click', (e) => {
            e.preventDefault();
            if (ingresado) {
                alert('Compra realizada');
            }
            else {
                alert('No ha iniciado sesión');
            }
        });

        const btnComprar3 = document.querySelector('#btnComprar3');
        btnComprar3.addEventListener('click', (e) => {
            e.preventDefault();
            if (ingresado) {
                alert('Compra realizada');
            }
            else {
                alert('No ha iniciado sesión');
            }
        });
    }
});




/* =========Day tour========== */

butonBuscarDayTour.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('click day tour');
    console.log(destinoDayTour.value);

    if (destinoDayTour.value != 'Elegí destino' && pasajerosDay.value != 'Cantidad de pasajeros' && dateDay.value != '') {


        resultadoDay.innerHTML = `<div class="list-group">
        <div class="list-group-item list-group-item-action " aria-current="true">
            <div class="d-flex w-80 justify-content-between">
                <h5 class="mb-1 text-dark">UN DIA CAPITAL</h5>
                <small class="text-dark">Salida: 08:30 - Llegada: 12:30</small>
            </div>
            <p class="mb-1">Ida y vuelta en el día ARS 13.632 </p>
            <p class="mb-1"> Pasajes ida y vuelta en el día; Almuerzo (sin bebidas) en Restaurante "El Fogon"; City tour. Visita al Shopping.</p>
            <p class="mb-1"> Asistencia al viajero. Incluye cobertura de salud (COVID)</p>
            <button id="btnComprarDay1" type="button" class="btn btn-primary mt-3">comprar</button>
        </div>
    </div>
        `;

        const btnComprarDay1 = document.querySelector('#btnComprarDay1');

        btnComprarDay1.addEventListener('click', (e) => {
            e.preventDefault();
            if (ingresado) {
                alert('Compra realizada');
            }
            else {
                alert('No ha iniciado sesión');
            }
        });






    }
});