// Pedimos la información necesaria para la actividad
alert("En esta actividad vamos a ayudar a Juan a saber a cuantas personas puede invitar al estadio");
alert("La entrada al estadio cuesta $8.000 por persona");

let valor_boleta = 8000;
let dinero_juan = parseInt(prompt("¿Cual es tu presupuesto Juan?"));

if (dinero_juan >= valor_boleta) {
    var amigos_invitados = Math.floor(dinero_juan/valor_boleta);
    var valor_sobrante = dinero_juan-(amigos_invitados*valor_boleta);
}


alert("Puedes invitar a: " + amigos_invitados+ " Amigos");
alert("A juan le sobran " + valor_sobrante);