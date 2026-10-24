const notas = [13, 16, 19, 18, 11, 10, 12, 9]
const notas2 = [13, 12, 11, 5, 5, 20, 10]

function verAprobadosDesaprobados(arreglo) {
    console.log("Aprobados", arreglo.filter(n => n >= 11).length)
    console.log("Desaprobados", arreglo.filter(n => n < 11).length)
}

verAprobadosDesaprobados(notas2)

function calcularDescuento(precio, descuento) {
    console.log(precio - (precio * descuento / 100))
}

calcularDescuento(100, 10)
calcularDescuento(300, 29)

// ------------------

const edades = [10, 20, 30, 12, 18, 16, 15]
const edades2 = [13, 17, 15, 12, 18, 16, 15]

function mayoresDeEdad(lista) {
    console.log(lista.filter(n => n >= 18).length)
}

mayoresDeEdad(edades)

// ----------------

const nombres = ["Luis", "Carlos", "Rodrigo", "Manuel", "Victoria"]

function nombresMayusculas(listaNombres) {
    console.log(listaNombres.map(n => n.toUpperCase()))
}

nombresMayusculas(nombres)

function areaTriangulo(base, altura) {
    console.log(base * altura / 2)
}

areaTriangulo(5, 2)

// -------------------

const alumnos = [
    { nombre: "Pepe", edad: 16, promedio: 13 },
    { nombre: "María", edad: 20, promedio: 11 },
    { nombre: "Donatto", edad: 17, promedio: 17 },
    { nombre: "Noa", edad: 16, promedio: 12 },
]

function mayoresAprobados(listaAlumnos) {
    for (let i = 0; i < listaAlumnos.length; i++) {
        if (listaAlumnos[i].edad > 16 && listaAlumnos[i].promedio > 13) {
            console.log(listaAlumnos[i].nombre)
        }
    }
}

mayoresAprobados(alumnos)

// ----------------

// arrow function

const enviarMensaje = (message) => {
    console.log(message)
}

// operador ternario:  Condición ? si es verdad : si es falso
const edad = 13
edad >= 18 ? console.log("Eres mayor") : console.log("Eres menor")

// -------------------

// parámetros opcionales
function saludar(nombre = "Invitado") {
    console.log("Hola, " + nombre)
}
saludar("Antonella")

// ----------------------
// Una tienda vende un polo a 100 soles. Algunos días tiene descuento y otros días no.
// Crea una función que reciba el precio y opcionalmente el descuento

function precioDescuento (precio, descuento = 0) {
    console.log(precio - (precio * descuento / 100))
}

precioDescuento(100)

// -----------------------------

// Una empresa de delivery cobra 2 soles por kilómetro, pero el costo
// mínimo de cualquier envío es de 5 soles. Se busca una función que
// reciba los kilómetros y devuelva lo que se debe pagar.


function costoDelivery (kilometro) {
    kilometro < 3 ? console.log("El costo es 5 soles") : console.log("El costo es " + kilometro * 2 + " soles")
}

costoDelivery(10)


// Un cine cobra 8 soles a los menores de 12 años
// 15 soles a quienes tienen entre 12 a 59 años y
// 10 soles a quienes tienen 60 años o más. Se necesita una función
// que reciba la edad y devuelva el precio de la entrada

function precioEntrada (edad) {
    if (edad < 12) {
        console.log("El precio de la entrada es 8 soles")
    } else if (edad < 60) {
            console.log("El precio de la entrada es 15 soles")
    } else {
       console.log("El precio de la entrada es 10 soles")
    }
}

precioEntrada(8)
precioEntrada(25)
precioEntrada(65)

// --------------------------------

const productos = [
    { nombre: "Cuaderno", precio: 8},
    { nombre: "Mochila", precio: 90 },
    { nombre: "Lapicero", precio: 2 },
    { nombre: "Calculadora", precio: 45 }
]

// Un cliente dice cuánto dinero tiene como máximo. Se busca una función
// que devuelva solo los nombres de los productos que puede pagar

function productosHasta(listaProductos, dineroMaximo) {
    return listaProductos
    .filter(producto => producto.precio <= dineroMaximo)
    .map(producto => producto.nombre);
}

console.log(productosHasta(productos, 50)) // ["Cuaderno", "Lapicero", "Calculadora"]
console.log(productosHasta(productos, 5)) // ["Lapicero"]

// ---------------------------------


const alumnos2 = [
    { nombre: "Rosa", edad: 17 },
    { nombre: "Jorge", edad: 19 },
    { nombre: "Enrique", edad: 15 },
]

function buscarAlumno(lista, nombreAlumno, mensaje = "Alumno no encontrado") {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nombre == nombreAlumno) {
            return console.log(lista[i].nombre + " tiene " + lista[i].edad + " años.")
        } else {
            return mensaje;
        }
    }
}

buscarAlumno(alumnos2, "Pepe")