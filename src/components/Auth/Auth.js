import React from 'react';
import './Auth.scss';
import authRequests from '../../helpers/authRequests';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();

    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div>
        <button className="btn btn alert-success" onClick={this.authenticateUser}>Login with Google account</button>
      </div>
    );
  }
}

export default Auth;