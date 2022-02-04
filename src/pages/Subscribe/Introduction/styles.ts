import styled from "styled-components";
import { progressiveClamp, Rem } from 'progressive-size'
import { H1, Paragraph as _Paragraph } from "../../../components/Texts/styles";
import { Section } from "../../../components/Section/section_styles";
import { responsiveBackground } from "../../../utils/responsiveBackground";
import { breakpoints } from "../../../styles/variables";

export const Container = styled(Section)`
  
  height: ${progressiveClamp(400, 450, breakpoints._tablet)};
  text-align: center;
  padding-top: ${Rem(101)};
  ${responsiveBackground({
    desktop: './images/plan/desktop/image-hero-blackcup.jpg',
    mobile: './images/plan/mobile/image-hero-blackcup.jpg',
    tablet: './images/plan/tablet/image-hero-blackcup.jpg',
  })}

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding-top: 0;
  }
`

export const Title = styled(H1)`
  margin-bottom: ${progressiveClamp(32, 22)};
`

export const Paragraph = styled(_Paragraph)`
  color: var(--light-gream);
  max-width: ${progressiveClamp(398, 445, breakpoints._tablet)};
`