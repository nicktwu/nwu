/**
 * Created by nwu on 2/28/18.
 */
import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './styling';
import Banner from './banner';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  render() {
    return (
      <div className={css(style.wrapper)}>
        <Banner show={!this.props.loading}/>
      </div>
    )
  }
}

Wrapper.propTypes = {
  loading: PropTypes.bool
};

export default Wrapper;