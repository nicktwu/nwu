/**
 * Created by nwu on 2/28/18.
 */
import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './styling';
import Banner from './banner';
import PropTypes from 'prop-types';
import Container from './container';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false,
    };
    this.showSidebar = this.showSidebar.bind(this);
  }

  showSidebar() {
    console.log("showing");
    this.setState({showLinks: true});
  }

  render() {
    return (
      <div className={css(style.wrapper)}>
        <Banner show={!this.props.loading} triggerNext={this.showSidebar}/>
        <Container show={this.state.showLinks}/>
      </div>
    )
  }
}

Wrapper.propTypes = {
  loading: PropTypes.bool
};

export default Wrapper;