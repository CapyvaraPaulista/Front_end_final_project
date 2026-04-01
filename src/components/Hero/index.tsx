import { HeroContainer, Imagem } from './styles'
import Logo from '../../assets/logo.png'

const Hero = () => (
  <Imagem>
    <HeroContainer>
      <img src={Logo} alt="logo" style={{ cursor: 'pointer' }} />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeroContainer>
  </Imagem>
)

export default Hero
