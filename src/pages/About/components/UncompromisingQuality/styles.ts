import styled from "styled-components";
import { H2, Paragraph as _Paragraph } from "../../../../components/Texts/styles";
import { breakpoints } from "../../../../styles/variables";
import { Section } from "../../../../components/Section/section_styles";
import { progressiveClamp, Rem } from "progressive-size"

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  height: ${progressiveClamp(509, 474, breakpoints._mobile)};
  background-color: var(--very-dark-grayish-blue);  
  width: 100%;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    column-gap: ${Rem(88)};
    
  }


  img {
    width: 100%;
    border-radius: ${Rem(8)};
    transform: translateY(-50%);
    max-height: ${Rem(200)};
    object-fit: cover;
    
    @media (min-width: ${breakpoints.mobile}) {
      max-height: ${Rem(320)};
    }

    @media (min-width: ${breakpoints.tablet}) {
      transform: translateY(${Rem(-88)});
      height: 100%;
      width: ${Rem(445)};
      max-height: none;

      
    }
  }


`

export const Title = styled(H2)`
  margin-bottom: ${progressiveClamp(32, 24, breakpoints._tablet)};
`

export const Paragraph = styled(_Paragraph)`
  

`

export const WrapperTexts = styled.div`
  position: absolute;
  top: ${Rem(142)};
  color: var(--light-gream);
  text-align: center;
  left: 0;
  margin: 0 ${progressiveClamp(24, 85)};

  @media (min-width: ${breakpoints.mobile}) {
    top: ${Rem(224)};
  }

  @media (min-width: ${breakpoints.tablet}) {
    position: initial;
    margin: ${Rem(88)} 0;
    max-width: ${Rem(540)};
    text-align: left;
    flex-shrink: 5;  
    
  }
`
