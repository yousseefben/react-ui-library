import React from 'react';
import PropTypes from 'prop-types';
import Container from './button.styles';
import styled from "styled-components";
import {Loader} from "../circular-propgress/circularProgress.styles";

const propTypes = {
    type: PropTypes.string,
    loading: PropTypes.bool,
    /**
     * The contents within the button
     */
    children: PropTypes.node.isRequired,
    /**
     * The color of the button
     */
    color: PropTypes.string,
    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The size of the button
     */
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    /**
     * Sets the width of the button to 100%
     */
    liquid: PropTypes.bool,
    /**
     * The type of button to use
     */
    variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'fab']),
    /**
     * The position of the icon (if there is any)
     */
    iconPos: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Inverts the foreground color for text and outlined variants
     */
    darkBg: PropTypes.bool,
    /**
     * What happens when the button is clicked
     */
    onClick: PropTypes.func,
    /**
     * What happens when the button is hovered
     */
    onMouseEnter: PropTypes.func,
    /**
     * What happens when the hover stops in the button
     */
    onMouseLeave: PropTypes.func,
    /**
     * CSS styles
     */
    className: PropTypes.string
};

const defaultProps = {
    type: 'primary'
};

const Progress = styled(Loader)`
  display: inline-flex;
  vertical-align: middle;
  margin-right: 5px;
`;

const Button = (props) => {
    const {
        type,
        disabled,
        loading
    } = props;

    return (

        <Container
            type={type}
            disabled={disabled}
            loading={loading && 'true'}
        >

            {loading && <Progress color={'primary'}/>}
            {props.children}
        </Container>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
