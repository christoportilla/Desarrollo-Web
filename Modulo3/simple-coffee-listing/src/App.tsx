// "rafce" para colocar todo lo de abajo

import { useEffect, useEffectEvent, useState } from "react"
import CoffeeCard from "./components/coffeeCard/CoffeeCard"
import type { Coffee } from "./coffee"

const App = () => {
  const [coffees, setCoffees] = useState<Array<Coffee>>()

  const getCoffee = async () => {
    const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
    const data = await response.json()

    setCoffees(data)
  }

  useEffect(() => {
    getCoffee()
  }, [])

  return (
    <>
      <div>App</div>
      {
        coffees?.map(c => <CoffeeCard key={c.id} coffee={c}/>)
      }
    </>
  )
}

export default App