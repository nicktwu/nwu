import React, {Component} from 'react';
import Media from 'react-responsive';
import style from './styling';
import {css} from 'aphrodite';
import PropTypes from 'prop-types';
import {TransitionMotion, spring} from 'react-motion';
import Border from './border';

const defaultStyle = {
  key: "default",
  style: {
    opacity: spring(1)
  }
};

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      setTimeout(()=>{
        this.setState({reveal: true});
        setTimeout(this.props.triggerNext, 1000);
      }, 1000)
    }
  }

  render() {
    return (
      <Media maxWidth={767}>
        {(mobile) => (
          <div className={css(style.banner, mobile ? style.mobileBanner : style.defaultBanner)}>
            <TransitionMotion styles={
              this.state.reveal ? [defaultStyle] : []
            } willEnter={() => ({opacity: 0})}>
              {interpolatedStyles => (
                <div className={css(style.box)}>
                  {
                    interpolatedStyles.map((config) => (
                      <h1 key={config.key} style={config.style}
                          className={css(style.titleText)}>nicholas wu</h1>
                    ))
                  }
                </div>
              )}
            </TransitionMotion>
            <Border show={this.props.show} mobile={mobile}/>
          </div>
        )}
      </Media>
    )
  }
}

Banner.propTypes = {
  show: PropTypes.bool,
  triggerNext: PropTypes.func
};

export default Banner