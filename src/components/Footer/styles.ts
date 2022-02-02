import { progressiveClamp, Rem } from "progressive-size/dist";
import styled from "styled-components";
import { breakpoints } from "../../styles/variables";

export const Container = styled.footer`
  width: 100%;
  background-color: var(--very-dark-grayish-blue);
  height: ${Rem(346)};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${Rem(48)};
  padding: ${progressiveClamp(54, 47, breakpoints._tablet)} 0;
  margin-bottom: ${progressiveClamp(72, 88, breakpoints._tablet)};  

  @media (min-width: ${breakpoints.mobile}) { 
    height: ${Rem(270)};
    row-gap: 0;
  }

  @media (min-width: ${breakpoints.tablet}) { 
    height: ${Rem(120)};
    flex-direction: row;
    justify-content: space-between;
    padding:  0 ${Rem(85)} 0  ${Rem(85)};
    align-items: center;
  }

  a {
    text-transform: uppercase;
    font-size: ${Rem(12)};
    font-weight: bold;
    line-height: ${Rem(15)};
    color:  var(--grey);
    font-family: 'Barlow', sans-serif;
  }

  nav { 
    padding: 0;
    @media (min-width: ${breakpoints.mobile})  and (max-width: ${breakpoints.tablet}){ 
      margin: 
        ${Rem(32)}
        0
        ${Rem(65)}
      ;
    }
  }
` 

export const Logo = styled.img`
  width: ${Rem(235)};
  height: ${Rem(25)};
  cursor: pointer;  
`