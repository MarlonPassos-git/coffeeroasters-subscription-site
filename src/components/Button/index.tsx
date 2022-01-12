import { Container} from './button-styles'
import { ReactChildren, ReactChild } from 'react';

interface childrenProps { 
    children?: ReactChild | ReactChildren;
}

export function Button({ children}: childrenProps) { 


    return (
        <Container>
            { children }
        </Container>    

    )
}