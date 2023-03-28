//Actividad 1: Realizar programa donde el usuario introduce 2 números y 
// el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

let num1 = parseInt(prompt("Introduzca un numero:"));
let num2 = parseInt(prompt("Introduzca un numero otro:"));
document.write(`<h2>Los numeros ingresados fueron: ${num1} y ${num2} </h2>`);
document.write(`<br><h2>La suma de ambos es: ${num1 + num2}</h2>.`);
document.write(`<br><h2>La multiplicacion de ambos es: ${num1 * num2}</h2>.`);

// Actividad 2: El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm').
// Mostrar x consola la respuesta (si contiene o no)

let nombre = prompt("Introduzca tu nombre:");
let nombreMin = nombre.toLowerCase();
console.log(nombreMin);
document.write(`<br>Tu nombre es ${nombre} y esta palabra ${nombreMin.includes("m") ? "incluye":"no incluye"} la letra 'm' ${nombreMin.includes("a") ? "e incluye la letra 'a'":"y no incluye la letra'a'"}.`);

// Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')
// investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

let frase = prompt("Ingresa un frase cualquiera la cual en lugares de espacio tenga cualquier simbolo por ejemplo: Hola.mi*nombre-es=Franco");
let regex = /[^a-zA-Z0-9]/g;
let soloConEspacios = frase.replace(regex, " ");
document.write(`<br><br>La frase <strong>${frase}</strong> bien escrita quedaria <strong>${soloConEspacios}</strong>`);

