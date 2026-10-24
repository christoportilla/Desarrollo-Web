const params = new URLSearchParams(location.search)

const code = params.get("code")
const population = params.get("population")

fetch('../data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const pais = data.find(pais => pais.alpha3Code == code && pais.population == population)

        document.querySelector('h1').textContent = pais.name
    })