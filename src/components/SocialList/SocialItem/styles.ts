import { Rem } from "progressive-size/dist";
import styled from "styled-components";

export const Container = styled.li`
  height: ${Rem(24)};
  width: ${Rem(24)};
  cursor: pointer;


  &:hover, &:focus-visible {
    filter: brightness(0) saturate(100%) invert(86%) sepia(18%) saturate(684%) hue-rotate(325deg) brightness(102%) contrast(98%);
  }


`

export const Img = styled.img`
  height: ${Rem(24)};
  width: ${Rem(24)};
`
