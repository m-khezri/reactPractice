import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div className="bg-light m-0 p-2">
        <ul>
          <li style={{ color: 'tomato' }}><NavLink exact to="/">Profile</NavLink></li>
          <li activeStyle={{ color: 'blue' }}><NavLink to="/about">About</NavLink></li>
        </ul>

      </div>
    );
  }
}

export default NavBar;