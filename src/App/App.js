import React, { Component } from 'react';
import myfirstPage from '../components/firstPage';
import '../App/App.scss';
import { Button, Icon } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="blue-text">I'm learning react + Materilize</h2>
        <Button waves='light'>
          <Icon>thumb_up</Icon>
          Hello React
        </Button>
        <myfirstPage />
      </div>
    );
  }
}

export default App;
