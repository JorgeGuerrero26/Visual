let a=30
let b=20
if (a==b)
alert("A y B son iguales")
else{
    alert("A y B son diferentes")
}                  

function resta(a,b){
    let resta = a-b;
    document.write(resta);
}

function suma(a,b){
    let suma=a+b;
    document.getElementById("suma").innerHTML = `La suma es ${suma}`;
}

function escribir(){
    valor = document.getElementById("valor").value;
    document.getElementById("escribir").innerHTML=`Escribi ${valor}`
}