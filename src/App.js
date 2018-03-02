import React, { Component } from 'react';
import Loader from './Loader';
import WebFont from 'webfontloader';
import {Switch, Route} from 'react-router-dom';
import {fontList} from './fonts';
import images from './images';
import {withImagesPromise} from 'react-images-preload';
import {mainPaths} from "./Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loaderHidden: false
    };
    this.finishLoading = this.finishLoading.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
  }

  finishLoading() {
    this.setState({loading: false})
  }

  hideLoader() {
    this.setState({loaderHidden: true});
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
      <div>
        <Loader show={this.state.loading || !this.props.isImagesLoaded} welcome={true} finish={this.hideLoader}/>
        <Switch>
          { mainPaths.map((route, idx) => {
            let Comp = route.component;
            return (
              <Route key={idx} exact={route.exact} path={route.path}>
                { Comp ? <Comp images={this.props.images} loading={!this.state.loaderHidden} /> : null}
              </Route>
            )
          })}
        </Switch>
      </div>
    );
  }
}

export default withImagesPromise(images, App);
