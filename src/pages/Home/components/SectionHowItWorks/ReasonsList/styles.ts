import { progressiveClamp, Rem } from 'progressive-size/dist';
import styled from 'styled-components';
import { breakpoints } from '../../../../../styles/variables';


export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: ${Rem(56)};
  margin-bottom: auto;
  column-gap: ${progressiveClamp(10, 95, breakpoints._tablet)};
  

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }

  
`

