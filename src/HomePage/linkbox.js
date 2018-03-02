import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './styling';
import {css} from 'aphrodite';
import {Link} from 'react-router-dom';

class LinkBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <div className={css(style.linkBox)}>
          <Link to={this.props.route.path} style={{
            width: this.props.progress * 1.5,
            height: this.props.progress * 0.6,
          }} className={css(style.link)}>{this.props.progress > 50 ? this.props.route.name : ""}</Link>
      </div>
    )
  }
}

LinkBox.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string
  }),
  number: PropTypes.number,
  progress: PropTypes.number,
  mobile: PropTypes.bool
};

export default LinkBox;