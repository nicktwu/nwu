import React, { Component } from 'react';
import Loader from './Loader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(()=>{this.setState({loading: false})}, 0)
  }

  render() {
    return (
      <div>
        <Loader show={this.state.loading} welcome={true}/>
      </div>
    );
  }
}

export default App;
