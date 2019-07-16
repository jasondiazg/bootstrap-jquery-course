"use strict";

function guardarCambios() {
    alert('Se ha dado clic a Guardar Cambios');
    $('#modalSimple').modal('hide'); 
}

function abrirModalJS() {
    $('#modalCenter').modal('show'); 
}

$('#modalHandler').on('show.bs.modal', function (e) {
    alert('El modal se ha levantado...');
})

$('#modalHandler').on('hidden.bs.modal', function (e) {
    alert('El modal se ha ocultado...');
})