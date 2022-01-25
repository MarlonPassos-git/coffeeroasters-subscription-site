import { progressiveClamp, Rem } from 'progressive-size/dist'
import styled from 'styled-components'
import { breakpoints } from '../../../../styles/variables'

export const Container = styled.section`
  height: ${Rem(1116)};
  margin-bottom: ${progressiveClamp(120, 200, breakpoints._tablet)};
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin-left: ${progressiveClamp(0, 85, breakpoints._tablet)};
  


  @media (min-width: ${breakpoints.mobile}) {
    height: ${ progressiveClamp(622, 685, breakpoints._tablet) };
    align-items: start  ;
  }
`

export const Title = styled.h2`
  font-size: var(--font-extra-small);
  line-height: ${Rem(32)};
  font-weight: black; 
  margin-bottom: ${Rem(80)};
  color: var(--grey);
  
  @media (min-width: ${breakpoints.mobile} and (max-width: ${breakpoints.tablet})) {
    margin-bottom: ${Rem(40)}

  }

`