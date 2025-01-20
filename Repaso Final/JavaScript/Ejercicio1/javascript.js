// Funcionalidad del formulario
const button = document.getElementById('miBoton');
const formulario = document.getElementById('miFormulario');
const nombresProhibidos = ['Ana', 'Pepe', 'Pancho'];

button.addEventListener('click', function(event){
    // Previene que el formulario se envíe por defecto
    event.preventDefault();

    //Variables a utilizar
    let usuario = document.getElementById('usuario').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let contrasena = document.getElementById('contrasena').value.trim();
    let conf_contrasena = document.getElementById('conf_contrasena').value.trim();
    
    // Validación de campos
    if(usuario === '' || correo === '' || contrasena === '' || conf_contrasena === ''){
        alert('Debe completar todos los campos antes de continuar');
        document.body.style.backgroundColor = 'blue';
        return;
    }

    // Validación del nombre de usuario
    if(usuario.length < 3){
        alert('El nombre de usuario no debe tener menos de 3 caracteres');
        return;
    }

    if(nombresProhibidos.includes(usuario)){
        alert('Nombre restringido. Ingrese uno nuevo');
        return;
    }

    // Validación del correo
    const expRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    if (!expRegular.test(correo)) {
        alert('Ingrese un correo válido');
        return;
    }

    // Validación contraseña y confirmación
    if(contrasena.length < 8){
        alert('Su contraseña no debe tener menos de 8 caracteres');
        return;
    }

    if(contrasena !== conf_contrasena){
        alert('No coincide con su contraseña, confirme nuevamente.');
        return;
    }

    document.body.style.backgroundColor = 'green';

    setTimeout(() => {
        formulario.submit();
    }, 1000);
});


// Funcionalidad del botón de saludo y obtener data
const saludar = document.getElementById('saludar');
const parrafo = document.createElement('p');
parrafo.textContent = '¡Hola!';
saludar.onclick = function(){
    document.body.appendChild(parrafo);
}

// Funcionalidad header y footer
const colorHeader = document.querySelector('header');
const colorFooter = document.querySelector('footer');
setTimeout(() => {
    colorHeader.setAttribute('style', 'background-color: red');
    colorFooter.setAttribute('style', 'background-color: red');
}, 5000);


// FUncionalidad para realizar una consulta HTTP
const getData = document.getElementById('getData');

getData.onclick = function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responde => responde.json())
        .then(data =>{
            // Obtener los primeros diez elementos
            const primerosDiez = data.slice(0, 10);

            // Crear un ul si no existe
            let ul = document.querySelector('ul');
            if(!ul){
                ul = document.createElement('ul');
                document.body.appendChild(ul);
            }

            //Limpiar la lista antes de agregar los elementos
            ul.innerHTML = '';

            //
            primerosDiez.forEach(element => {
                let li = document.createElement('li');
                li.textContent = element.title;
                ul.appendChild(li);
            });
        })
};