import { progressiveClamp } from 'progressive-size/dist'
import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: ${progressiveClamp(90, 113)};
    width: 100%;
    position: relative;

`

export const Logo = styled.img`
    height: ${progressiveClamp(17, 25)};
    width: ${progressiveClamp(162, 235)};

`