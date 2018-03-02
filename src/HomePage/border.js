import React, {Component} from 'react';
import {StaggeredMotion, spring} from 'react-motion';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './styling'


class Border extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    let styleSet = [];
    for (let i = 0; i < 5; i++) {
      styleSet = styleSet.concat([{
        key: i,
        progress: 0
      }])
    }

    return (
      <StaggeredMotion defaultStyles={styleSet}
                       styles={prevStyles => prevStyles.map((_, idx) => (
                         idx === 0 ? { progress: spring(100, {stiffness: 60, damping: 25})} : { progress: spring(prevStyles[idx-1].progress)}
                       ))}>
        {interpolatedStyles => (
          <div className={css(style.box)}>
            {interpolatedStyles.map((iStyle, idx)=> {
              return (
                <span key={idx} style={
                  this.props.mobile ? {
                    width: iStyle.progress.toString() + "%",
                    marginBottom: -2 * (idx + 1)
                  } : {
                    height: iStyle.progress.toString() + "%",
                    marginRight: -2 * (idx + 1)
                  }
                } className={css(style.bar, this.props.mobile ? style.mobileBar : style.defaultBar)}/>
              );
            })}
          </div>
        )}
      </StaggeredMotion>
    )
  }
}

Border.propTypes = {
  mobile: PropTypes.bool
};

export default Border;