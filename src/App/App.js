import React, { Component } from 'react';
import '../App/App.scss';
import NewsApi from '../components/Api/ApiTest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }


  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} | {item.email}
              </li>
            ))};
    </ul>
          <h2 className="blue-text">{this.state.name}</h2>
          <h3>{this.state.lastName}</h3>
          <NewsApi />
        </div>
      )
    }

  }
}

export default App;
