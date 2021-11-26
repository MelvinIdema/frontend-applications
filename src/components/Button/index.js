import { StyledButton } from "./index.styled.js";

export default function Button(props) {
    const { children } = props;
    return <StyledButton>{ children }</StyledButton>;
}
