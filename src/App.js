import React, { Component } from 'react';
import Loader from './Loader';
import WebFont from 'webfontloader';
import {Switch, Route} from 'react-router-dom';
import {fontList} from './fonts';
import {allImages} from './images';
import {withImagesPromise} from 'react-images-preload';
import {mainPaths} from "./Router";
import "./styles.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false
    };
    this.finishLoading = this.finishLoading.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
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

  render() {
    return (
      <Route render={({location}) => {
        return (
          <div>
            <Loader show={this.state.loading || !this.props.isImagesLoaded} welcome={true} finish={this.hideLoader}/>
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
          </div>
        )
      }}/>
    );
  }
}

export default withImagesPromise(allImages, App);
