// jaja salu2

console.log("hola");
const edad = 55;
let nombre = "juan"
let apellido = "tapia"
const estudiante = false
const altura = 1.70

//Array
const semestres = []

//Dicksionario (Json)

const materiaPreferida = { nombre: "calculo", id: 0 }

//null
const universitario = null
const carrera = undefined;

console.log("hola")
console.log("tipo de dato de " + nombre + " " + typeof nombre)
console.log("consersión float: " + parseFloat(edad))
console.log("consersión entero: " + parseInt(altura))


console.log("Doble igual")

console.log("Doble igual ", "45" == 45) //TRUE //VALOR
console.log("Doble igual ", "45" === 45) //FALSE //VALOR Y TIPO

console.log("--- concatenación ---");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("--- operador ternario (exp ? verdadero : falso ) ---");
console.log(edad >= 18 ? "Es mayor de edad" : "Es menor de edad");
let condition = edad > 18
if (condition) { }
if (condition) { } else { }

const dia = " LUNES"

switch (dia) {
    case "LUNES":
        console.log("LUNES")
    case "MARTES":
        console.log("MARTES")
    default:
        console.log("NO ES VALIDO");
        break;
}

console.log(" --- ciclos --- ")
for (let index = 0; index < 10; index++) {

}

//while (condición) {

//}

for (const item of [1, 2, 3]) {
    console.log(item);
}
for (const key in materiaPreferida) {
    console.log(key);
}

[1, 2, 3].forEach(element => {
    console.log(element);
})

console.log("--- FUNCIONES ---")


function imprimirNombre(nombre) {
    console.log(nombre);
}


imprimirNombre(nombre)

const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);

}
//llamado a la función 
imprimirNombreApellido(nombre, apellido)


const crearNombreCompleto = (nombre, apellido) => {
    console.log("-- Global  Scope Fake --- ");
    console.log(nombre, apellido);
    let name = nombre
    if (nombre, length > 3) {
        let name = nombre[0] + " " + apellido
        console.log("94" + name);

    }
    console.log("92" + name);
}

crearNombreCompleto(nombre, apellido)