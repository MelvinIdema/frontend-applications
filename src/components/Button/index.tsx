import React from "react"
import { StyledButton } from "./style"

export type ButtonVariants =
    | 'primary'
    | 'thumbnail'

export interface IButtonProps {
    label?: string,
    image?: string,
    onClick: () => void,
    variant?: ButtonVariants,
    [key: string]: any
}

export default function Button(props: IButtonProps) {
    const {
        label,
        onClick,
        image,
        variant = 'primary',
        ...rest } = props

    return (
        <StyledButton
            onClick={onClick}
            variant={variant}
            image={image}
            {...rest}
        >
            {image && <img src={image} alt={label}/>}
            <label>{label}</label>
        </StyledButton>
    );
}
