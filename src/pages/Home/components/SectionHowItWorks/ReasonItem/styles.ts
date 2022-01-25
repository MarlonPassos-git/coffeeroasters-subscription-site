import { progressive, progressiveClamp, Rem,  } from 'progressive-size/dist';
import styled from 'styled-components';
import { Paragraph as _Paragraph } from '../../../../../components/Texts/styles';
import { breakpoints } from '../../../../../styles/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: ${progressiveClamp(252, 355)};
  width: 100%;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) { 
    align-items: start;
    text-align: left;
  }

`

export const Number = styled.span`
  font-size: ${Rem(72)};
  color: var(--pale-orange);
  font-weight: back;
  font-family: 'Fraunces', serif;

`

export const Title = styled.h3`

  @media (min-width: ${breakpoints.mobile}) {  
    max-width: ${progressiveClamp(200, 230, breakpoints._tablet)};
  }
  margin: 
    ${progressiveClamp(24, 38, breakpoints._tablet)}
    0 
    ${progressiveClamp(24, 43, breakpoints._tablet)}
  ;
`

export const Paragraph = styled(_Paragraph)`
  max-width: ${Rem(327)};

  @media (min-width: ${breakpoints.mobile}) { 
    max-width: ${progressive(228, 285, breakpoints._tablet)};
  }
  

`