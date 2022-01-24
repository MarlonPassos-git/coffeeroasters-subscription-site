import { progressiveClamp, Rem } from "progressive-size/dist";
import styled from "styled-components";
import { Section } from "../../../../components/Section/section_styles";
import { H1, Paragraph  } from "../../../../components/Texts/styles";
import { breakpoints } from "../../../../styles/variables";
import { reponsiveBackground } from "../../../../utils/responsiveBackground";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${progressiveClamp(500, 600)};
  ${reponsiveBackground({
    mobile: "./images/home/mobile/image-hero-coffeepress.jpg",
    tablet: './images/home/tablet/image-hero-coffeepress.jpg',
    desktop: "./images/home/desktop/image-hero-coffeepress.jpg",
  })}
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) { 
    align-items: flex-start;
    text-align: start;
  }
`  

export const Title = styled(H1)`
  
`

export const Text = styled(Paragraph)`
  margin:
    ${progressiveClamp(24, 32, breakpoints._tablet)} 
    0
    ${progressiveClamp(40, 56, breakpoints._tablet)}
  ;
  color: var(--light-gream);
  opacity: 0.8;
  max-width: ${progressiveClamp(398, 445, breakpoints._tablet)}
`
