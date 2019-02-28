import React, { Component } from 'react';
import '../App/App.scss';
import NewsApi from '../components/Api/ApiTest';
import getUser from '../helpers/api-data/getUserInfo';

class App extends Component {

  state = {
    isLoaded: false,
    profile: {},
    bio: '',
    name: '',
    avatar_url: '',
  }

  componentDidMount() {
    // Here we get the API data and test by console log to make sure the data is returned. 
    getUser('m-khezri') // I used my gitHub username as a test to
      .then((result) => {
        this.setState({ profile: result })
        this.setState({ name: result })
        this.setState({ bio: result })
        this.setState({ avatar_url: result })
        console.log(result);
      })
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div className="App">
        <NewsApi
          profile={this.state.profile}
          bio={this.state.bio}
          avatar_url={this.state.avatar_url}
          name={this.state.name}
        />
      </div>
    )
  }

}


export default App;
