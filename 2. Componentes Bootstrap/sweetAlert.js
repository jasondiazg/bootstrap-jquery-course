"use strict";

function footerAlert() {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Al parecer algo ha salido mal.',
        footer: '<a href="http://academik.io">Más información en Academik.io</a>'
    });
}

function largeAlert() {
    swal({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'Una imagen larga'
    });
}

function complexAlert() {
    swal({
        title: '<strong>Alerta <u>compleja</u></strong>',
        type: 'info',
        html:
          'El cuerpo de esta alerta está hecho con <b>HTML en JavaScript</b>, ' +
          'Se pueden colocar <a href="http://academik.io">links</a> ' +
          'o cualquier tag de HTML <button>como un botón</button>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fab fa-angellist"></i> Font awesome',
        cancelButtonText:
          '<i class="fas fa-check"></i> Ok',
    });
}

function position(position) {
    swal({
        position: position,
        type: 'success',
        title: 'Información almacenada exitosamente',
        showConfirmButton: false,
        timer: 1500
    })
}

function animated() {
    swal({
        title: 'Animación personalizada con Animate.css',
        animation: false,
        customClass: 'animated bounceInDown'
    })
}

function confirmation() {
    swal({
        title: 'Confirmación',
        text: "¿Está seguro de que desea eliminar?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.value) {
            swal(
                'Eliminado',
                'Ha eliminado el registro con éxito.',
                'success'
            )
        } else {
            swal(
                'Cancelado',
                'No se ha eliminado el registro.',
                'info'
            )
        }
    })
}

function image() {
    swal({
        title: 'Paisaje',
        text: 'Alerta con una imagen.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Paisaje',
        animation: false
    })
}

function customAlert() {
    swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '3em',
        background: '#fff url(../img/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../img/nyan-cat.gif")
          center left
          no-repeat
        `
    })
}

function ajaxRequest() {
    swal({
        title: 'Escriba su usuario de Github',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: '¡Ver avatar!',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
            })
        },
        allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
        if (result.value) {
            swal({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
}

function queue() {
    swal.mixin({
        title: '¡Queremos conocerte!',
        input: 'text',
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    }).queue([
        {
            title: '¿Cual es tu comida favorita?'
        },
        {
            title: '¿Cuál es tu color favorito?'
        },
        {
            title: '¿Cuál es tu tipo de música favorita?'
        }
    ]).then((result) => {
        if (result.value) {
          swal({
            title: '¡Excelente!',
            html:
              'Tu comida, color y tipo de música favoritos son: <pre><code>' +
                JSON.stringify(result.value) +
              '</code></pre>',
            confirmButtonText: '¡Gracias!'
          })
        }
    })
}

function toast(type, position) {
    const toast = swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000
    });
      
    toast({
        type: type,
        title: 'Título del toast'
    })
}


function crearPersona(primerNombre, segundoNombre, tercerNombre, cuartoNombre, quintoNombre, primerApellido, segundoApellido, apellidoCasada) {

}

function crearPersona(options) {
    let primerNombre = options.primerNombre ? options.primerNombre : undefined;
}

function doSomething() {
    let miPersona = crearPersona('','', null, undefined, null, '', '',);
    let persona = crearPersona({ primerNombre: '', primerApellido: ''})
}
