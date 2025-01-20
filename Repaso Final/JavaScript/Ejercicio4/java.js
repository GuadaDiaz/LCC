const formulario = document.getElementById('miFormulario');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const recomendaciones = document.getElementById('recomendaciones');

calcular.addEventListener('click', function(event){
    // Previene el envío del formulario por defecto
    event.preventDefault();

    // Datos a validar
    let ingresos = parseFloat(document.getElementById('ingresos').value.trim());
    let gastos = parseFloat(document.getElementById('gastos').value.trim());
    let meta = parseFloat(document.getElementById('meta').value.trim());

    //Validaciones
    const msjError = 'Datos inválidos';
    if(isNaN(ingresos) || ingresos < 0){
        alert(msjError);
    }

    if(isNaN(gastos) || gastos < 0){
        alert(msjError);
    }
    
    if(isNaN(meta) || meta < 0){
        alert(msjError);
    }

    const calculo = ingresos - gastos;
    const balance = ingresos - gastos - meta;
    resultado.style.display = 'block';
    resultado.textContent = calculo;
    recomendaciones.style.display = 'block';

    if(balance < 0){
        resultado.style.color = 'red';
        recomendaciones.textContent = 'Revisa tus gastos';
    } else if (balance > 0){
        resultado.style.color = 'green';
        recomendaciones.textContent = '¡Buen manejo financiero!';
    } else {
        resultado.textContent = '¡Meta alcanzada!';
        resultado.style.color = 'blue';
        recomendaciones.textContent = '¡Felicidades por alcanzar tu meta!';
    }

    if(calculo < 0 ){
        formulario.style.backgroundColor = '#F40000';
        formulario.style.color = 'white';
    } else if (calculo > 0){
        formulario.style.backgroundColor = '#00F400';
        formulario.style.color = 'white';
    } else {
        formulario.style.backgroundColor = 'yellow';
        formulario.style.color = 'black';
    }
});