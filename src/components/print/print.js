import React from 'react';

class Print extends React.Component {
  render() {
    return (
      <div className="bg-light m-5 p-5 rounded">
        <img className="rounded shadow" src={this.props.profile.avatar_url} alt="users pic" />
        <h2 className="mt-3">{this.props.profile.name}</h2>
        <h6>{this.props.profile.bio}</h6>
        {/* <h2>{this.props.profile}</h2> */}
      </div>
    );
  }
}

export default Print;