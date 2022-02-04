import { progressiveClamp, Rem } from "progressive-size/dist";
import styled from "styled-components";
import { Section } from "../../../../components/Section/section_styles";
import { H1, Paragraph as _Paragraph } from "../../../../components/Texts/styles";
import { breakpoints } from "../../../../styles/variables";
import { responsiveBackground } from "../../../../utils/responsiveBackground";

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${progressiveClamp(400, 450, breakpoints._tablet)};


  ${responsiveBackground({
    mobile: "./images/about/mobile/image-hero-whitecup.jpg",
    desktop: "./images/about/desktop/image-hero-whitecup.jpg",
    tablet: "./images/about/tablet/image-hero-whitecup.jpg",
  })};


  @media (min-width: ${breakpoints.mobile}) {
    align-items: flex-start;
  }
`

export const Title = styled(H1)`
  margin-bottom: ${Rem(24)};


` 

export const Paragraph = styled(_Paragraph)`
  max-width: ${progressiveClamp(398, 445, breakpoints._tablet)};
  color: var(--light-gream);
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    text-align: left;
  }

`