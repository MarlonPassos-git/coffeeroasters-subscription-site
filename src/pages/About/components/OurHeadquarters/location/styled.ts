import { Rem, progressiveClamp } from "progressive-size/dist";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/variables";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  


  @media (min-width: ${breakpoints.mobile}) {
    align-items: start;
    max-width: ${Rem(285)};
    width: 100%;
  }


`

export const Img = styled.img`
  max-width: ${Rem(51)};
  max-height: ${Rem(51)};

`

export const Title = styled.h3`
  margin-top: ${Rem(48)};
  margin-bottom: ${Rem(22)};
  font-size: var(--font-small);
  line-height: ${Rem(36)};
  


  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: ${progressiveClamp(21, 24, breakpoints._tablet)};
  }
`

export const Paragraph = styled.p`

  font-size: 1rem;
  line-height: ${Rem(26)};
  color: var(--dark-grey-blue);

`

export const PhoneNumber = styled.a`
  font-size: 1rem;
  line-height: ${Rem(26)};
  color: var(--dark-grey-blue);
  cursor: pointer;
`