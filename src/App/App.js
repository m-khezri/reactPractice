import React, { Component } from 'react';
import '../App/App.scss';
import getUser from '../helpers/api-data/getUserInfo';
import Print from '../components/print/Print';
class App extends Component {

  state = {
    profile: {},
  }

  componentDidMount() {
    // Here we get the API data and test by console log to make sure the data is returned. 
    getUser('m-khezri') // I used my gitHub username as a test to
      .then((result) => {
        console.log(result);
        this.setState({ profile: result });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Print profile={this.state.profile} />
    );
  }
}

export default App;
