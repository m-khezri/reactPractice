import React from 'react';
import './App.scss';
import CarsInput from '../components/CarsInput/CarsInput';
import getMakes from '../helpers/MakeGetter';

class App extends React.Component {
  state = {
    makes: []
  }

  componentDidMount() {


    getMakes.getMakes('makes')
      .then((result) => {
        console.log(result);
        this.setState({ makes: result });
      })
      .catch(err => console.log(err));

    return (
      <div>
        <h1>cars</h1>
        <CarsInput />
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} photoURL={this.state.authed} logoutClickEvent={logoutClickEvent} />

        <ArticleForm />
      </div>
    );
  }
}


export default App;