// Comentario de una sola linea

/*  Comentarios
    ...
    Nultilinea
*/ 

// Ejercicio01: Declaracion de variables en JavaScript
// 1. Utilizando la palabra reservada VAR 

// Utilizaremos el metodo WARN para estilizar las respuestas de las pruebas realizadas a nuestro codigo, y facilitar su revision.

console.warn("-- Declaracion de variables utilizando el prefijo VAR --");

var miNombre = "Fernando"
console.log("El valor almacenado en la variable miNombre es: ", miNombre);

// Modificar el valor de la variable
var miNombre = "Fernando Miguel"
console.log("El nuevo valor de la variable miNombre es: ", miNombre);

var misApellidos;
console.log("El valor almacenado en la variable misApellidos es: ", misApellidos); // undefined

// Una variable puede cambiar su valor durante la ejecuavion del programa

console.warn("-- Declaracion de variables utilizando el prefijo CONST --");
// Una constante a diferencia de una variable es que su valor no cambiara durante toda la ejecuacion del programa, y al momento de ser declarada esta debera de inicializadacobligatoriamente.

const miMatricula = "240161";
console.log("El valor de la constante miMatricula es: ", miMatricula);

// Intentando modificar el valor de la constante
/*miMatricula = "25XXXX";*/
console.log("El valor de la constante miMatricula es: ", miMatricula);

// 3. Utilizando la palabra reservada LET
// LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE), aquellas declaradas con VAR tienen un alcance global en el codigo no importando bloques o secciones, mientras que las variables declaradas con let solo existiran dentro del bloque o funcion

var fechaNacimiento = new Date("2006-06-01");
var miEdad = calcularEdad(fechaNacimiento);
console.log("tu edad es de: ", miEdad, " años.")

//Verificamos si es mayor de edad
if(miEdad >=18){
    var esMayorDeEdad = true
    let esMenorDeEedad = false;
}

if(esMayorDeEdad)
console.log("Eres mayor de Edad.");
else
console.log("Eres menor de Edad.");

function calcularEdad(fechaNacimiento)
{
    // Para calcular la edad requerimos de la fecha del dia de hoy
    var fechahoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que mos permite saber el numero de milisegundos por dia.

    let milisegundosPorDia = 24*60*60*1000;

    // Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que emos vivido.
    let diasVividos = (hoy - fechaNacimiento)/milisegundosPorDia;

    // Invocamos el metodo matematico de la funcion 
    var edad = diasVividos/365.25
    edad = Math.floor(edad);

    return edad;
}


// Interpolacion de datos

// $ () `

console.log(`Hola, $(miNombre) $(misApellidos) actualmente tienes $(miEdad) años.`);

// Autor: Fernando Miguel Perez.