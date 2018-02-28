/**
 * Created by nwu on 2/25/18.
 */
import React, {Component} from 'react';
import style from './styling';
import {css} from 'aphrodite';
import {TransitionMotion, spring} from 'react-motion';
import PropTypes from 'prop-types';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: [true, true, true, true, true]
    };
    this.hide = this.hide.bind(this);
    this.didLeave = this.didLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      this.hide(5)
    }
  }

  hide(n) {
    let shows = this.state.show.slice();
    shows[n - 1] = false;
    this.setState({show: shows})
  }

  didLeave(n) {
    if (parseInt(n.key, 10) > 1) {
      this.hide(parseInt(n.key, 10) - 1);
    } else {
      this.props.finished()
    }
  }

  render() {
    return (
      <TransitionMotion styles={
        this.state.show[0] ? [{key: "1", style: {opacity: 1}}] : []
      } willLeave={() => ({opacity: spring(0)})} didLeave={this.didLeave}>
        { iStyle => <div className={css(style.box)}> { iStyle.map(config => (
          <div key={config.key} style={config.style}
               className={css(style.baseLoader, style.outerLoader, style.loader1)}>
            <TransitionMotion styles={
              this.state.show[1] ? [{key: "2", style: {opacity: 1}}] : []
            } willLeave={() => ({opacity: spring(0)})} didLeave={this.didLeave}>
              { iStyle => <div className={css(style.box)}> { iStyle.map(config => (
                <div key={config.key} style={config.style}
                     className={css(style.baseLoader, style.innerLoader, style.loader2)}>
                  <TransitionMotion styles={
                    this.state.show[2] ? [{key: "3", style: {opacity: 1}}] : []
                  } willLeave={() => ({opacity: spring(0)})} didLeave={this.didLeave}>
                    { iStyle => <div className={css(style.box)}> { iStyle.map(config => (
                      <div key={config.key} style={config.style}
                           className={css(style.baseLoader, style.innerLoader, style.loader3)}>
                        <TransitionMotion styles={
                          this.state.show[3] ? [{key: "4", style: {opacity: 1}}] : []
                        } willLeave={() => ({opacity: spring(0)})} didLeave={this.didLeave}>
                          { iStyle => <div className={css(style.box)}> { iStyle.map(config => (
                            <div key={config.key} style={config.style}
                                 className={css(style.baseLoader, style.innerLoader, style.loader4)}>
                              <TransitionMotion styles={
                                this.state.show[4] ? [{key: "5", style: {opacity: 1}}] : []
                              } willLeave={() => ({opacity: spring(0)})} didLeave={this.didLeave}>
                                { iStyle => <div className={css(style.box)}> { iStyle.map(config => (
                                  <div key={config.key} style={config.style}
                                       className={css(style.baseLoader, style.innerLoader, style.loader5)}/>
                                ))} </div> }
                              </TransitionMotion>
                            </div> ))} </div> }
                        </TransitionMotion>
                      </div> ))} </div> }
                  </TransitionMotion>
                </div> ))} </div> }
            </TransitionMotion>
          </div> ))} </div> }
      </TransitionMotion>
    )
  }
}

Loader.propTypes = {
  show: PropTypes.bool,
  finished: PropTypes.func
};


export default Loader;