import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Slide = (props) =>(
    <Fade left={props.left} right={props.right} >{props.children}</Fade>
);

export default Slide;

Slide.propTypes = {
    left: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};