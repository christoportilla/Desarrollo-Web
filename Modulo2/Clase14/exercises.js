let palabra = "hola"
palabra[0] = "H"
console.log(palabra.replace('h', 'H'))

// Quiero saber si la fruta contiene la letra "b"
const fruta = "banana"
if (fruta.includes('b')) {
    console.log("la tiene")
} else {
    console.log("no la tiene")
}

console.log("Hola".toUpperCase())

// se pide que limpies los espacios y poases el nombre a mayúsculas
let nombre = "      carlos  "
console.log(nombre.trim().toUpperCase())

// Segunda forma de colocar la primera letra en mayúsculas
const frase = "HOLA       AMIGO"

console.log(frase[0].toUpperCase().concat(frase.slice(1)))
console.log(frase.replaceAll(/\s+/g, " "))


let slug = "mi-nombre-es-ana"

let dni = "       1 2 9 5   4 6 4 6 2 "
console.log(Number(dni.replace(/\s+/g, "")))