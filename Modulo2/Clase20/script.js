const API = "https://jsonplaceholder.typicode.com/users"

const usuarios = "https://jsonplaceholder.typicode.com/users"

const comentarios = "https://jsonplaceholder.typicode.com/comments"

// then - entonces
fetch(comentarios)
    .then(response => {
        return response.json()
    })
    
    .then(todoFiltrado => {
        for (let i = 0; i < 5; i++) {
            const grupo = document.createElement('div')

            const comentario1 = document.createElement('p')
            comentario1.textContent = todoFiltrado[i].name
            const comentario2 = document.createElement('p')
            comentario2.textContent = todoFiltrado[i].email
            const comentario3 = document.createElement('p')
            comentario3.textContent = todoFiltrado[i].body

            grupo.appendChild(comentario1)
            grupo.appendChild(comentario2)
            grupo.appendChild(comentario3)

            document.querySelector('body').appendChild(grupo)
        }
    })