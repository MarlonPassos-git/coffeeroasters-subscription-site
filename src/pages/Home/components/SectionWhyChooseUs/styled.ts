import { progressiveClamp, Rem } from 'progressive-size/dist';
import styled from 'styled-components';
import { Section } from '../../../../components/Section/section_styles';
import { H2, Paragraph as _Paragraph } from '../../../../components/Texts/styles';
import { breakpoints } from '../../../../styles/variables';

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  background-color: var(--very-dark-grayish-blue);
  height: ${progressiveClamp(902, 577)};
  padding-top: ${progressiveClamp(64, 100)};
  align-items: center;
  margin-bottom: ${Rem(717)};

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: ${Rem(434)};
    
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${Rem(351)};
    
  }
  


`

export const Title = styled(H2)`
  color: var(--light-gream);
  text-align: center;
`

export const Paragraph = styled(_Paragraph)`
  max-width: ${Rem(540)};
  color: var(--light-gream);
  margin:
    ${progressiveClamp(24, 32)} 0 
    ${progressiveClamp(64, 86)} 
  ;
  text-align: center;

`