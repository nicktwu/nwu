import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from "./carousel";
import style from './styling';
import {css} from 'aphrodite';

class HomePage extends Component {
  render() {
    return (
      <span>
        <div className={css(style.block)}>
          <Carousel images={this.props.images} show={this.props.show}/>
        </div>
      </span>
    )
  }
}

HomePage.propTypes = {
  images: PropTypes.object,
  show: PropTypes.bool
};

export default HomePage;