import { createCard } from './createCard.js'

let paises = []

const getData = async () => {
    const res = await fetch('./data.json')
    const data = await res.json()
    paises = data

    paises.forEach(pais => {
        createCard(pais)
    })
}

getData()


// por detrás el forEach funciona como:
// let i = 0; i <= data.length; i++
// siempre va hacia delante y de uno en uno
// filtro de búsqueda
const paisFilter = document.getElementById('paisFilter')

paisFilter.addEventListener('input', () => {
    // cada vez que se escribe o borra una letra, entonces
    // limpiamos el contenido de paises anterior
    // eso significa que borrará la data cargada por primera vez
    document.getElementById('countries').innerHTML = ''

    if (paisFilter.value != '') {
        const paisesFiltrados = paises.filter(pais => pais.name.includes(paisFilter.value))

        paisesFiltrados.forEach(pais => {
            createCard(pais)
        })
    }

    else {
        paises.forEach(pais => {
            createCard(pais)
        })
    }
})

// filtro del select
const selectContinente = document.getElementById('continentes')

selectContinente.addEventListener('change', async () => {
    await getData()
    document.getElementById('countries').innerHTML = ''
    const valor = selectContinente.value

    if (valor == "*") {
        await getData()
    }

    const paisesFiltrados = paises.filter(pais => pais.region == valor)

    paises = paisesFiltrados

    paises.forEach(pais => {
        createCard(pais)
    })
})