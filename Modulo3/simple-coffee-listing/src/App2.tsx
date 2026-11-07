import { useEffect, useState } from 'react'
import type { Coffee } from './coffee'

const App2 = () => {

    const [coffees, setCoffees] = useState<Coffee[]>([])

    const getCoffee = async () => {

        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
        const data = await response.json()

        setCoffees(data)
    }

    useEffect(() => {
        getCoffee()
    }, [])

    return (
        <div>
            <h1>Elección de café</h1>
            {
                coffees.map(coffee => <div>
                    <img src={coffee.image} alt={coffee.name} />
                    <h2>{coffee.name}</h2>
                    {coffee.popular ? <p>Popular</p> : <p>No popular</p>}
                    <p>{coffee.price}</p>
                    {coffee.rating == null ? <p>Sin calificación</p> : <p>{coffee.rating}</p>}
                </div>)
            }
        </div>
    )
}

export default App2