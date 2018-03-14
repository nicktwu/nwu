import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './styling';
import {css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {Transition} from "react-transition-group";
import anime from 'animejs';

class LinkBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendering: true,
      hover: false
    };
    this.hoverFactor = 1.4;
    this.onEnter = this.onEnter.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onEndHover = this.onEndHover.bind(this);
  }

  onEnter(node) {
    node.style.border = "2px solid black";
    this.anime = anime({
      targets: node,
      delay: this.props.delay,
      width: 150,
      height: 60,
      lineHeight: 60,
      color: "#000"
    })
  }

  onExit(node) {
    node.style.borderColor = "transparent";
    node.style.color = "#ffffff"
  }

  onHover(node) {
    if (this.hoverAnime) {
      this.hoverAnime.pause();
    }
    this.hoverAnime = anime.timeline();
    this.hoverAnime.add({
      targets: node,
      width: 150 * this.hoverFactor,
      height: 60 * this.hoverFactor,
      lineHeight: 60 * this.hoverFactor,
      elasticity: 700
    }).add({
      offset: 0,
      duration: 150,
      targets: node,
      color: "#fff",
      backgroundColor: "#912828",
      borderColor: "#fff",
      fontSize: this.hoverFactor*16,
      easing: "easeInOutQuad"
    })
  }

  onEndHover(node) {
    if (this.hoverAnime) {
      this.hoverAnime.pause();
    }
    this.hoverAnime = anime.timeline();
    this.hoverAnime.add({
      targets: node,
      duration: 150,
      width: 150,
      height: 60,
      lineHeight: 60,
      fontSize: 16,
      color: "#000",
      backgroundColor: "#fff",
      easing: "easeInOutQuad"
    }).add({
      offset: 0,
      duration: 150,
      targets: node,
      fontSize: 16,
      color: "#000",
      backgroundColor: "#fff",
      borderColor: "#000",
      easing: "easeInOutQuad"
    })
  }

  render() {
    if (!this.props.exist) {
      return null
    }
    return (
      <div className={css(style.linkBox)} style={{
        width: 150 * this.hoverFactor, height: 60 * this.hoverFactor
      }} onMouseEnter={() => {
        this.setState({hover: true})
      }}
           onMouseLeave={() => {
             this.setState({hover: false})
           }}>
        <Transition in={this.state.hover} onEnter={this.onHover} addEndListener={(node, done) => {
          if (this.hoverAnime) this.hoverAnime.finished.then(done);
        }} onExit={this.onEndHover}>
          <Transition in={this.props.show} appear onEnter={this.onEnter} addEndListener={(node, done) => {
            this.anime ? this.anime.finished.then(done) : done();
          }} onExit={this.onExit} onEntered={()=>{this.setState({rendering: false})}}>
            <Link to={this.props.route.path} style={{
              width: 0, height: 0, color: "#ffffff", lineHeight: 0, fontSize: 16,
              display: this.props.show ? "block" : "none"
            }} className={css(style.link)}>{this.props.route.name}</Link>

          </Transition>
        </Transition>
      </div>
    )
  }
}

LinkBox.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string
  }),
  exist: PropTypes.bool,
  number: PropTypes.number,
  delay: PropTypes.number,
  show: PropTypes.bool
};

export default LinkBox;