const nombres = ["Luis", "María", "Rodrigo"]

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// -----------------------

const numeros = [10, 20, 30, 40, 50]

console.log(numeros.filter(n => n > 30))

for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 30) {
        console.log(numeros[i])
    }
}

const lista = [11, 22, 33, 44, 55, 60]

console.log(lista.map(n => n * 0.9))

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 0.9)
}

const numeros2 = [12, 14, 20, 29, 18, 28, 47]

console.log(numeros2.filter(n => n % 2 == 0))

console.log(nombres.map(n => n.toUpperCase()))

// Filter busca todos los que cumplen con la condición
// Find trae solo la primera coincidencia que encuentra

// every significa todos o cada uno
// some significa alguno

const listaNumeros = [1, 2, 43, 0, 3, 0]

console.log(listaNumeros.every(n => n == 0))

const listaFocos = ["verde", "blanco", "blanco", "rojo", "rojo", "blanco", "rojo", "verde"]

console.log("blancos", listaFocos.filter(n => n == "blanco").length)
console.log("rojos", listaFocos.filter(n => n == "rojo").length)
console.log("verdes", listaFocos.filter(n => n == "verde").length)

// ---------------------------------------
// Objetos: se identifican por llaves {}
const fruta = {
    nombre: "Pera",
    nombreCienti: "",
    pesoEnGr: 300,
    origen: "",
    familia: ["fruta1", "fruta2"]
}

console.log("---------------")


// El objeto puede contener cualquier tipo de dato, incluso un arreglo
const producto = {
    nombre: "Teclado",
    precio: 120,
    color: "Blanco"
}

console.log(producto.nombre)
console.log(producto["color"])

const notas = [10, 12, 18, 20, 13, 15, 16, 9, 5, 13]

const resultados = {
    aprobados: 0,
    desaprobados: 0
}

notas.forEach(n => {
    if(n >= 11) {
        resultados.aprobados++
    } else {
        resultados.desaprobados++
    }
}
)

console.log(resultados)