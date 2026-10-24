import { getIcon, getDayName } from './utils.js'
import { createDailyCard, createHourCard } from './createCards.js'

const inputCiudad = document.getElementById('ciudad')
const btnBuscar = document.getElementById('btnBuscar')
const selectUnidades = document.getElementById('unidades')
const selectDias = document.getElementById('dias')
const mensaje = document.getElementById('mensaje')
const seccionClima = document.getElementById('clima')

let ciudad = null
let clima = null

const getCiudad = async (nombre) => {
    mensaje.textContent = 'Buscando...'

    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nombre}&count=1&language=es`)
    const data = await res.json()

    if (!data.results) {
        mensaje.textContent = 'No se encontró esa ciudad.'
        seccionClima.style.display = 'none'
        return
    }

    ciudad = data.results[0]
    mensaje.textContent = ''
    seccionClima.style.display = ''

    getClima()
}

const getClima = async () => {
    let unidades = ''

    if (selectUnidades.value == 'imperial') {
        unidades = '&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch'
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.latitude}&longitude=${ciudad.longitude}`
        + '&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code'
        + '&hourly=temperature_2m,weather_code'
        + '&daily=weather_code,temperature_2m_max,temperature_2m_min'
        + '&timezone=auto'
        + unidades

    const res = await fetch(url)
    clima = await res.json()

    mostrarActual()
    mostrarDiario()
    llenarDias()
    mostrarHoras()
}

const mostrarActual = () => {
    const actual = clima.current
    const medidas = clima.current_units

    document.getElementById('lugar').textContent = `${ciudad.name}, ${ciudad.country}`
    document.getElementById('fecha').textContent = new Date(actual.time).toLocaleDateString('es', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })
    document.getElementById('iconoActual').src = getIcon(actual.weather_code)
    document.getElementById('temperatura').textContent = `${Math.round(actual.temperature_2m)}°`

    document.getElementById('sensacion').textContent = `${Math.round(actual.apparent_temperature)}°`
    document.getElementById('humedad').textContent = `${actual.relative_humidity_2m}%`
    document.getElementById('viento').textContent = `${Math.round(actual.wind_speed_10m)} ${medidas.wind_speed_10m}`
    document.getElementById('precipitacion').textContent = `${actual.precipitation} ${medidas.precipitation}`
}

const mostrarDiario = () => {
    document.getElementById('diario').innerHTML = ''

    clima.daily.time.forEach((fecha, i) => {
        createDailyCard(
            fecha,
            clima.daily.weather_code[i],
            clima.daily.temperature_2m_max[i],
            clima.daily.temperature_2m_min[i]
        )
    })
}

const llenarDias = () => {
    selectDias.innerHTML = ''

    clima.daily.time.forEach(fecha => {
        const opcion = document.createElement('option')
        opcion.value = fecha
        opcion.textContent = getDayName(fecha, 'long')
        selectDias.appendChild(opcion)
    })
}

const mostrarHoras = () => {
    document.getElementById('horas').innerHTML = ''
    const diaElegido = selectDias.value

    clima.hourly.time.forEach((hora, i) => {
        if (hora.includes(diaElegido)) {
            createHourCard(hora, clima.hourly.weather_code[i], clima.hourly.temperature_2m[i])
        }
    })
}

btnBuscar.addEventListener('click', () => {
    if (inputCiudad.value != '') {
        getCiudad(inputCiudad.value)
    }
})

inputCiudad.addEventListener('keydown', (evento) => {
    if (evento.key == 'Enter') {
        btnBuscar.click()
    }
})

selectUnidades.addEventListener('change', () => {
    if (ciudad) {
        getClima()
    }
})

selectDias.addEventListener('change', () => {
    mostrarHoras()
})

getCiudad('Arequipa')