import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App/App.scss';
import getUser from '../helpers/api-data/getUserInfo';
import NavBar from '../components/NavBar/NavBar';
import Print from '../components/print/print';
import About from '../components/About/About';
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
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Print profile={this.state.profile} />
          <Route exact path="/" Component={Print} />
          <Route path="/about" Component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
