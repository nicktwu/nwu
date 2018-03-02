import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-responsive';
import {css} from 'aphrodite';
import style from './styling';
import {spring, StaggeredMotion} from 'react-motion';
import {otherPaths} from '../Router';
import LinkBox from './linkbox';



class Container extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    console.log(otherPaths);
    return (
      <Media maxWidth={767}>
        {mobile => (
          <StaggeredMotion defaultStyles={
            otherPaths.map(() => ({progress: 0}))
          } styles={prevStyles => prevStyles.map((_, idx) => (
            idx === 0 ? {
              progress: spring(100, {
                stiffness: 170,
                damping: 10
              })
            } : {progress: spring(prevStyles[idx - 1].progress)}
          ))}>
            {interpolatedStyles => (
              <div className={css(style.container, mobile ? style.mobileContainer : style.defaultContainer)}>
                  {interpolatedStyles.map((iStyle, idx) => (
                    <LinkBox key={idx} mobile={mobile} progress={iStyle.progress} number={otherPaths.length}
                             route={otherPaths[idx]}/>
                  ))}
              </div>
            )}
          </StaggeredMotion>
        )}
      </Media>
    )
  }
}

Container.propTypes = {
  show: PropTypes.bool
};

export default Container;