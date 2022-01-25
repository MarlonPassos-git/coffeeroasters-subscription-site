import { progressive } from "progressive-size/dist";
import styled from "styled-components";
import { breakpoints } from "../../styles/variables";

export const Svg = styled.svg`
  display: none;
  width: ${progressive(497, 760, breakpoints._tablet)};

  @media (min-width: ${breakpoints.mobile}) { 
    display: block;
  }

`