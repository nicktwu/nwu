import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './styling';
import {otherPaths} from '../Router';
import LinkBox from './linkbox';


class Sidebar extends Component {
  render() {
    let mobile = this.props.mobile;
    return (
      <div className={css(style.container, mobile ? style.mobileContainer : style.defaultContainer)}>
        {otherPaths.map((otherPath, idx) => (
          <LinkBox key={idx} show={this.props.show} exist={!this.props.mobile} delay={idx * 70}
                   number={otherPaths.length} route={otherPaths[idx]}/>
        ))}
        {otherPaths.map((otherPath, idx) => (
          <LinkBox key={idx+otherPaths.length} show={this.props.show} exist={this.props.mobile} delay={idx * 70}
                   number={otherPaths.length} route={otherPaths[idx]}/>
        ))}
      </div>
    )
  }
}

Sidebar.propTypes = {
  mobile: PropTypes.bool,
  show: PropTypes.bool
};

export default Sidebar;