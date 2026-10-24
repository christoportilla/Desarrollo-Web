// obteniendo un elemento por su etiqueta
console.log(document.querySelector('button').textContent)

// obteniendo todos los botones por su etiqueta

const botones = document.querySelectorAll('button')

for(let i = 0; i < botones.length; i++) {
    console.log(botones[i].textContent)
}

// obtener un elemento por su id
// si no colocas el #, el querySelector va a pensar que estás buscando un elemento por etiqueta
console.log(document.querySelector('#bonito').textContent)
// forma antigua
// no es necesario colocar el # en este método
console.log(document.getElementById('bonito'))

// obteniendo elementos por clase
// primera forma que no es válida porque solo te muestra el primero
console.log(document.querySelector('.titulos').textContent)
// segunda forma
console.log(document.querySelectorAll('.titulos'))
// tercera forma
console.log(document.getElementsByClassName('titulos'))

// cambiando el texto de algún elemento
document.querySelector('p').textContent = "Hola, aún te extraño"

// se necesita obtener la edad del usuario mediante prompt
// si el usuario es mayor de edad, se mostrará un mensaje en el párrafo
// que indique que es mayor de edad. Si no lo es, el mensaje debe ser el opuesto

// const edad = Number(prompt("Coloca tu edad"))
//if(edad >= 18) {
//    document.querySelector('p').textContent = "Eres mayor de edad"
//} else {
//    document.querySelector('p').textContent = "Eres menor de edad"
//}

//const base = Number(prompt("Ingresa la base"))
//const altura = Number(prompt("Ingresa la altura"))
//document.querySelector('p').textContent = "El área es " + base * altura / 2

// aprendiendo a cambiar el CSS
document.querySelector('p').style.fontSize = "40px"
document.querySelector('p').style.color = "red"
document.querySelector('p').style.borderBottom = "4px solid pink"
document.querySelector('p').style.backgroundColor = "beige"
document.querySelector('p').style.borderRadius = "20px"
document.querySelector('p').style.padding = "20px"
document.querySelector('p').style.width = "fit-content"

// segunda forma
// agregando una calse
document.querySelector('button')
document.querySelector('#bonito').classList.add('ejemplo')
document.getElementById('bonito').classList.add('ejemplo')
// agregando con id
document.getElementById('bonito2').id = 'ejemplo2'

// creando un elemento
const frase = document.createElement('p')
frase.textContent = "Ya te superé"
frase.style.color = "blue"
frase.style.fontSize = "20px"
frase.style.fontWeight = "bold"
// llamamos al elemento y colocamos a su hijo dentro
// appendChild agrega al final
document.querySelector('body').appendChild(frase)
// prepend agrega desde arriba
document.querySelector('body').prepend(frase)