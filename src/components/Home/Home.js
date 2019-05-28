import React from 'react';
// import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home mx-auto'>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;