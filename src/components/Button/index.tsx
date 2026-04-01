import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'link' | 'button'
  to?: string
  title: string
  onClick?: () => void
  children: string
}

const Button = ({ type, to, title, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
