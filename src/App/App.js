import React, { Component } from 'react';
import '../App/App.scss';
import AboutMe from '../components/about/About';
import NewsApi from '../components/Api/ApiTest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Mohamamd',
      lastName: 'Khezri'
    };
  }


  render() {

    return (
      <div className="App">
        <h2 className="blue-text">{this.state.name}</h2>
        <h3>{this.state.lastName}</h3>
        <NewsApi />
        <AboutMe />
      </div>
    );
  }
}

export default App;
