import PropTypes from "prop-types"
import { StyledContainer } from "./index.styled.js";

export default function Container(props) {
    const { children, fluid, clickable, selected, ...rest } = props;
    return <StyledContainer
        fluid={fluid}
        clickable={clickable}
        selected={selected}
        {...rest}>{children}</StyledContainer>;
}

Container.propTypes = {
    /** Should the container be full-width? */
    fluid: PropTypes.bool,
    /** Is the container clickable? */
    clickable: PropTypes.bool,
    /** Is the container currently selected? */
    selected: PropTypes.bool
}

Container.defaultProps = {
    fluid: false,
    clickable: false,
    selected: false
}
