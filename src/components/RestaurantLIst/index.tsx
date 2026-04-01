import { ListContainer } from './styles'
import RestaurantCard from '../RestaurantCard'
import Restaurants from '../../models/Restaurants'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <ListContainer>
      {restaurants.map((restaurants) => (
        <RestaurantCard
          key={restaurants.id}
          id={restaurants.id}
          title={restaurants.title}
          rating={restaurants.rating}
          category={restaurants.category}
          image={restaurants.image}
          description={restaurants.description}
          infos={restaurants.infos}
        />
      ))}
    </ListContainer>
  </div>
)

export default RestaurantList
