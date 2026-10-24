import { getIcon, getDayName } from './utils.js'

export const createDailyCard = (fecha, codigo, max, min) => {
    const divDia = document.createElement('div')
    const nombreDia = document.createElement('p')
    const icono = document.createElement('img')
    const temps = document.createElement('div')
    const tempMax = document.createElement('span')
    const tempMin = document.createElement('span')

    divDia.classList.add('divDia')
    temps.classList.add('temps')

    nombreDia.textContent = getDayName(fecha, 'short')
    icono.src = getIcon(codigo)
    tempMax.textContent = `${Math.round(max)}°`
    tempMin.textContent = `${Math.round(min)}°`

    temps.appendChild(tempMax)
    temps.appendChild(tempMin)

    divDia.appendChild(nombreDia)
    divDia.appendChild(icono)
    divDia.appendChild(temps)

    document.getElementById('diario').appendChild(divDia)
}

export const createHourCard = (hora, codigo, temp) => {
    const divHora = document.createElement('div')
    const icono = document.createElement('img')
    const textoHora = document.createElement('p')
    const textoTemp = document.createElement('span')

    divHora.classList.add('divHora')

    icono.src = getIcon(codigo)
    textoHora.textContent = hora.slice(11, 16)
    textoTemp.textContent = `${Math.round(temp)}°`

    divHora.appendChild(icono)
    divHora.appendChild(textoHora)
    divHora.appendChild(textoTemp)

    document.getElementById('horas').appendChild(divHora)
}