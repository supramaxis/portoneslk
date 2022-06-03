'use strict';
const inputNombre = document.querySelector('#inputNombre');
const inputTelefono = document.querySelector('#inputTelefono');
const inputCorreo = document.querySelector('#inputCorreo');
const inputServicioCotizar = document.querySelector('#selectServicioCotizar');
const inputMensaje = document.querySelector('#inputMensaje');
const botonCotizar = document.querySelector('#btnCotizar');
let listaData = getData();

mostarDatoInicioContacto();

function obtenerDatos() {
  let horas = new Date().getHours();
  let minutos = new Date().getMinutes();
  let horaMensaje = horas + ':' + minutos;
  let dia = new Date().getDate();
  let mes = new Date().getMonth() + 1;
  let anio = new Date().getFullYear();
  let fechaMensaje = dia + '/' + mes + '/' + anio;
  let nombre = inputNombre.value;
  let telefono = inputTelefono.value;
  let correo = inputCorreo.value;
  let servicioCotizar =
    inputServicioCotizar.options[inputServicioCotizar.selectedIndex].text;
  let mensaje = inputMensaje.value;

  let error = validar(nombre, telefono, correo, servicioCotizar, mensaje);

  if (error == true) {
    swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'Para enviar el mensaje debe llenar todos los campos',
    });
  } else {
    let respuesta = registrarContacto(
      nombre,
      telefono,
      correo,
      servicioCotizar,
      mensaje,
      horaMensaje,
      fechaMensaje
    );

    if (respuesta.success == true) {
      Swal.fire({
        icon: 'success',
        title: 'Su mensaje ha sido enviado',
      });
    } else {
      swal.fire({
        icon: 'error',
        title: 'Error...',
        text: respuesta.msg,
        confirmButtonText: 'Entendido',
      });
    }
  }
}

function mostarDatoInicioContacto() {
  document.getElementById('tituloContacto').innerHTML = listaData[0].contacto;
}

function validar(pnombre, ptelefono, pcorreo, pservicioCotizar, pmensaje) {
  let error = false;
  let expLetras = /^[a-z A-ZáéíóúñÑÁÉÍÓÚüÜ]+$/;
  let expNumeros = /^[0-9]+$/;
  let expCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (pnombre === '' || expLetras.test(pnombre) == false) {
    error = true;
    inputNombre.classList.add('error_input');
  } else {
    inputNombre.classList.remove('error_input');
  }

  if (ptelefono == '' || expNumeros.test(ptelefono) == false) {
    error = true;
    inputTelefono.classList.add('error_input');
  } else {
    inputTelefono.classList.remove('error_input');
  }

  if (pcorreo == '' || expCorreo.test(pcorreo) == false) {
    error = true;
    inputCorreo.classList.add('error_input');
  } else {
    inputCorreo.classList.remove('error_input');
  }

  if (pservicioCotizar === 'Servicio a cotizar') {
    error = true;
    inputServicioCotizar.classList.add('error_input');
  } else {
    inputServicioCotizar.classList.remove('error_input');
  }

  if (pmensaje === '' || expLetras.test(pmensaje) == false) {
    error = true;
    inputMensaje.classList.add('error_input');
  } else {
    inputMensaje.classList.remove('error_input');
  }

  return error;
}

botonCotizar.addEventListener('click', obtenerDatos);
