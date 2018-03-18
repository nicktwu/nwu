import React, { Component } from 'react';
import Loader from './Loader';
import WebFont from 'webfontloader';
import {Switch, Route} from 'react-router-dom';
import {fontList} from './fonts';
import {mainPaths} from "./Router";
import "./styles.css"
import {allImages} from "./images";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingFont: true,
      show: false
    };
    this.finishLoadingFont = this.finishLoadingFont.bind(this);
    this.finishLoadingComponent = this.finishLoadingComponent.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
  }

  finishLoadingFont() {
    this.setState({loadingFont: false})
  }

  finishLoadingComponent() {
    this.setState(this.setState((state) => ({loadingComp: state.loadingComp - 1})))
  }

  hideLoader() {
    this.setState({show: true});
  }

  componentWillMount() {
    WebFont.load({
      google: fontList,
      active: this.finishLoadingFont,
      inactive: this.finishLoadingFont
    });
  }

  render() {
    return (
      <Route render={({location}) => {
        return (
          <div>
            <Loader show={this.state.loadingFont || this.props.loadingImages} welcome={true} finish={this.hideLoader}/>
            <Switch location={location}>
              {mainPaths.map((route, idx) => {
                let Comp = route.component;
                return (
                  <Route key={idx} exact={route.exact} path={route.path}>
                    <Comp images={this.props.images} show={this.state.show} loaded={this.finishLoadingComponent}/>
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

const imageNames = Object.keys(allImages);

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: imageNames.length,
      images: allImages
    }
  }

  componentDidMount() {
    for (let i = 0; i < imageNames.length; i++) {
      let newImage = new Image(0,0);
      newImage.onload = () => {this.setState((state)=>({loading: state.loading - 1}))};
      newImage.src = allImages[imageNames[i]];
    }
  }

  render() {
    return (
      <App {...this.props} loadingImages={this.state.loading > 0} images={this.state.images}/>
    )
  }
}

export default Wrapper;
