import { progressiveClamp, Rem } from "progressive-size/dist";
import styled from "styled-components";
import { H2, Paragraph as _Paragraph } from "../../../../components/Texts/styles";
import { breakpoints } from "../../../../styles/variables";

export const Container = styled.section`
  max-width: ${Rem(1045)};
  margin: 0 auto;

  padding:  ${Rem(120)} 0;

  @media (min-width: ${breakpoints.mobile}) {
    padding: ${progressiveClamp(144, 168, breakpoints._tablet)} 0;
  }



`

export const Title = styled.h2`
  font-size: var(--font-extra-small);
  line-height: ${Rem(32)};
  text-align: center;
  color: var(--grey);
  margin-bottom: ${Rem(72)};

  @media (min-width: ${breakpoints.mobile}) {
    text-align: left;
  }



` 