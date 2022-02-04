import { Rem } from "progressive-size/dist";
import styled from "styled-components";
import { breakpoints } from "../../../../../styles/variables";

export const Container = styled.address`
  

`
export const WrapperLocations = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: ${Rem(10)};
  row-gap: ${Rem(80)};


  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
  }
`