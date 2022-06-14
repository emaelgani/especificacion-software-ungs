desabilitarFechaVuelta('idavueltaPasaje', 'vueltaPasaje');
desabilitarFechaVuelta('idaVueltaPaquete', 'vueltaPaquete');


function desabilitarFechaVuelta(boxNameId, dateVueltaId) {
    const idaoIdaVuelta = document.getElementsByName(boxNameId);
    const fechaVuelta= document.getElementById(dateVueltaId);

    idaoIdaVuelta.forEach((e) => {
        e.addEventListener("click", () => {
            
            if (e.id === idaoIdaVuelta[0].id) {
                const value1 = document.querySelector('#value1');
                value1.innerText = 'Tigre';
                const value2 = document.querySelector('#value2');
                value2.innerText = 'Puerto Madero';
                fechaVuelta.disabled = false;
            }
            if (e.id === idaoIdaVuelta[1].id) {
                const value1 = document.querySelector('#value1');
                value1.innerText = 'Tigre';
                const value2 = document.querySelector('#value2');
                value2.innerText = 'Puerto Madero';
                fechaVuelta.disabled = true;
            }
        });
    });
}

