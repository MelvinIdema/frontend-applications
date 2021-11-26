import PropTypes from "prop-types"
import { StyledContainer, StyledImg, Title } from "./index.styled.js";

export default function BeerThumbnail(props) {
    const { title, image, selected } = props;
    return (
        <StyledContainer selected={selected} clickable>
            <article>
                <StyledImg src={image} alt={title}/>
                <Title>{title}</Title>
            </article>
        </StyledContainer>
    )
}

BeerThumbnail.propTypes = {
    /** The title of the beer */
    title: PropTypes.string,
    /** The image of the beer */
    image: PropTypes.string,
    /** Is the Beer selected? */
    selected: PropTypes.bool
}

BeerThumbnail.defaultProps = {
    selected: false
}
