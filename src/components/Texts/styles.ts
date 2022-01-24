import { progressiveClamp, Rem } from 'progressive-size/dist'
import styled from 'styled-components'


export const TitleAlternateBig = styled.strong`
    font-size: var(--font-extra-large);
    line-height: ${Rem(72)};
    text-align: center;
    color: var(--grey);
    text-transform: lowercase; 
    font-weight: 900;
    font-family: 'Fraunces', sans-serif;


`

export const H1 = styled.h1`
    font-size: var(--font-large); 
    color: var(--light-gream);
`

export const H2 = styled.h2`
    font-size: var(--font-medium);
    line-height: ${progressiveClamp(28, 48)};
`
 
export const H3 = styled.h3`
    font-size: var(--font-small);
    line-height: ${progressiveClamp(32, 36)};

`

export const H4 = styled.h4`
    font-size: var(--font-extra-small);
    line-height: ${Rem(32)};
    
`

export const Paragraph = styled.p`
    font-size: var(--font-text-standard);
    line-height: ${progressiveClamp(25, 26)};

`