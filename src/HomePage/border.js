import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import style from './styling';
import anime from 'animejs';
import {Transition} from 'react-transition-group';

class Border extends Component {
  render() {
    return (
      <div className={css(style.box)}>
        <Bar show={this.props.show && this.props.mobile}
             mobile={this.props.mobile} complete={this.props.complete}/>
        <Bar show={this.props.show && !this.props.mobile}
             mobile={this.props.mobile} complete={this.props.complete}/>
      </div>
    )
  }
}

class Bar extends Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter(node) {
    let children = node.childNodes;
    for (let k = 0; k < children.length; k++) {
      children[k].style.border = "1px solid black";
    }
    let animeSettings = {
      targets: children,
      easing: "easeOutCirc",
      delay: function () { return Math.random() * 50 }
    };
    if (this.props.mobile) {
      animeSettings["width"] = ["0%", "100%"]
    } else {
      animeSettings["height"] = ["0%", "100%"]
    }
    this.anime = anime(animeSettings);
  }

  onExit(node) {
    let children = node.childNodes;
    for (let k = 0; k < children.length; k++) {
      children[k].style.borderColor = "transparent";
    }
  }

  render() {
    return (
      <Transition in={this.props.show} appear addEndListener={(node, done) => {
        this.anime ? this.anime.finished.then(done) : done();
      }} onEnter={this.onEnter} onEntered={this.props.complete} onExit={this.onExit}>
        <div>
          { (new Array(5)).fill(0).map((_, i) => (
            <span key={i} style={this.props.mobile ? {
              marginBottom: -2 * (i + 1)
            } : {
              marginRight: -2 * (i + 1)
            }} className={css(style.bar, this.props.mobile ? style.mobileBar : style.defaultBar)}/>
          ))}
        </div>
      </Transition>
    )
  }
}

Bar.propTypes = {
  show: PropTypes.bool,
  mobile: PropTypes.bool,
  complete: PropTypes.func
};

Border.propTypes = {
  show: PropTypes.bool,
  mobile: PropTypes.bool,
  complete: PropTypes.func
};

export default Border;