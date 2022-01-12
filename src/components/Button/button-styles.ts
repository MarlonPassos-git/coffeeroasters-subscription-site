import { Rem } from "progressive-size/dist";
import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: ${Rem(56)};
    width: ${Rem(217)};
    border-radius: ${Rem(6)};

    background-color: var(--dark-cyan);

    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: ${Rem(18)};
    line-height: ${Rem(25)};
    color: var(--light-gream);

    transition: 0.3s ease-in-out;

    &:hover, &:focus-visible {
        background-color: var(--light-cyan);
    }

    &[disabled] {
        background-color: var(--pale-orange);
        cursor: not-allowed;
    }


    
`

