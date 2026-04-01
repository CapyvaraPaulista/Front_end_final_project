import { Categoria, Imagem, TituloBanner } from './styles'
import capaitaliana from '../../assets/capaItaliana.png'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${capaitaliana})` }}>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <TituloBanner>La Dolce Vita Trattoria</TituloBanner>
    </div>
  </Imagem>
)

export default BannerPerfil
