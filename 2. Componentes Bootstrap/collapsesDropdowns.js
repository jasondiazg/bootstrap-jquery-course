"use strict";

function collapseAcademikAccordion() {
    $('#academik').collapse('toggle');
    alert('El accordion de Academik ha cambiado...');
}

function showAngularJSAccordion() {
    $('#angularjs').collapse('show');
    alert('El accordion de AngularJS ahora está visible...');
}

function hideJavaScriptAccordion() {
    $('#javascript  ').collapse('hide');
    alert('El accordion de JavaScript ahora está oculto...');
}