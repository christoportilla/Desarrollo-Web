export const getIcon = (codigo) => {
    let nombre = ''

    if (codigo == 0) {
        nombre = 'sunny'
    } else if (codigo <= 2) {
        nombre = 'partly-cloudy'
    } else if (codigo == 3) {
        nombre = 'overcast'
    } else if (codigo <= 48) {
        nombre = 'fog'
    } else if (codigo <= 57) {
        nombre = 'drizzle'
    } else if (codigo <= 67) {
        nombre = 'rain'
    } else if (codigo <= 77) {
        nombre = 'snow'
    } else if (codigo <= 82) {
        nombre = 'rain'
    } else if (codigo <= 86) {
        nombre = 'snow'
    } else {
        nombre = 'storm'
    }

    return `./assets/images/icon-${nombre}.webp`
}

export const getDayName = (fecha, formato) => {
    return new Date(fecha + 'T00:00').toLocaleDateString('es', { weekday: formato })
}