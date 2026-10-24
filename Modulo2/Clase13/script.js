// Bucles
// Un ciclo repetitivo, puede tener límite o puede ser
// infinito

// for - por
// parámetros / argumento: cuando la función necesita
// expresiones, variables, para poder funcionar

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("----------------")

// Usa un for para mostrar en consola
// los números que sean pares del 1 al 10

// Forma 1
console.log("Forma 1:")
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}

// Forma 2
console.log("Forma 2:")
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("--------------")

for (let i = 10; i > 0; i -= 4) {
    console.log(i)
}

console.log("---------")

let suma = 0

for (let i = 1; i <= 4; i++) {
    suma += i * 2
}

console.log(suma)


// 2 casos

for (let i = 1; i <= 20; i++) {
    // necesito detenerme en el número 15

    // break: terminar un bucle
    // en general, va una condición que permita
    // terminar ese bucle
    if (i == 15) {
        break
    }

    console.log(i)
}

console.log("------------")

for (let i = 1.3; i <= 19.2; i++) {
    if (i % 2 == 0) {
        // continue es ignorar
        // solo ignora ese paso, no rompe el bucle
        continue
    }

    console.log(i)
}

// while - mientras
// solo necesita un argumento, y este argumento
// tiene que ser una verdad
// !!! Ten mucho cuidado de hacer una condición que siempre el resultado sea TRUE
// puedes ocasionar que el bucle sea infinito. Adios a tu pc, ve ahorrando más plata

// el break y el continue también función en
// while

console.log("-----------")

let x = 10
while (x > 0) {
    console.log(x)
    x--

    if (x == 5) {
        break
    }
}

//
CodeCombat