// Para entrar en una discoteca de corea necesitas tener
// al menos 21 años, y máximo se permite el ingreso hasta
// los 50 años. Además que debes de ser coreano nativo

// Ingresando los datos
//const edad = prompt("Ingresa tu edad")
//const soyCoreano = prompt("Coloca V(verdadero) o F(falso) según si eres coreano o no")

// Recordatorio
// Los strings pueden estar en comillas dobles o simples
// if (edad >= 21 && edad <= 50 && soyCoreano == 'V') {
//     console.log("Puedes ingresar")
// } else {
//     console.log("No puedes ingresar")
// }


// -------------------------
const a = 7
const b = 3
const c = 10

// 1. true
// console.log(a > b && b > c || c > a)

// 2. true
let expresion = !(a < c) || b == 3 && a == 7

// 3. V
expresion = (a == '7' && a !== '7')

// 4. V
expresion = (a + b === c && !(b > a))

// ------------------------
// Encuentra el error

let edad = 18
if (edad >= 18) {
    console.log("Eres mayor de edad")
}

// ----------------
let x = 6

if (x > 5 && x < 10) {
    console.log("Entre 5 y 10")
}

// --------------
let nota = 10

if (nota == 10) {
    console.log("Excelente")
}
