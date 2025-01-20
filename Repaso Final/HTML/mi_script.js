function Calcular(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("nacimiento").value;

    document.getElementById("Resultado").innerHTML = nombre + " tiene " + edad + " años";
}