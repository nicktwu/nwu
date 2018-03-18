import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from "./carousel";
import style from './styling';
import {css} from 'aphrodite';
import Waypoint from 'react-waypoint';
import About from "./about";
import NavBar from "./navbar";
import Media from "react-responsive";

const componentList = [ { comp: Carousel, name: "home" }, { comp: About, name: "about" } ];

class HomePageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.blocks = new Array(componentList.length);
    this.setFocus = this.setFocus.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mobile !== this.props.mobile || nextProps.show !== this.props.show) {
      this.setState({ current: 0 });
      this.scrollTo(0)();
    }
  }

  setFocus(idx) {
    return (info) => {
      if (info.currentPosition === Waypoint.above) {
        this.setState({current: idx + 1})
      } else {
        this.setState({current: idx - 1})
      }
    }
  }

  scrollTo(idx) {
    return () => {
      this.blocks[idx].scrollIntoView({behavior: "smooth"})
    }
  }

  render() {
    let mobile = this.props.mobile;
    return (
      <span>
        <NavBar mobile={mobile} current={this.state.current}
                links={componentList.map(obj => obj.name)} scrollTo={this.scrollTo}/>
        {componentList.map((obj, idx) => {
          let Comp = obj.comp;
          return (
            <Waypoint key={idx} onLeave={this.setFocus(idx)} topOffset={"49.5%"} bottomOffset={"49.5%"}>
              <div id={idx.toString()} ref={refs => this.blocks[idx] = refs}
                   className={css(style.block, mobile ? style.mobileBlock : style.defaultBlock)}>
                <Comp images={this.props.images} show={this.props.show} mobile={mobile} inFocus={this.state.current === idx}/>
              </div>
            </Waypoint>
          )
        })}
      </span>

    )
  }
}

HomePageContent.propTypes = {
  mobile: PropTypes.bool,
  images: PropTypes.object,
  show: PropTypes.bool
};

class HomePage extends Component {
  render() {
    return (
      <Media maxWidth={767}>
        { mobile => <HomePageContent images={this.props.images} show={this.props.show} mobile={mobile}/>}
      </Media>
    )
  }
}

HomePage.propTypes = {
  images: PropTypes.object,
  show: PropTypes.bool
};



export default HomePage;