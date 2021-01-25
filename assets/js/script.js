const btn = document.getElementById("btn-register");
const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


btn.addEventListener("click", function() {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let correo = document.getElementById("mail").value;
    let usuario = document.getElementById("user").value;
    let clave = document.getElementById("pass").value;
    let telf = document.getElementById("cel").value;

    if (nombre === "" || apellido === "" || correo === "" || usuario === "" || clave === "" || telf === ""){
        alert("Debe completar todos los campos.");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre posee más de 30 caracteres.");
        return false;
    }
    else if (apellido.length>80){
        alert("El apellido posee más de 80 caracteres.");
        return false;
    }
    else if (correo.length>100){
        alert("El correo posee más de 100 caracteres.");
        return false;
    }
    else if (usuario.length>20){
        alert("El usuario posee más de 20 caracteres.");
        return false;
    }
    else if (telf.length>15){
        alert("El teléfono posee más de 15 caracteres.");
        return false;
    }
    else if (!expReg.test(correo)){
        alert("El correo contiene caracteres especiales.");
        return false;
    }
    else if(isNaN(telf)) {
        alert('El teléfono debe contener solo números.');
        return false;
    }
    else {
        alert('Bienvenido(a) ' + nombre + " " + apellido + '\n' + 'Tus datos son:' + '\n' + correo + '\n' + usuario + '\n' + clave + '\n' + telf);
    }
});