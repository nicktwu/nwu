import React, {Component} from 'react';
import {backgrounds, mobileBackgrounds} from '../images';
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
    if (evt) {
      evt.preventDefault();
    }
    this.setState({
      current: (this.state.current + 1) % this.props.backgrounds.length,
      shiftLeft: true
    })
  }

  previousImage(evt) {
    if (evt) {
      evt.preventDefault();
    }
    this.setState({
      current: (this.state.current - 1 + this.props.backgrounds.length) % this.props.backgrounds.length,
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
    let background = this.props.backgrounds.map((background, idx) => ({
      key: background.name,
      data: {caption: background.caption},
      style: {
        x: spring(((idx - this.state.current) * 100)),
        opacity: idx === this.state.current ? spring(1) : spring(0),
        caption: this.state.showCaption ? spring(1) : spring(0)
      }
    }));
    return (
      <TransitionMotion styles={background}>
        {(iStyles) => (
          <div className={css(style.carouselContainer)}>
            {iStyles.map(config => (
              <div key={config.key} className={css(style.carouselImageContainer)}>
                <img className={css(style.carouselImage)}
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
            <NavigationDots backgrounds={this.props.backgrounds} current={this.state.current} handleClick={(i) => {
              this.setState({current: i})
            }}/>
          </div>
        )}
      </TransitionMotion>
    )
  }
}

Carousel.propTypes = {
  backgrounds: PropTypes.array,
  images: PropTypes.object,
  show: PropTypes.bool
};

class CarouselWrapper extends Component {
  render() {
    return <Carousel images={this.props.images} backgrounds={this.props.mobile ? mobileBackgrounds : backgrounds}
                     show={this.props.show} />
  }
}

CarouselWrapper.propTypes = {
  images: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired
};


export default CarouselWrapper;