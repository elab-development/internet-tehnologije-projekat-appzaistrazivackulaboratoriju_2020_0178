import React, {Component} from "react";

class SliderCard extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         mouseDown: false,
    //         startX: null,
    //         scrollLeft: null,
    //         isVisible: false,
    //         showMore: false,
    //     };
    //     this.mouseDown = false;
    //     this.startX = null;
    //     this.scrollLeft = null;
    //     this.slider = React.createRef();
    //     this.sliderCard = React.createRef();
    // }

    // startDragging = (e) => {
    //     this.state.mouseDown = true;
    //     this.state.startX = e.pageX - this.slider.current.offsetLeft;
    //     this.state.scrollLeft = this.slider.current.scrollLeft;
    //     this.forceUpdate();
    // };
    // move = (e) => {
    //     e.preventDefault();
    //     if (!this.state.mouseDown) {
    //         return;
    //     }
    //     const x = e.pageX - this.slider.current.offsetLeft;
    //     const scroll = x - this.state.startX;
    //     this.slider.current.scrollLeft = this.state.scrollLeft - scroll;
    //     this.forceUpdate();
    // };

    // stopDragging = () => {
    //     this.state.mouseDown = false;
    //     this.forceUpdate();
    // };

    // componentDidMount=()=>{
    //     console.log("hereee")
    // }

    // componentDidMount = () => {
    //
    //     this.slider.current.addEventListener("wheel", this.props.handleScroll);
    // };
    //
    // componentWillUnmount() {
    //
    //     this.slider.current.removeEventListener("wheel", this.props.handleScroll);
    // }


    // toggleShowMore = () => {
    //     this.setState((prevState) => ({showMore: !prevState.showMore}));
    // };

    render() {
       
        const {img, first, second, third, name, position, company, reference} = this.props;
        // const {showMore} = this.state;

        // const displayThird = showMore ? third : undefined;

        return (
            <div className="review-divs" >
                <div className="review-div">
                    <img className="review-logo" src={img} alt=""/>

                    <p className="review-text">{first}</p>

                    <p className="review-text">{second}</p>
{/* 
                    {displayThird && <p className="review-text">{displayThird}</p>} */}

                    <div className="review-from">
                        <p className="review-name">{name}</p>
                        <p className="review-position">{position}</p>
                        <p className="review-company">{company}</p>
                    </div>

                    {/* {!showMore && (third) && (
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "12px",
                                zIndex: 2,
                                cursor: "pointer",
                            }}
                            onClick={this.toggleShowMore}
                        >
                            + LOAD MORE
                        </div>
                    )} */}

                    {/* {showMore && (third) && (
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "12px",
                                zIndex: 2,
                                cursor: "pointer",
                            }}
                            onClick={this.toggleShowMore}
                        >
                            - SHOW LESS
                        </div>
                    )} */}
                </div>
            </div>
        );
    }
}

export default SliderCard;
