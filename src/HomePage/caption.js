import React, {Component} from 'react';
import {css} from "aphrodite";
import style from './styling';
import PropTypes from 'prop-types';
import {Motion, spring} from "react-motion";

class Caption extends Component {
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
      <div className={css(style.captionContainer)} style={{opacity: this.props.containerOpacity}}>
        <div className={css(style.caption)} style={{opacity: this.props.textOpacity * 0.8}}>
          <p className={css(style.captionText)}>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

Caption.propTypes = {
  text: PropTypes.string,
  textOpacity: PropTypes.number,
  containerOpacity: PropTypes.number
};


export default Caption