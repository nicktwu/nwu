import React, {Component} from 'react';
import {css} from "aphrodite";
import style from "./styling";
import PropTypes from 'prop-types';
import {StaggeredMotion, spring, presets} from "react-motion";

class AboutBlock extends Component {
  render() {
    return (
      <StaggeredMotion defaultStyles={[{x:0},{x:0},{x:0}]} styles={prevStyles => prevStyles.map((_, i) => ({
        x: i === 0 ? (this.props.inFocus ? spring(1, presets.wobbly) : spring(0)) : spring(prevStyles[i - 1].x, presets.wobbly)
      }))}>
        {iStyles => (
          <div className={css(style.aboutContainer)}>
            <div className={css(style.aboutImageContainer)} style={{
              opacity: iStyles[0].x,
              top: (1-iStyles[0].x)*50
            }}>
              <img src={this.props.images.selfMurakami} alt={"me"}
                   className={css(style.aboutImage, this.props.mobile ? style.aboutImageMobile : style.aboutImageDefault)}/>
            </div>
            <p style={{
              opacity: iStyles[1].x,
              top: (1-iStyles[1].x)*50
            }} className={css(style.aboutSubtitle, this.props.mobile ? style.aboutSubtitleMobile : style.aboutSubtitleDefault)}>
              Hey, I'm Nick! I'm an undergrad at MIT, double majoring in EECS (electrical engineering and computer
              science) and pure math, and minoring in physics.
            </p>
            <p className={css(style.aboutCaption)} style={{
              opacity: iStyles[2].x,
              top: (1-iStyles[2].x)*50
            }}>Photograph by Jenny W. Shi, Art by Takashi Murakami</p>
          </div>
        )}
      </StaggeredMotion>
    )
  }
}

AboutBlock.propTypes = {
  images: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  mobile: PropTypes.bool,
  inFocus: PropTypes.bool
};

export default AboutBlock