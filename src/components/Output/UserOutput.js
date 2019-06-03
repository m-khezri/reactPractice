import React from 'react';

class UserOutput extends React.Component {
  render(props) {
    return (
      <div className="bg-light m-4 p-3 w-25">
        <h6>User name: <span className="form-control-sm">{this.props.userName}</span></h6>
        <h6>User name: <span className="form-control-sm">{this.props.userName}</span></h6>
        <h6>User name: <span className="form-control-sm">{this.props.userName}</span></h6>
      </div>
    );
  }
}

export default UserOutput;