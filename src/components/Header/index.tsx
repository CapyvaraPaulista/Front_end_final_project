import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <img src={Logo} alt="logo" />
      <span>0 produto(s) no carrinho</span>
    </div>
  </HeaderContainer>
)

export default Header
