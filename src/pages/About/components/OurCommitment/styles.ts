import { progressive, progressiveClamp, progressiveMax, Rem } from "progressive-size/dist";
import styled from "styled-components";
import { H2, Paragraph as _Paragraph } from "../../../../components/Texts/styles";
import { breakpoints } from "../../../../styles/variables";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  column-gap: ${progressiveClamp(69, 125, breakpoints._tablet)};
  height: ${Rem(1219)};  
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
    height: ${progressiveClamp(918, 944, breakpoints._tablet)};
  }

  picture {
    width: 100%;
    height: ${Rem(400)};  
    border-radius: ${Rem(8)};
    overflow: hidden;
    align-items: center;

    img {
        height: inherit;
    object-fit: cover;
    width: 100%;
    object-position: top;
    }
  

    @media (min-width: ${breakpoints.mobile}) { 
      width: ${progressiveClamp(281, 445, breakpoints._tablet)}; 
      height: ${progressiveClamp(420, 520, breakpoints._tablet)};  
    }

    @media (min-width: ${breakpoints.mobile}) { 
      
      img {
        width: ${progressiveClamp(281, 445, breakpoints._tablet)}; 
        object-fit: cover;
        height: 100%;
        
      }
    }
`

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (min-width: ${breakpoints.tablet}) { 
    max-width: ${Rem(540)};
  }

  
`

export const Title = styled(H2)`

  margin: ${Rem(48)} 0 ${progressiveClamp(30, 32, breakpoints._tablet)};
  
  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    
  } 

  @media (min-width: ${breakpoints.mobile}) {
    margin-top: 0;
  }

`

export const Paragraph = styled(_Paragraph)`
  font-size: var(--font-text-standard);
  font-weight: 400;
  
`
