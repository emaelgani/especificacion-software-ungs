

const checkSalgoDesdeUruguay = document.querySelector('#flexRadioDefault3');
const idayVuelta = document.querySelector('#flexRadioDefault1');
const soloIda = document.querySelector('#flexRadioDefault2');
const fechaVuelta = document.querySelector('#startDate2');


checkSalgoDesdeUruguay.addEventListener('change', (e) => {

    const value1 = document.querySelector('#value1');
    value1.innerText = 'Montevideo';
    const value2 = document.querySelector('#value2');
    value2.innerText = 'Punta Del Este';
    fechaVuelta.disabled = false;
});

idayVuelta.addEventListener('change', (e) => {

    const value1 = document.querySelector('#value1');
    value1.innerText = 'Tigre';
    const value2 = document.querySelector('#value2');
    value2.innerText = 'Puerto Madero';
    fechaVuelta.disabled = false;
});

soloIda.addEventListener('change', (e) => {

    const value1 = document.querySelector('#value1');
    value1.innerText = 'Tigre';
    const value2 = document.querySelector('#value2');
    value2.innerText = 'Puerto Madero';

    fechaVuelta.disabled = true;
});


