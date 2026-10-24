const frutas = ["manzana", "pera", "sandia"]

// Métodos
// 1. agregando
// Se pueden agregar uno o más items y no tienen que ser el mismo tipo de dato

// Mutadores / Mutation
// Es un método que modifica el arreglo original
frutas.push("limón", "maracuyá", "kiwi")

// Agregar ítem al inicio
frutas.unshift("naranja")

// Eliminar
// Elimina el último ítem (es un mutador)
frutas.pop()

// Elimina el primer ítem
frutas.shift()

console.log(frutas)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros.push(10)

// Para colocar el arreglo al revés
console.log(numeros.reverse())

// También existen algunos que no son mutadores

const numeros2 = [1, 2, 3, 4]

const porcion = numeros2.slice(1, 3)

const numeros3 = [5, 6, 7, 8, 9]

const porcion2 = numeros3.slice(0, 3)

console.log(porcion2)

// Para unir arreglos

const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

const union = arreglo1.concat(arreglo2)

console.log(union)

// Podemos unir todos los ítems del arreglo y convertirlos en un string usando join
console.log([1, 2, 3, 4, 5, 6, "hola"].join("-"))

// Podemos convertir un string en un arreglo e indicarle cuál será la separación
console.log("Hola me llamo Christopher".split(" "))

console.log(["Lima", "Piura", "Cuzco"].join(", "))

// Accediendo a un solo ítem con el índice del ítem al que quiero acceder
console.log(numeros3[2])
console.log(numeros3.at(-1)) // para comenzar desde atras se pueden usar negativos

// Includes devuelve true o false si el arreglo contiene el valor que estás buscando
console.log(numeros3.includes(10))

const roles = ["user", "guest"]

console.log(roles.includes("admin"))

// ------------------------------

