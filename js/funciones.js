
function mostrarComentario(){
    var copiarComentario = document.getElementById("escribirComentario").value;
    document.getElementById("verComentario").innerHTML = copiarComentario;
}

function textoGrande(){
    var elemento = document.getElementById("verComentario");
    elemento.style="font-size: 40px";
}

function textoMediano(){
    var elemento = document.getElementById("verComentario");
    elemento.style="font-size: 22px";
}

function textoChico(){
    var elemento = document.getElementById("verComentario");
    elemento.style="font-size: 12px";
}

function textoColor(){
    var colorElegido = prompt("Ingresa el color de texto deseado (Código Hexadecimal)");
    colorElegido = colorElegido;
    document.getElementById("verComentario").style.color = colorElegido;
}

function fondoColor(){
    var colorElegido = prompt("Ingresa el color de fondo deseado (Código Hexadecimal)");
    colorElegido = colorElegido;
    document.getElementById("verComentario").style.backgroundColor = colorElegido;
}
function alinearCentrado(){
    var elemento = document.getElementById("verComentario");
    elemento.style.textAlign = "center";
}

function alinearIzquierda(){
    var elemento = document.getElementById("verComentario");
    elemento.style.textAlign = "left";
}

function alinearDerecha(){
    var elemento = document.getElementById("verComentario");
    elemento.style.textAlign = "right";
}

function enviarComentario(){
    var comentario = document.getElementById("verComentario");
    var publicarComentario = comentario.cloneNode(true);
    publicarComentario.removeAttribute("id");
    var comentariosGuardados = document.getElementById("guardarNuevosComentarios");
    comentariosGuardados.insertBefore(publicarComentario, comentariosGuardados.firstChild);
    var nuevoRenglon = document.createElement("hr");
    comentariosGuardados.insertBefore(nuevoRenglon, comentariosGuardados.firstChild);
    document.getElementById("comentarioNuevo").value ="";
    comentario.removeAttribute("style");

}
