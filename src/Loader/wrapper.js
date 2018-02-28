/**
 * Created by nwu on 2/25/18.
 */
import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './styling';
import Loader from './loader';
import {TransitionMotion, spring} from 'react-motion';
import PropTypes from 'prop-types';

class LoadingWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      welcome: false
    };
    this.loaderHidden = this.loaderHidden.bind(this);
  }

  loaderHidden() {
    if (this.props.welcome) {
      this.setState({welcome: true});
      setTimeout(() => {
        this.setState({welcome: false});
        setTimeout(() => {
          this.setState({show: false})
        }, 1000)
      }, 1500);
    } else {
      this.setState({show: false})
    }
  }


  render() {
    let styleSet = [];
    if (this.state.show) {
      styleSet = styleSet.concat([{key: "loader", style: {opacity: 1}}]);
      if (this.state.welcome && this.props.welcome) {
        styleSet = styleSet.concat([{key: "welcome", style: {opacity: spring(1)}}])
      }
    }

    return (
      <TransitionMotion styles={styleSet} willLeave={() => ({opacity: spring(0)})}
                        willEnter={()=>({opacity: 0})}>
        { styles => (
          <div>
            { styles.map(config => (
              <div key={config.key} className={css(style.wrapper)} style={config.style}>
                {config.key === "loader" ?
                  <Loader show={this.props.show} finished={this.loaderHidden}/> :
                  <h1 className={css(style.outerLoader, style.header)}>welcome</h1> }
              </div>

            ))}
          </div>
        )}
      </TransitionMotion>
    )
  }
}

LoadingWrapper.propTypes = {
  show: PropTypes.bool,
  welcome: PropTypes.bool
};

export default LoadingWrapper