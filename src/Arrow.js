import React from 'react';
import styled from 'styled-components';


function Arrow(props) {
    return (
        <ArrowContainer dir={props.dir} locked={props.lock} onClick={(e) => props.click && props.click(e)} >
            <ArrowDesign dir={props.dir} />
        </ArrowContainer>
    );
 }
 
 const ArrowDesign = styled.div`
    border-top: 2px solid #87888B;
    border-right: 2px solid #87888B;
    width: 5px;
    height: 5px;
    transform: rotate${props => props.dir == "right" ? "(45deg);" : "(225deg);"}
 `;
 
 const ArrowContainer = styled.div`
  z-index: 100;
  line-height: 35px;
  text-align: center;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  color: transparent;
  position: absolute;
  top: 30px;
  padding: 10px;
  left: ${props => props.dir == "right" ? "90%;" : "10%;"}
  opacity: ${props => props.locked ? "0.5;" : "1;"}
  pointer-events: ${props => props.locked ? "none;" : "auto;"}
 `;
 
 export default Arrow
