import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    // const monkeyButt = this.props.isAuthed;
    // const newThing = this.props.newThing;
    const { isAuthed, logoutClickEvent } = this.props;
    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Zillone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {isAuthed ?
                  <NavLink onClick={logoutClickEvent}>Sign Out
                    <img alt="user-pic" src={this.state.photoURL} />
                  </NavLink>
                  : ''}
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;