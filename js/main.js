//el codigo va aqui
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertaValidaciones = document.getElementById("alertValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");

let tablaListaCompras = document.getElementById("tablaListaCompras");
let cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

let isValid=true;

let precio;

let contador=0;

let costoTotal = 0;
let totalEnProductos =0;

// aqui se almacena la informacion de la tabla 
let datos = new Array();

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }//if length
    if (isNaN (txtNumber.value)){
        return false;
    }// isNan
    if (Number(txtNumber.value)<=0 ){
        return false;
    }//<=0
    return true;
}// validar cantidad

function getPrecio(){
    Math.floor((Math.random()*10000))/100;
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
alertaValidacionesTexto.innerHTML="";
alertaValidaciones.style.display="none";
txtNombre.style.border="";
txtNumber.style.border="";
isValid = true;
if (txtNombre.value.length<3){
    alertaValidacionesTexto.innerHTML="El <strong> nombre </strong> no es correcto"
    alertaValidacionesTexto.style.display="block";
    txtNombre.style.border="solid red medium";
}//length <3

if(! validarCantidad()){
    alertaValidacionesTexto.innerHTML+="El <strong> número </strong> no es correcto"
    alertaValidacionesTexto.style.display="block";
    txtNombre.style.border="solid red medium";
}isValid=false;
;//!validarCantidad

if (isValid) {
    contador++;
    precio = getPrecio();
    let row = `<tr>
    <td>${contador}</td>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>${precio}</td>
    </tr>`;

    let elemento = `{"id": ${contador},
    "nombre": "${txtNombre.value}",
    "cantidad" "${txtNumber.value}",
    "precio": ${precio}
}`;

datos.push(JSON.parse(elemento));
localStorage.setItem("datos",JSON.stringify(datos));

    cuerpoTabla.insertAdjacementHTML("beforeend",row);
    contadorProductos.innerText= contador;
    totalEnProductos += parseFloat(txtNumber.value);
    costoTotal += precio * parseFloat(txtNumber.value);
    precioTotal.innerText=totalEnProductos;
    precioTotal.innerText= `$ ${costoTotal.toFixed(2)}`;
    
    txtNombre.value="";
    txtNumber.value="";
    txtNombre.focus();

}//isValid
});
btnClear.addEventListener("click", function(event){
    event.preventDefault(); 
    txtNombre.value = "";
    txtNumber.value = "";
    alertaValidacionesTexto.innerHTML="";
    alertaValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    cuerpoTabla.innerHTML="";
    contador= 0;
    totalEnProductos=0;
    costoTotal=0;
    localStorage.setItem("contador",contador);
    localStorage.setItem("totalEnProductos",totalEnProductos);
    localStorage.setItem("costoTotal",costoTotal);
    datos = new Array();
    localStorage.removeItem("datos");
    contadorProductos.innerText="0";
    productosTotal.innerText="0";
    precioTotal.innerText="$ 0";
   
});

window.addEventListener("load", function(event){
    event.preventDefault();
    if (this.localStorage.getItem("contador")!=null){
        contador=Number(this.localStorage.getItem("contador"));
    }// if contador
    if (this.localStorage.getItem("totalEnProductos")!=null){
        totalEnProductos=Number(this.localStorage.getItem("totalEnProductos"));
    }// if totalEnProductos
    if (this.localStorage.getItem("costoTotal")!=null){
        costoTotal=Number(this.localStorage.getItem("costoTotal"));
    }//if costoTotal

    if (this.localStorage.getItem("datos")!=null){
    datos = JSON.parse(this.localStorage.getItem("datos"));
    datos.forEach((r) =>{
    let row =  `<tr>
    <td>${contador}</td>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>${precio}</td>
    </tr>`;
    });  
    } // if datos 

    contadorProductos.innerText= contador;
    productosTotal.innerText=totalEnProductos;
    precioTotal.innerText=`$ ${costoTotal.toFixed(2)}`;
})//window load
