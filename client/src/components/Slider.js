import React, { Component } from "react"
import { data } from "../data"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Swipe from "react-easy-swipe"

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            paused: false
        };
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.paused === false) {
                let newSlide = this.state.currentSlide === data.length - 1 ? 0 : this.state.currentSlide + 1;
                this.setState({ currentSlide: newSlide })
            }
        }, 3000)
    }

    nextSlide = () => {
        let newSlide = this.state.currentSlide === data.length - 1 ? 0 : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide })
    }

    prevSlide = () => {
        let newSlide = this.state.currentSlide === 0 ? data.length - 1 : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide })
    }

    setCurrentSlide = (index) => {
        this.setState({ currentSlide: index });
    }

    render() {
        return (
            <div className="mt-8">
                <div className="w-full h-96 flex overflow-hidden relative">
                    <AiOutlineLeft
                        onClick={this.prevSlide}
                        className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                    />

                    <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                        {data.map((slide, index) => {
                            return (
                                <>
                                <img
                                    src={slide.image}
                                    alt="This is a carousel slide"
                                    key={index}
                                    className={
                                        index === this.state.currentSlide
                                            ? "block w-full h-auto object-cover"
                                            : "hidden"
                                    }
                                    onMouseEnter={() => {
                                        this.setState({ paused: true });
                                    }}
                                    onMouseLeave={() => {
                                        this.setState({ paused: false });
                                    }}
                                />
                                </>
                            );
                        })}
                    </Swipe>

                    <div className="absolute w-full flex justify-center bottom-0">
                        {data.map((element, index) => {
                            return (
                                <div
                                    className={
                                        index === this.state.currentSlide
                                            ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                                            : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                                    }
                                    key={index}
                                    onClick={() => {
                                        this.setCurrentSlide(index);
                                    }}
                                ></div>
                            );
                        })}
                    </div>

                    <div className="absolute w-full flex justify-center bottom-14">
                        {data.map((t, i) => {
                            return(
                                <p key={i} className={i === this.state.currentSlide
                                    ? "block text-white text-xl"
                                    : "hidden"}>{t.title}</p>
                            )
                        })}
                    </div>

                    <AiOutlineRight
                        onClick={this.nextSlide}
                        className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                    />
                </div>
            </div>
        )
    }
}
export default Slider