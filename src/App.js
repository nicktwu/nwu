import React, { Component } from 'react';
import Loader from './Loader';
import WebFont from 'webfontloader';
import {Switch, Route} from 'react-router-dom';
import {fontList} from './fonts';
import images from './images';
import {withImagesPromise} from 'react-images-preload';
import {mainPaths} from "./Router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import anime from "animejs";
import "./styles.css"

const TRANSITION_DURATION = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false
    };
    this.finishLoading = this.finishLoading.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.routeEnter = this.routeEnter.bind(this);
    this.routeExit = this.routeExit.bind(this);
  }

  finishLoading() {
    this.setState({loading: false})
  }

  hideLoader() {
    this.setState({show: true});
  }

  componentWillMount() {
    WebFont.load({
      google: fontList,
      active: this.finishLoading,
      inactive: this.finishLoading
    });
  }

  routeEnter(node) {
    console.log("Entering", node);
    anime({
      targets: node,
      opacity: 1,
      duration: TRANSITION_DURATION
    })
  }

  routeExit(node) {
    console.log("Exiting", node);
    anime({
      targets: node,
      opacity: 0,
      duration: TRANSITION_DURATION
    })
  }

  render() {
    return (
      <Route render={({location}) => {
        return (
          <div>
            <Loader show={this.state.loading || !this.props.isImagesLoaded} welcome={true} finish={this.hideLoader}/>
            <TransitionGroup>
              <CSSTransition key={location.pathname} timeout={TRANSITION_DURATION} classNames="fade">
                <Switch location={location}>
                  {mainPaths.map((route, idx) => {
                    let Comp = route.component;
                    return (
                      <Route key={idx} exact={route.exact} path={route.path}>
                        <Comp images={this.props.images} show={this.state.show}/>
                      </Route>
                    )
                  })}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )
      }}/>
    );
  }
}

export default withImagesPromise(images, App);
