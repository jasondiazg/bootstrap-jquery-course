"use strict";

$('#danger-alert').on('close.bs.alert', function () {
    alert('Alerta danger cerrada...');
})

$('.alert-success').on('closed.bs.alert', function () {
    alert('Alerta success cerrada...');
})

function cerrarAlertaDanger() {
    $("#danger-alert").alert('close');
}