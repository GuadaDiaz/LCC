setTimeout(() => {
    document.title = '¡Gestiona tus finanzas!';
}, 3000);

const formulario = document.getElementById('miFormulario');
const button = document.getElementById('miBoton');
const resultado = document.getElementById('resultado');

button.addEventListener('click', function(event){
    event.preventDefault();

    // Datos a validar
    let ingresos = parseFloat(document.getElementById('ingresos').value.trim());
    let gastos = parseFloat(document.getElementById('gastos').value.trim());

    // Validaciones
    let valido = false;

    if(isNaN(ingresos) || isNaN(gastos)){
        alert("Valores inválidos");
        return;
    } else {
        if(gastos < 0 || ingresos < 0){
            alert('Debe completar los campos con valores positivos');
        } else {
            valido = true;
        }
    }

    if(valido){
        resultado.style.display = 'block';
        resultado.textContent = ingresos - gastos;
        if(ingresos - gastos < 0){
            resultado.style.color = 'red';
        } else {
            resultado.style.color = 'green';
        }
    }

});

const consejos = document.getElementById('consejos');

consejos.onclick = function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        primerosCinco = data.slice(0, 5);

        ul = document.querySelector('ul');
        if(!ul){
            ul = document.createElement('ul');
            document.body.appendChild(ul);
        }

        ul.innerHTML = '';

        primerosCinco.forEach(element => {
            li = document.createElement('li');
            li.textContent = element.title;
            ul.appendChild(li);
        });
    });
}