import React, { useState, useRef } from "react";

const SliderCard = (props) => {
    const [state, setState] = useState({
        mouseDown: false,
        startX: null,
        scrollLeft: null,
        isVisible: false,
        showMore: false,
        
    });

    
  

    const slider = useRef(null);

    const startDragging = (e) => {
        setState({
            ...state,
            
            mouseDown: true,
            startX: e.pageX - slider.current.offsetLeft,
            scrollLeft: slider.current.scrollLeft,
           
        });
        
    };

    const move = (e) => {
        e.preventDefault();
        if (!state.mouseDown) {
            return;
        }
        const x = e.pageX - slider.current.offsetLeft;
        const scroll = x - state.startX;
        slider.current.scrollLeft = state.scrollLeft - scroll;
    };

    const stopDragging = () => {
        setState({ ...state, mouseDown: false });
    };

    const toggleShowMore = () => {
        setState((prevState) => ({ ...prevState, showMore: !prevState.showMore }));
    };

    const { img, first, second, third, name, position, company } = props;
    const { showMore } = state;

    const displayThird = showMore ? third : undefined;

    return (
        <div className="review-divs" ref={slider} onMouseDown={startDragging} onMouseMove={move} onMouseUp={stopDragging}>
            <div className="review-div">
                <img className="review-logo" src={img} alt="" />

                <p className="review-text">{first}</p>

                <p className="review-text">{second}</p>

                {displayThird && <p className="review-text">{displayThird}</p>}

                <div className="review-from">
                    <p className="review-name">{name}</p>
                    <p className="review-position">{position}</p>
                    <p className="review-company">{company}</p>
                </div>

                {!showMore && third && (
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            zIndex: 2,
                            cursor: "pointer",
                        }}
                        onClick={toggleShowMore}
                    >
                        + LOAD MORE
                    </div>
                )}

                {showMore && third && (
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "12px",
                            zIndex: 2,
                            cursor: "pointer",
                        }}
                        onClick={toggleShowMore}
                    >
                        - SHOW LESS
                    </div>
                )}
            </div>
        </div>
    );
};

export default SliderCard;
