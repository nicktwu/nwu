/**
 * Created by nwu on 2/28/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-responsive';
import Content from "./container";

class Wrapper extends Component {
  render() {
    return (
      <Media maxWidth={767}>
        {(mobile) => (
          <Content mobile={mobile} show={this.props.show} />
        )}
      </Media>
    )
  }
}

Wrapper.propTypes = {
  show: PropTypes.bool
};

export default Wrapper;