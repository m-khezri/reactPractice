import React from 'react';
import './Auth.scss';
import authRequests from '../../helpers/authRequests';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      // do something here
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div>
        <button onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;