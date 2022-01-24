import { progressiveClamp, Rem } from 'progressive-size/dist'
import styled from 'styled-components'
import { H3, Paragraph } from '../../../../../components/Texts/styles'
import { breakpoints } from '../../../../../styles/variables'

export const Container = styled.li`
  display: grid;
  grid-template: 
    "img" min-content
    "title" min-content
    "description";
  ;
  justify-content: center;
  align-items: start;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    grid-template:
      "img title" 
      "img description"
  }

  z-index: 1;

`

export const Img = styled.img`
  grid-area: img;
  justify-self: center;
  object-fit: contain;
  height: ${progressiveClamp(151, 193)};
  width: ${progressiveClamp(200, 256)};

`

export const Title = styled(H3)`
  grid-area: title;
  text-align: center;

  margin:
    ${Rem(24)} 
    0
    ${progressiveClamp(16, 24, 375,  breakpoints._tablet)}
  ;


`

export const Description = styled(Paragraph)`
  grid-area: description;
  text-align: center;

  max-width: ${progressiveClamp(282, 255, breakpoints._tablet)};
`