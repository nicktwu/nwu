import React, {Component} from 'react';
import PropTypes from "prop-types";
import {css} from "aphrodite";
import style from "./styling";
import {Motion, spring, presets} from "react-motion";
import NavLink from './navlink';
import NavTrigger from "./navtrigger";



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
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
      <Motion style={{opacity: this.state.hover ? spring(0.8) : spring(0.2)}}>
        {iStyle => (
          <div className={css(style.navBar, this.props.mobile ? style.mobileNavBar : style.defaultNavBar)}
               style={iStyle} onMouseEnter={this.startHover} onMouseLeave={this.endHover}>
            <div className={css(style.navBarHeader)}>
              <h1 className={css(style.navBarHeaderText, this.props.mobile ? style.navBarHeaderTextMobile : style.navBarHeaderTextDefault)}>nicholas wu</h1>
            </div>
            { this.props.mobile ? <NavTrigger links={this.props.links} scrollTo={this.props.scrollTo}
                                             startHover={this.startHover} endHover={this.endHover}/>
              :
              <ul className={css(style.navLinkContainer)}>
                {this.props.links.map((link, idx) => {
                  return (
                    <NavLink key={idx} name={link} handleClick={this.props.scrollTo(idx)}/>
                  )
                })}
                <Motion style={{x: spring(this.props.current * 90, presets.wobbly)}}>
                  {iStyle => (
                    <li className={css(style.navSliderContainer)}>
                      <div className={css(style.navLink)}>
                        <div className={css(style.navSlider)}
                             style={{left: iStyle.x - 45 * (this.props.links.length - 1)}}/>
                      </div>
                    </li>
                  )}
                </Motion>
              </ul>}
          </div>
        )}
      </Motion>
    )
  }
}

NavBar.propTypes = {
  mobile: PropTypes.bool.isRequired,
  current: PropTypes.number.isRequired,
  links: PropTypes.array.isRequired,
  scrollTo: PropTypes.func.isRequired
};

export default NavBar