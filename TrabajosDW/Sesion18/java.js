$(document).ready(function(){
    $("a").click(function(evento){
        alert("Pulsaste y se te enviara a la pagina");
    });
});

$(document).ready(function(){
$("#c1b").click(function(){
    $("#cont1").toggle(500);
}, function(){
    $("#cont1").toggle(500);
});     
});