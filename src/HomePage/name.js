import React, {Component} from 'react';
import {Transition} from "react-transition-group";
import style from "./styling";
import {css} from 'aphrodite';
import anime from 'animejs';
import PropTypes from 'prop-types';

class Name extends Component {
  constructor(props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onEntered = this.onEntered.bind(this);
  }

  onEnter(node) {
    node.style.display = "block";
    node.style.opacity = 0;
    this.anime = anime({
      targets: node,
      opacity: [0,1]
    });
  }

  onEntered() {
    this.props.complete()
  }

  onExit(node) {
    node.style.display = "none";
    anime({
      targets: node,
      opacity: 0
    })
  }

  render() {
    return (
      <Transition in={this.props.show} onEnter={this.onEnter} addEndListener={(node, done) => {
        this.anime ? this.anime.finished.then(done) : done()
      }} onExit={this.onExit} onEntered={this.onEntered}>
        <h1 style={{opacity: 0, display: "none"}} className={css(style.titleText)}>nicholas wu</h1>
      </Transition>
    )
  }
}

Name.propTypes = {
  show: PropTypes.bool,
  complete: PropTypes.func
};


export default Name;