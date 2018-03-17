import React, {Component} from 'react';
import PropTypes from "prop-types";
import {css} from "aphrodite";
import style from "./styling";
import {Motion, spring} from "react-motion";

const getRGBA = (r,g,b,a) => (
  "rgba("+r.toString()+","+g.toString()+","+b.toString()+","+a.toString()+")"
);

const handleEvent = (nextFunction) => ((evt) => {
  evt.preventDefault();
  nextFunction();
});

const stiffOpen = {
  stiffness: 200,
  damping: 20
};

class CarouselRightArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.startHover = this.startHover.bind(this);
    this.stopHover = this.stopHover.bind(this);
  }

  startHover() {
    this.setState({hover: true})
  }

  stopHover() {
    this.setState({hover: false})
  }

  render() {
    return (
      <Motion style={{x: this.state.hover ? spring(1) : spring(0), y: this.state.hover? spring(1, stiffOpen) : spring(0, stiffOpen)}}>
        { iStyle => (
          <a href="" className={css(style.arrow, style.rightArrow)} style={{ backgroundColor: getRGBA(0,0,0,(iStyle.x*0.6+0.2)) }}
             onMouseEnter={this.startHover} onMouseLeave={this.stopHover} onClick={handleEvent(this.props.handleClick)}>
            <svg height={this.props.size} width={this.props.size+10*iStyle.y} viewBox="0 0 64 64">
              <path id="arrow-right-1" fill="white" d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"/>
            </svg>
          </a>
        )}
      </Motion>
    )
  }
}

class CarouselLeftArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.startHover = this.startHover.bind(this);
    this.stopHover = this.stopHover.bind(this);
  }

  startHover() {
    this.setState({hover: true})
  }

  stopHover() {
    this.setState({hover: false})
  }

  render() {
    return (
      <Motion style={{x: this.state.hover ? spring(1) : spring(0), y: this.state.hover? spring(1, stiffOpen) : spring(0, stiffOpen)}}>
        { iStyle => (
          <a href="" className={css(style.arrow, style.leftArrow)} style={{ backgroundColor: getRGBA(0,0,0,(iStyle.x*0.6+0.2)) }}
               onMouseEnter={this.startHover} onMouseLeave={this.stopHover} onClick={handleEvent(this.props.handleClick)}>
            <svg height={this.props.size} width={this.props.size+10*iStyle.y} viewBox="0 0 64 64">
              <path id="arrow-left-1" fill="white" d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"/>
            </svg>
          </a>
        )}
      </Motion>
    )
  }
}

CarouselRightArrow.propTypes = {
  size: PropTypes.number,
  handleClick: PropTypes.func
};

CarouselLeftArrow.propTypes = {
  size: PropTypes.number,
  handleClick: PropTypes.func
};

export {CarouselRightArrow, CarouselLeftArrow}