import React, { ReactNode } from "react"
import { StyledContainer } from "./style";

export interface IContainerProps {
    fluid?: boolean,
    children?: ReactNode,
    [key: string]: any
}

export default function Container(props: IContainerProps) {
    const {
        children,
        fluid,
        ...rest } = props;

    return (
        <StyledContainer
            fluid={fluid}
            {...rest}
        >
            {children}
        </StyledContainer>
    );
}
