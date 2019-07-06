import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Slide(props) {

    return (
        <Fade left={props.left} right={props.right} >child</Fade>
    );
}

export default Slide
