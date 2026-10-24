const texto = "Hola mundo"

console.log(texto)

// Métodos

// 1. Pasar a mayúscula
console.log(texto.toUpperCase())

// 2. Pasar a minúscula
const texto2 = "AÚN TE AMO, VUELVE CONMIGO"
console.log(texto2.toLowerCase())

// Búsqueda
const fruta = "naranja"
// Verificar si la palabra o frase termina con cierta palabra o frase
console.log(fruta.endsWith('ja'))
// Verificar si la plabra o frase comienza con cierta palabra o frase
console.log(fruta.startsWith('na'))
// Si la palabra o frase incluye ...
console.log(fruta.includes('ran'))
// Obtener el índice de la primera letra o palabra que coincida
console.log(fruta.indexOf('n'))
// Obtener el índice de la última letra o palabra que coincida
console.log(fruta.lastIndexOf('a'))
// Otros...
console.log(fruta.search(/n/))
// Regex - Regular Expression

// Transformación
// Limpiando espacios extra que estén antes o después de la frase
const frase = "  hola@gmail.com "
console.log(frase.trim())
// trimEnd - Limpia los espacios solo de la derecha o del final
// trimStart - Limpia los espacios de la izquierda o delk inicio

const mensaje = "yo no te amo"
// Solo cambiamos la primera coincidencia
console.log(mensaje.replace('o', 'a'))
// Para cambiar todas las coincidencias
console.log(mensaje.replaceAll('o', 'a'))

// Dividir, comparar, normalizar
const alumnos = "Manuel-Pepe-Maria-Luis"
console.log(alumnos.split('-'))
// LocaleCompare te da -1 si la letras está antes que la otra. Te da 1 si está después y te da 0 si están en el mismo lugar
console.log("z".localeCompare("a"))

const texto3 = "Ella es"
const texto4 = "La mejor del mundo"

console.log(texto3.concat(" ", texto4.toLowerCase()))

const e = "programación"
// slice - extrae una porción del texto
// si solo se coloca un número, se tomará en cuenta desde ese parámetro hasta el final
console.log(e.slice(3))

// Búsqueda 2 - Accediendo a algún caracter
const t = "hola mundo"
// length no lleva paréntesis porque es un dato o propiedades 
console.log(t.length)
// charAt sirve para colocar la posición y te da la letra en esa posición
// Colocar un índice que no existe nos dará un string vacío
console.log(t.charAt('2'))
console.log(t[0])

// Colocar un número en negativo cuenta desde el último
console.log(t.at(-2))