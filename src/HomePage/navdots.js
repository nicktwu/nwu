import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './styling';
import {css} from 'aphrodite';
import {Motion, spring} from "react-motion";

const handleClick = (nextFunction) => {
  return (evt) => {
    evt.preventDefault();
    nextFunction();
  }
};

class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.startHover = this.startHover.bind(this);
    this.endHover = this.endHover.bind(this);
  }

  startHover() {
    this.setState({hover: true})
  }

  endHover() {
    this.setState({hover: false})
  }

  render() {
    return (
      <Motion
        style={{size: this.props.current ? spring(24) : spring(16), y: this.state.hover ? spring(1) : spring(0.5)}}>
        {iStyle => (
          <div className={css(style.dotBox)}>
            <a href="" onClick={handleClick(this.props.handleClick)} className={css(style.dot)} style={
              {
                opacity: this.props.current? 1 : iStyle.y,
                height: iStyle.size,
                width: iStyle.size
              }
            } onMouseEnter={this.startHover} onMouseLeave={this.endHover}> </a>
          </div>
        )}
      </Motion>
    )
  }
}

Dot.propTypes = {
  current: PropTypes.bool,
  handleClick: PropTypes.func
};



class NavDots extends Component {
  render() {
    return (
      <div className={css(style.dotContainer)}>
        { this.props.backgrounds.map((background, idx) => {
          return (
            <Dot key={idx} current={this.props.current === idx} handleClick={()=>{
              this.props.handleClick(idx);
            }}/>
          )
        })}
      </div>
    )
  }
}

NavDots.propTypes = {
  backgrounds: PropTypes.array,
  current: PropTypes.number,
  handleClick: PropTypes.func
};

export default NavDots;
