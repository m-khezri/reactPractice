import React from 'react';
import PropTypes from 'prop-types';
// import './Auth.scss';
import authRequests from '../../helpers/data/authRequests';

import googleButton from './Images/googlebutton.png';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('error in auth', err));
  }

  render() {
    return (
      <div className='Auth'>
        <a href="#" className='waiver-dark' onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button" />
        </a>
      </div>
    );
  }
}

export default Auth;