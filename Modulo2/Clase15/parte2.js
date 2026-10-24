const numeros = [1, 2, 3, 4, 5, 6]

// .length obtiene la cantidad de elementos que tiene el arreglo
for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        console.log(numeros[i])
    }
}

// Obteniendo los números impares
const impares = numeros.filter(n => n % 2 != 0)
console.log(impares)

for(let i = 0; i < impares.length; i++) {
    console.log(impares[i])
}

// ----------------

const precios = [100, 200, 230, 100, 190]

for(let i = 0; i < precios.length; i++) {
    console.log(precios[i] * 0.9)
}

// El map altera o modifica los datos, a diferencia del filter que solo selecciona datos de acuerdo a una condición
console.log(precios.map(p => p * 0.9))

// ----------------

const notas = [12, 8, 15, 10, 18, 7]
const aprobados = notas.filter(n => n >= 11)
console.log(aprobados)
console.log(aprobados.length)

