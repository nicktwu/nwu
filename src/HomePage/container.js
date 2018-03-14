import React, {Component} from 'react';
import {css} from "aphrodite";
import style from "./styling";
import Banner from "./banner";
import Sidebar from "./sidebar";
import PropTypes from 'prop-types';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false
    };
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar() {
    this.setState({showLinks: true});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mobile !== nextProps.mobile) {
      this.setState({showLinks: false})
    } else if (this.props.show !== nextProps.show) {
      this.setState({showLinks: false})
    }
  }

  render() {
    return (
      <div className={css(style.wrapper)}>
        <Banner show={this.props.show} mobile={this.props.mobile} triggerNext={this.showSidebar}/>
        <Sidebar show={this.state.showLinks} mobile={this.props.mobile}/>
      </div>
    )
  }
}

Content.propTypes = {
  mobile: PropTypes.bool,
  show: PropTypes.bool
};

export default Content