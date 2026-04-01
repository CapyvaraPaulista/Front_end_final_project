import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.salmao};
  color: ${cores.corDeFundo};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`
