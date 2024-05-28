//el codigo va aqui
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertaValidaciones = document.getElementById("alertValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }//if length
    return true;
}// validar cantidad

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
alertaValidacionesTexto.innerHTML="";
alertaValidaciones.style.display="none";
txtNombre.style.border="";
txtNumber.style.border="";
if (txtNombre.value.length<3){
    alertaValidacionesTexto.innerHTML="El <strong> nombre </strong> no es correcto"
    alertaValidacionesTexto.style.display="block";
    txtNombre.style.border="solid red medium";
}//length <3

if(! validarCantidad()){
    alertaValidacionesTexto.innerHTML+="El <strong> número </strong> no es correcto"
    alertaValidacionesTexto.style.display="block";
    txtNombre.style.border="solid red medium";
}
});//!validarCantidad

btnClear.addEventListener("click", function(event){
    event.preventDefault();

    txtNombre.value = "";
    txtNumber.value = "";
});
