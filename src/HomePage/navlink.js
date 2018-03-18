import React, {Component} from 'react';
import PropTypes from "prop-types";
import {css} from "aphrodite";
import style from "./styling";
import {Motion, spring, presets} from "react-motion";

const preventDefault = (nextFunction) => {
  return (evt) => {
    evt.preventDefault();
    nextFunction();
  }
};

class NavLink extends Component {
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
      <Motion style={{x: this.state.hover ? spring(60, presets.wobbly) : spring(0)}}>
        {iStyle => (
          <li className={css(style.navLink)}
              onMouseLeave={this.endHover} onMouseEnter={this.startHover}>
            <a href="" onClick={preventDefault(this.props.handleClick)} className={css(style.navLinkWrapper)}>
              <span className={css(style.navLinkText)}>
                {this.props.name}
              </span>
              <div className={css(style.navLinkHoverContainer)}>
                <div className={css(style.navLinkHover)} style={{
                  width: iStyle.x.toString() + "%",
                  paddingTop: iStyle.x.toString() + "%",
                  border: this.state.hover ? "2px solid white" : "none"
                }}/>
              </div>
            </a>
          </li>
        )}
      </Motion>
    )
  }
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default NavLink;