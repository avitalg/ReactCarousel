import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import Fade from 'react-reveal/Fade';

function Carousel(props) {
    const [currSlide, setCurrSlide] = useState(0)
    const [maxSlide, setmaxSlide] = useState(0)
    const [lockNext, setlockNext] = useState(true)
    const [lockPrev, setlockPrev] = useState(true)
    const [clicked, setClickeed] = useState();
    const [arrowDir, setArrowDir] = useState({ "prev": "left", "next": "right" })
    useEffect(() => {
        if (props.children && props.children.length != 0) {
            setmaxSlide(props.children.length - 1);
            setlockNext(false);
        }

        if (props.dir == "rtl") {
            setArrowDir({ "prev": "right", "next": "left" });
        }

    }, []);

    useEffect(() => {
        (maxSlide <= currSlide) ? setlockNext(true) : setlockNext(false);
        (currSlide > 0) ? setlockPrev(false) : setlockPrev(true);
    }, [currSlide, maxSlide]);

    const moveSlide = (side) => {
        switch (side) {
            case "prev":
                if (lockPrev) return;
                setClickeed(arrowDir.prev);
                setCurrSlide(currSlide - 1);
                break;
            case "next":
                if (lockNext) return;
                setClickeed(arrowDir.next);
                setCurrSlide(currSlide + 1);
                break;
        }
    }

    return (
        <div>
            <div>
                <Arrow side="prev" dir={arrowDir.prev} lock={lockPrev} click={(e) => moveSlide("prev")} />
                <Arrow side="next" dir={arrowDir.next} lock={lockNext} click={(e) => moveSlide("next")} />
            </div>
            <CarouselContainer>
                {props.children.map((child, index) => (
                    (currSlide == index) ? <Fade left={clicked=="left"} right={clicked=="right"} >child</Fade> : null
                ))}
            </CarouselContainer>
        </div>
    );
}

export default Carousel

const CarouselContainer = styled.div`
text-align: center;
`