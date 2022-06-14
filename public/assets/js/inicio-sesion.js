const submit = document.querySelector('#buttonLogin');
var ingresado;
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
