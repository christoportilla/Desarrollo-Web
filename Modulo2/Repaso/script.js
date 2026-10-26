const getData = async () => {
    const res = await fetch('./data.json')
    const data = await res.json()

    document.getElementById('titulo').textContent = 'PRODUCTOS'

    data.forEach(producto => {
        const crearDiv = document.createElement('div')
        crearDiv.classList.add('tarjeta')
        
        const nombreProducto = document.createElement('h3')
        const precioProducto = document.createElement('p')
        const stockProducto = document.createElement('p')

        nombreProducto.textContent = producto.nombre
        precioProducto.textContent = `Precio: S/. ${producto.precio}`
        if (producto.stock == 0) {
            stockProducto.textContent = 'Stock: Agotado'
        } else {
            stockProducto.textContent = `Stock: ${producto.stock}`
        }

        crearDiv.appendChild(nombreProducto)
        crearDiv.appendChild(precioProducto)
        crearDiv.appendChild(stockProducto)

        document.getElementById('productos').appendChild(crearDiv)

    });

}

getData()