import type { FC } from 'react'
import type { Coffee } from '../../coffee'

interface CoffeeCardProps {
    coffee: Coffee
}

const CoffeeCard: FC<CoffeeCardProps> = ({coffee}) => {
  return (
    <div>
        <div>
            { coffee.popular == true && <div>Popular</div>}
            <img src={coffee.image} alt={coffee.name} />
        </div>

        <div>
            <h3>{coffee.name}</h3>
            <p>{coffee.price}</p>
        </div>

        <div>
            <img src="" alt="" />
            <p>{coffee.rating}</p>
            <p>{coffee.votes}</p>
        </div>
    </div>
  )
}

export default CoffeeCard