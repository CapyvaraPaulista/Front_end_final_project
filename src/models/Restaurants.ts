class Restaurants {
  id: number
  title: string
  rating: number
  category: string
  image: string
  description: string
  infos: string[]

  constructor(
    id: number,
    title: string,
    rating: number,
    category: string,
    image: string,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.rating = rating
    this.category = category
    this.image = image
    this.description = description
    this.infos = infos
  }
}

export default Restaurants
