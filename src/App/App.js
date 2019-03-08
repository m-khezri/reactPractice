import React, { Component } from 'react';
import '../App/App.scss';
import NewsApi from '../components/Api/ApiTest';
import getUser from '../helpers/api-data/getUserInfo';

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
      <div>
        <NewsApi profile={this.state.profile} />
      </div>
    );
  }
}

export default App;
