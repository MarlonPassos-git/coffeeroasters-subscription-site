import { progressiveClamp, Rem } from 'progressive-size/dist';
import styled from 'styled-components';
import { H3, Paragraph as _Paragraph } from '../../../../../components/Texts/styles';
import { breakpoints } from '../../../../../styles/variables';

export const Container = styled.li`
  display: grid;
  grid-template: 
    "img" min-content
    "title" min-content
    "paragraph" min-content
  ;
  background-color: var(--dark-cyan);
  border-radius: ${Rem(8)};
  min-height: ${Rem(382)};
  height: auto;
  width: 100%;
  text-align: center;
  padding: 72px 12px 42px ;
  justify-items: center;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    grid-template: 
      "img title" min-content
      "img paragraph" min-content
      / ${progressiveClamp(130, 165, breakpoints._mobile,  breakpoints._tablet)} 1fr
    ;
    min-height: ${Rem(180)};
    height: auto;
    width: 100%;
    padding: 41px 40px 41px 15px;
    
    text-align: left;
    justify-items: start;
  }

  @media (min-width: ${breakpoints.tablet}) {
    
   
  }

`

export const Img = styled.img`
  grid-area: img;
  height: ${Rem(72)};
  
  justify-self: center;
  
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) { 
    align-self: center;

  }
`


export const Title = styled(H3)`
  grid-area: title;
  color: var(--light-gream);
  margin: 
    ${Rem(56)} 
    0 
    ${Rem(24)}
  ;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {  
    margin: 
    0  
    0 
    ${Rem(24)}
  ;
  }
`

export const Paragraph = styled(_Paragraph)`
  grid-area: paragraph;
  color: var(--light-gream);
  max-width: ${Rem(255)};

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    max-width: none;
  }
`

