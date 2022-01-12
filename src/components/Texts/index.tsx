import { _H1, _H2, _H3, _TitleAlternateBig, _H4, _Paragraph } from "./texts-styles";
import { ReactChildren, ReactChild } from "react";


interface childrenProps { 
    children: ReactChild | ReactChildren;
}


export function TitleAlternateBig({ children }: childrenProps) { 

    return (
        <_TitleAlternateBig>
            { children }
        </_TitleAlternateBig>
    )
}


export function H1({ children }: childrenProps) { 

    return (
        <_H1>
            { children }
        </_H1>
    )
}

export function H2({ children }: childrenProps) { 
    
        return (
            <_H2>
                { children }
            </_H2>
        )   
}

export function H3({ children }: childrenProps) { 
    
    return (
        <_H3>
            {children}
        </_H3>
    )
}


export function H4({ children }: childrenProps) {
        
        return (
            <_H4>
                {children}
            </_H4>
        )
}

export function Text({ children }: childrenProps) {
            
            return (
                <_Paragraph>
                    {children}
                </_Paragraph>
            )
}