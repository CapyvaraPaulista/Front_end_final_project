import Products from '../../models/Products'
import ProductCard from '../ProductCard'
import { ListContainer } from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <ListContainer>
      {products.map((products) => (
        <ProductCard
          key={products.id}
          name={products.name}
          photo={products.photo}
          description={products.description}
          onOpen={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      ))}
    </ListContainer>
  </div>
)

export default ProductList
