// Validación de los datos del formulario
const formulario = document.getElementById('miFormulario');
const button = document.getElementById('confirmar');
const confirmacion = document.getElementById('confirmacion');


// Cambio de apariencia del background según el tipo de evento
const tipoEvento = document.getElementById('tipoEvento');

tipoEvento.addEventListener('change', function(){
    let color = 'white';
    const valorTipoEvento = tipoEvento.value.trim();
    if(valorTipoEvento === 'Boda'){
        color = 'blue';
    } else if(valorTipoEvento === 'Cumpleaños'){
        color = 'green';
    } else {
        color = 'gray';
    }

    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
});

button.addEventListener('click', function(event){
    event.preventDefault();

    // Datos a validar
    const nombre = document.getElementById('nombre').value.trim();
    const numAsistentes = document.getElementById('numAsistentes').value.trim();

    // Booleano
    let reservaExitosa = true;

    // Validación del nombre
    if(nombre.length < 5){
        alert('El nombre no debe tener menos de 5 caracteres. Ingrese uno nuevo');
        nombre.style.border = 'solid red 1px';
        reservaExitosa = false;
    }

    // Validación del número de asistentes
    if(numAsistentes < 1 || numAsistentes > 500){
        alert('Número de asistentes inválido');
        reservaExitosa = false;
    }

    // Validación del tipo de evento
    if(tipoEvento === ''){
        alert('Debe seleccionar un evento para poder continuar');
        reservaExitosa = false;
    }

    if(reservaExitosa){
        confirmacion.style.display = 'block';
        confirmacion.textContent = '¡Reserva confirmada!'
    }
});