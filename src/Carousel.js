import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import Slide from './Slide';

const Carousel = (props) => {
    const [currSlide, setCurrSlide] = useState(0);
    const [maxSlide, setmaxSlide] = useState(0);
    const [lockNext, setlockNext] = useState(true);
    const [lockPrev, setlockPrev] = useState(true);
    const [clicked, setClicked] = useState();
    const [arrowDir, setArrowDir] = useState({ "prev": "left", "next": "right" });
    const { children, dir } = props;
    
    useEffect(() => {
        if (children && children.length !== 0) {
            setmaxSlide(children.length - 1);
            setlockNext(false);
        }

        if (dir === "rtl") {
            setArrowDir({ "prev": "right", "next": "left" });
        }

    }, [children, dir]);

    useEffect(() => {
        (maxSlide <= currSlide) ? setlockNext(true) : setlockNext(false);
        (currSlide > 0) ? setlockPrev(false) : setlockPrev(true);
    }, [currSlide, maxSlide]);

    const moveSlide = (side) => {
        switch (side) {
            case "prev":
                if (lockPrev) return;
                setClicked(arrowDir.prev);
                setCurrSlide(currSlide - 1);
                break;
            case "next":
                if (lockNext) return;
                setClicked(arrowDir.next);
                setCurrSlide(currSlide + 1);
                break;
            default:
                return;
        }
    }

    return (
        <div>
            <div>
                <Arrow side="prev" dir={arrowDir.prev} lock={lockPrev} click={(e) => moveSlide("prev")} />
                <Arrow side="next" dir={arrowDir.next} lock={lockNext} click={(e) => moveSlide("next")} />
            </div>
            <CarouselContainer>
                {children.map((child, index) => (
                    (currSlide === index) ? <Slide left={clicked==="left"} right={clicked==="right"} key={index}>{child}</Slide> : null
                ))}
            </CarouselContainer>
        </div>
    );
}

export default Carousel;

const CarouselContainer = styled.div`
text-align: center;
`;

Carousel.propTypes = {
    dir: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Carousel.defaultProps = {
    dir: "ltr",
};