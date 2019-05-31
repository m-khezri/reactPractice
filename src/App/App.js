import React, { Component } from 'react';
import '../App/App.scss';
import connection from '../helpers/connection';
import Auth from '../components/Auth/Auth';

class App extends Component {

  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <h2 className="blue-text">I'm learning react + Materilize</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
