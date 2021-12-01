import React from "react"
import { StyledButtonRow, StyledButton } from "./style"

export interface IButtonRowProps {
    selected: number,
    data: {
        id: number,
        name: string,
        image_url: string
    }[],
    onButtonClick: (e: MouseEvent, itemId: number) => void,
    loading: boolean,
    [key: string]: any
}

export default function ButtonRow(props: IButtonRowProps) {
    const { selected, data, onButtonClick, loading, ...rest } = props;

    return (
        <StyledButtonRow {...rest}>
            {loading && <p>loading...</p>}
            {data.map(item => <StyledButton selected={selected === item.id} data-id={item.id} key={item.id} onClick={(e: MouseEvent) => onButtonClick(e, item.id)} label={item.name} variant="thumbnail" image={item.image_url}/>)}
        </StyledButtonRow>
    );
}
