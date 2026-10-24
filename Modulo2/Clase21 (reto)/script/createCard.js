export const createCard = (pais) => {
    const divPais = document.createElement('div')
    const imgPais = document.createElement('img')
    const descripcionPais = document.createElement('div')
    const nombrePais = document.createElement('h3')
    const linkPais = document.createElement('a')
    const infoPais = document.createElement('div')

    const population = document.createElement('p')
    const region = document.createElement('p')
    const capital = document.createElement('p')

    // agregandole clases a los elementos
    divPais.classList.add('divPais')
    descripcionPais.classList.add('descripcionPais')

    // -------------
    // llenando los datos
    imgPais.src = pais.flag
    linkPais.textContent = pais.name
    linkPais.href = `./pages/country.html?code=${pais.alpha3Code}&population=${pais.population}`

    nombrePais.appendChild(linkPais)
    // a diferencia de textContent, este puede procesar html dentro del texto
    population.innerHTML = `<b>Population:</b> ${pais.population}`
    region.innerHTML = `<b>Region:</b> ${pais.region}`
    capital.innerHTML = `<b>Capital:</b> ${pais.capital}`

    // -------------
    // creando la estructura
    infoPais.appendChild(population)
    infoPais.appendChild(region)
    infoPais.appendChild(capital)
    // --
    descripcionPais.appendChild(nombrePais)
    descripcionPais.appendChild(infoPais)
    // --
    divPais.appendChild(imgPais)
    divPais.appendChild(descripcionPais)

    document.getElementById('countries').appendChild(divPais)
}