import React from 'react';

class Print extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-1 text-light">Results goes here</h1>
        <h2>{this.props.profile.bio}</h2>
        <h6>{this.props.profile.name}</h6>
        <img src={this.props.profile.avatar_url} alt="users pic" />
        {/* <h2>{this.props.profile}</h2> */}
      </div>
    );
  }
}

export default Print;