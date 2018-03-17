import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from "./carousel";
import style from './styling';
import {css} from 'aphrodite';

const componentList = [ Carousel ];


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 0
    };
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus(idx) {
    return () => {
      this.setState({focus: idx})
    }
  }

  render() {
    return (
      <span>
        { componentList.map((Comp, idx) => {
          return (
            <div key={idx} id={idx.toString()} className={css(style.block)}>
              <Comp images={this.props.images} show={this.props.show}/>
            </div>
          )
        })}
      </span>
    )
  }
}

HomePage.propTypes = {
  images: PropTypes.object,
  show: PropTypes.bool
};

export default HomePage;