// Necesito ingresar mi edad y verificar si soy mayor de edad

// 1. ingresar la edad
const edad = prompt("Ingresa tu edad")

// 2. verificar si es mayor de edad
if (edad >= 18) {
    // si la condición nunca se cumple, el código que hayas
    // escrito dentro, nunca se va a ejecutar
    console.log("Eres mayor de edad")
    // else significa "si no"  
    // en caso que la confición "if" no se cumpla
    // entonces el "else" es lo que va ejecutar

    // if(edad >= 18) - si la edad es mayor o igual a 18
    // else - si no
} else {
    console.log("No eres mayor de edad")
}