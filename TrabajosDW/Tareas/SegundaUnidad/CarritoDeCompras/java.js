


function agregarCarrito(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.cantidad = document.getElementById("cantidad").value;
    localStorage.precio = document.getElementById("precio").value;
    localStorage.descripcion = document.getElementById("descripcion").value;
    actualizarDatos();        
    localStorage.nombre = document.getElementById("nombre").value="";
    localStorage.cantidad = document.getElementById("cantidad").value="";
    localStorage.precio = document.getElementById("precio").value="";
    localStorage.descripcion = document.getElementById("descripcion").value="";            
}

function actualizarDatos(){
    var registro ="";
    if (localStorage.length==0){
        registro+= "<tr> <td>Vacio</td> <td>Vacio</td> <td>Vacio</td> <td>Vacio</td> </tr>"
    }else{

            let nombre= localStorage.key(3)
            let cantidad = localStorage.key(1)
            let precio= localStorage.key(0)
            let descripcion= localStorage.key(2)          
            registro+=`<tr > <td class="detallesDeslProducto">${localStorage.getItem(nombre)}</td> <td class="cantidad detallesDeslProducto">${localStorage.getItem(cantidad)}</td> <td class="precio detallesDeslProducto">${localStorage.getItem(precio)}</td> <td class="detallesDeslProducto">${localStorage.getItem(descripcion)}</td> </tr>`;        
    }
    document.getElementById("carrito").innerHTML += registro;   
    obtenerPrecio();
    obternerSubTotal();
}

function obtenerPrecio(){

  let Precios = document.getElementsByClassName("precio");
  let Cantidades = document.getElementsByClassName("cantidad");

  PrecioTotal = 0;
  
   for( let i=0 ; i < Precios.length; i++){

       let Subtotal = parseFloat(Precios[i].innerHTML)*parseFloat(Cantidades[i].innerHTML);
       
       PrecioTotal +=  Subtotal;
   }
   
   let compraTotal = document.getElementById("totalCompra");

   compraTotal.innerHTML = `El total es : ${ PrecioTotal }`


}

function obternerSubTotal(){
    let Precios = document.getElementsByClassName("precio");
    let Cantidades = document.getElementsByClassName("cantidad");    
  
     
    let Subtotal = parseFloat(Precios[Precios.length-1].innerHTML)*parseFloat(Cantidades[Cantidades.length-1].innerHTML);     
               
    let registro= "";
    registro+=`<tr> <td></td> <td></td> <td >SubTotal:  ${Subtotal} </td> <td></td> </tr>`; 
    document.getElementById("carrito").innerHTML += registro; 
}

function click(){
    let botones = document.getElementsByClassName(".boton");
    Animation
}



function eliminarTodo(){
    localStorage.clear();

}

