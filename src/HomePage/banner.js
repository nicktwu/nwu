import React, {Component} from 'react';
import style from './styling';
import {css} from 'aphrodite';
import PropTypes from 'prop-types';
import Border from './border';
import Name from "./name";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false
    };
  }

  render() {
    let mobile = this.props.mobile;
    return (
      <div className={css(style.banner, mobile ? style.mobileBanner : style.defaultBanner)}>
        <div className={css(style.box)}>
          <Name show={this.state.reveal && mobile && (this.state.mobile === mobile)} complete={this.props.triggerNext}/>
          <Name show={this.state.reveal && !mobile && (this.state.mobile === mobile)}
                complete={this.props.triggerNext}/>
        </div>
        <Border show={this.props.show} mobile={mobile} complete={() => {
          this.setState({reveal: true, mobile: mobile})
        }}/>
      </div>
    )
  }
}

Banner.propTypes = {
  mobile: PropTypes.bool,
  show: PropTypes.bool,
  triggerNext: PropTypes.func
};

export default Banner