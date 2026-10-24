// Ejercicio 1
const ciudad = "   arequipa   "

function nombreCiudad(nombre) {
    const ciudadSinEspacios = nombre.trim()
    console.log(ciudadSinEspacios[0].toUpperCase().concat(ciudadSinEspacios.slice(1).toLowerCase()))
}

// Ejercicio 2 - verificar si contiene un "@"
const correo = "christopher@gmail.com"

function contieneSimbolo(simbolo, entrada) {
    entrada.includes(simbolo) ? console.log("Correo válido") : console.log("Correo inválido")
}

// Ejercicio 3 - contar palabras de la frase usando split

const frase = "Hola Mundo Cruel"

// console.log("La frase tiene " + frase.split(" ").length + " palabras")

// Ejercicio 4 - calcular suma de elementos usando forEach

const numeros = [4, 8, 15, 16, 23, 42]

let acumulado = 0

numeros.forEach(n => acumulado = acumulado + n)

// Ejercicio 5 - obtener array con nombres de alumnos con promedio >= 1 combinando filter y map

const alumnos = [
  { nombre: "Pepe", edad: 16, promedio: 13 },
  { nombre: "Maria", edad: 20, promedio: 9 },
  { nombre: "Donatto", edad: 17, promedio: 17 },
  { nombre: "Ana", edad: 19, promedio: 10 }
]

const alumnosAprobados = alumnos.filter(n => n.promedio >= 11)

console.log(alumnosAprobados.map(n => n.nombre))