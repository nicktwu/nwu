import React, {Component} from 'react';
import {backgrounds} from '../images';
import Media from 'react-responsive';
import {TransitionMotion, spring} from "react-motion";
import style from "./styling";
import {css} from "aphrodite";
import PropTypes from "prop-types";
import {CarouselLeftArrow, CarouselRightArrow} from "./arrows";
import NavigationDots from './navdots';
import Caption from "./caption";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      shiftLeft: true,
      showCaption: false
    };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.showCaption = this.showCaption.bind(this);
    this.hideCaption = this.hideCaption.bind(this);
  }

  nextImage(evt) {
    if (evt) { evt.preventDefault(); }
    this.setState({
      current: (this.state.current + 1) % backgrounds.length,
      shiftLeft: true
    })
  }

  previousImage(evt) {
    if (evt) { evt.preventDefault(); }
    this.setState({
      current: (this.state.current - 1 + backgrounds.length) % backgrounds.length,
      shiftLeft: false
    })
  }

  showCaption() {
    this.setState({showCaption: true})
  }

  hideCaption() {
    this.setState({showCaption: false})
  }

  render() {
    let background = backgrounds.map((background, idx) => ({
      key: background.name,
      data: {caption: background.caption},
      style: {
        x: spring(((idx - this.state.current) * 100)),
        opacity: idx === this.state.current ? spring(1) : spring(0),
        caption: this.state.showCaption ? spring(1) : spring(0)
      }
    }));
    return (
      <Media maxWidth={767}>
        {(mobile) => {
          return (
            <TransitionMotion styles={background}>
              {(iStyles) => (
                <div className={css(style.carouselContainer, mobile ? style.mobileCarousel : style.defaultCarousel)}>
                  {iStyles.map(config => (
                    <div className={css(style.carouselImageContainer)}>
                      <img className={css(style.carouselImage)} key={config.key}
                           src={this.props.images[config.key]} style={{left: config.style.x.toString() + "vw"}}
                           alt={config.key}/>
                      <Caption text={config.data.caption} containerOpacity={config.style.caption}
                               textOpacity={config.style.opacity}/>
                    </div>
                  ))}
                  <div className={css(style.captionTrigger)} onMouseEnter={this.showCaption}
                       onMouseLeave={this.hideCaption}/>
                  <CarouselRightArrow size={40} handleClick={this.nextImage}/>
                  <CarouselLeftArrow size={40} handleClick={this.previousImage}/>
                  <NavigationDots backgrounds={backgrounds} current={this.state.current} handleClick={(i) => {
                    this.setState({current: i})
                  }}/>
                </div>
              )}
            </TransitionMotion>
          )
        }}
      </Media>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.object,
  show: PropTypes.bool
};

export default Carousel;