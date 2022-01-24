import { Rem } from "progressive-size/dist";
import styled from "styled-components";
import { breakpoints } from "../../styles/variables";
import { H3 } from "../Texts/styles";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${Rem(32)};
  align-items: center;

  padding-top: ${Rem(40)};

  @media  (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    padding-top:  0;
    
  }

`

export const NavigatorItem = styled.a`
  cursor: pointer;
  color: var(--grey);
  font-family: 'Barlow';
  font-size: var(--font-navigation);
  font-weight: 700;
  font-size: ${Rem(12)};
  line-height: ${Rem(15)};
  letter-spacing: ${Rem(0.92)};

  &:hover {
      color: var(--dark-grey-blue);
  }
  

  @media (max-width: ${breakpoints.mobile}) {

    font-family: 'Fraunces';
    font-size: var(--font-extra-small);
    line-height: ${Rem(32)};
    font-weight: 900;
    color: var(--dark-grey-blue);

    
  }
`
/* Rectangle */

