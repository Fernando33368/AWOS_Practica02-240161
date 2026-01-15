// Comentario de una sola línea

/*  Comentarios
    ...
    Multilinea
*/

// Ejercicio01: Declaración de variables en JavaScript
// 1. Utilizando la palabra reservada VAR

// Utilizaremos el método WARN para estilizar las respuestas
console.warn("-- Declaración de variables utilizando el prefijo VAR --");

var miNombre = "Fernando";
console.log("El valor almacenado en la variable miNombre es:", miNombre);

// Modificar el valor de la variable
miNombre = "Fernando Miguel";
console.log("El nuevo valor de la variable miNombre es:", miNombre);

var misApellidos = "Pérez";
console.log("El valor almacenado en la variable misApellidos es:", misApellidos);

// Una variable puede cambiar su valor durante la ejecución del programa
console.warn("-- Declaración de variables utilizando el prefijo CONST --");

// Una constante no puede cambiar su valor
const miMatricula = "240161";
console.log("El valor de la constante miMatricula es:", miMatricula);

// Intentando modificar el valor de la constante (NO permitido)
// miMatricula = "25XXXX";

console.log("El valor de la constante miMatricula es:", miMatricula);

// 3. Utilizando la palabra reservada LET
// LET tiene alcance de bloque (scope)

var fechaNacimiento = new Date("2006-06-01");
var miEdad = calcularEdad(fechaNacimiento);
console.log("Tu edad es de:", miEdad, "años.");

// Verificamos si es mayor de edad
var esMayorDeEdad = false;

if (miEdad >= 18) {
    esMayorDeEdad = true;
    let esMenorDeEdad = false;
}

if (esMayorDeEdad)
    console.log("Eres mayor de edad.");
else
    console.log("Eres menor de edad.");

function calcularEdad(fechaNacimiento) {
    // Fecha actual
    var fechaHoy = new Date();

    // Milisegundos por día
    let milisegundosPorDia = 24 * 60 * 60 * 1000;

    // Días vividos
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;

    // Cálculo de la edad
    var edad = diasVividos / 365.25;
    edad = Math.floor(edad);

    return edad;
}

// Interpolación de datos (Template Strings)
console.log(`Hola, ${miNombre} ${misApellidos}, actualmente tienes ${miEdad} años.`);

// Autor: Fernando Miguel Pérez.