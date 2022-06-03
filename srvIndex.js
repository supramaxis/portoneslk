'use strict'
const botonExpandir = document.querySelector('#btnVerMas');

function changeBotton(){
    if (botonExpandir.text == 'Ver Más') botonExpandir.text = 'Ver Menos';
    else botonExpandir.text = 'Ver Más';
}

/**********************
 * Get cargo incial activacion back *
 *********************/
function getData(){
    let listaData = [];
    let peticion = $.ajax({
        url: 'https://servicios-lk.herokuapp.com/api/data',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        },

    });
    peticion.done(function (response) {
        listaData = response;
    });

    peticion.fail(function () {

    });

    return listaData;
    

}




/**********************
 * Registrar Contacto *
 *********************/
 function registrarContacto(pnombre, ptelefono, pcorreo, pservicioCotizar, pmensaje, phoraMensaje, pfechaMensaje) {
     let respuesta = '';
     let peticion = $.ajax({
         url: 'https://servicios-lk.herokuapp.com/api/contacts',
         type: 'post',
         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
         dataType: 'json',
         async: false,
         data: {
 
            nombre: pnombre,
            telefono: ptelefono,
            email: pcorreo,
            servicio: pservicioCotizar,
            mensaje: pmensaje,
            hora: phoraMensaje,
            fecha: pfechaMensaje,
         },
         
     });
     
 
     peticion.done(function (response) {
         respuesta = response;
     });
 
     peticion.fail(function (response) {
         respuesta = response;
     });
 
     return respuesta;
 };

 