import { progressiveClamp, Rem } from 'progressive-size/dist'
import styled from 'styled-components'


export const _TitleAlternateBig = styled.strong`
    font-size: var(--font-extra-large);
    line-height: ${Rem(72)};
    text-align: center;
    color: var(--grey);
    text-transform: lowercase; 


`

export const _H1 = styled.h1`
    font-size: var(--font-large); 
    color: var(--light-gream);
`

export const _H2 = styled.h2`
    font-size: var(--font-medium);
    line-height: ${progressiveClamp(28, 48)};
`
 
export const _H3 = styled.h3`
    font-size: var(--font-small);
    line-height: ${progressiveClamp(32, 36)};

`

export const _H4 = styled.h4`
    font-size: var(--font-extra-small);
    line-height: ${Rem(32)};
    
`

export const _Paragraph = styled.p`
    font-size: var(--font-extra-small);
    line-height: ${progressiveClamp(25, 26)};

`