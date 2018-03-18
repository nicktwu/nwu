import React, {Component} from 'react';
import {css} from "aphrodite";
import style from "./styling";
import {Motion, spring} from "react-motion";
import PropTypes from 'prop-types';

const getRGBA = (r,g,b,a) => {
  return "rgba(" + Math.round(r).toString() + "," +
    Math.round(g).toString() + "," +
    Math.round(b).toString() + "," +
    a.toString() + ")"
};

class NavMenuLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover : !this.state.hover})
  }

  render() {
    return (
      <Motion style={{x: this.state.hover ? spring(255) : spring(0)}}>
        { iStyle =>(
          <div className={css(style.navMenuLink)} onClick={this.props.handleClick} style={{
            backgroundColor: getRGBA(iStyle.x, iStyle.x, iStyle.x, 1),
            color: getRGBA(255-iStyle.x, 255-iStyle.x, 255-iStyle.x, 1)
          }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {this.props.link}
          </div>
        )}
      </Motion>
    )
  }
}

NavMenuLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};

class NavTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      hoverTrigger: false
    };
    this.startHoverTrigger = this.startHoverTrigger.bind(this);
    this.endHoverTrigger = this.endHoverTrigger.bind(this);
    this.startShow = this.startShow.bind(this);
    this.endShow = this.endShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  startHoverTrigger() {
    this.setState({hoverTrigger: true})
  }

  endHoverTrigger() {
    this.setState({hoverTrigger: false})
  }

  startShow() {
    this.props.startHover();
    this.setState({showMenu: true})
  };

  endShow() {
    this.setState({showMenu: false})
  }

  handleClick(idx) {
    return () => {
      this.setState({showMenu: false});
      this.props.scrollTo(idx)();
    }
  }

  render() {
    return (
      <Motion
        style={{x: this.state.hoverTrigger ? spring(255) : spring(0), y: this.state.showMenu ? spring(0) : spring(1)}}>
        {iStyle => (
          <span className={css(style.mobileTriggerContainer)}>
            <div className={css(style.mobileNavTrigger)} onMouseEnter={this.startHoverTrigger}
                 onMouseLeave={this.endHoverTrigger} onClick={this.state.showMenu ? this.endShow : this.startShow}
                 style={{backgroundColor: getRGBA(iStyle.x, iStyle.x, iStyle.x, 1)}}>
              <div className={css(style.mobileNavIcon)}
                   style={{
                     borderTopColor: getRGBA(255 - iStyle.x, 255 - iStyle.x, 255 - iStyle.x, iStyle.y),
                     borderBottomColor: getRGBA(255 - iStyle.x, 255 - iStyle.x, 255 - iStyle.x, iStyle.y)
                   }}>
                <span className={css(style.mobileNavIconBar, this.state.showMenu ? style.mobileNavIconX : null)}
                      style={{
                        borderColor: getRGBA(255 - iStyle.x, 255 - iStyle.x, 255 - iStyle.x, 1)
                      }}/>
                <span className={css(style.mobileNavIconBar, this.state.showMenu ? style.mobileNavIconX2 : null)}
                      style={{
                        borderColor: getRGBA(255 - iStyle.x, 255 - iStyle.x, 255 - iStyle.x, 1)
                      }}/>
              </div>
            </div>
            <div className={css(style.navMenuContainer)} style={{left: (iStyle.y * 100).toString() + "vw"}}>
              {this.props.links.map((link, idx) => {
                return (
                  <NavMenuLink key={idx} link={link} handleClick={this.handleClick(idx)}/>
                )
              })}
            </div>
          </span>
        )}
      </Motion>
    )
  }
}

NavTrigger.propTypes = {
  links: PropTypes.array.isRequired,
  scrollTo: PropTypes.func.isRequired,
  startHover: PropTypes.func.isRequired
};

export default NavTrigger;