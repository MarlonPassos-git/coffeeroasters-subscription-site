import { progressiveClamp, Rem } from "progressive-size/dist";
import styled from "styled-components";

export const Section = styled.section`

  width: 100%;
  padding-left: ${progressiveClamp(24, 85)};
  padding-right: ${progressiveClamp(24, 85)};

  border-radius: ${Rem(10)};
  
  background-position: right top;
  background-size: cover;
  background-repeat: no-repeat;
  
`

