import React from 'react';
import './UserInput.scss';

class OutputUser extends React.Component {

  render() {

    return (
      <div>
        <form>
          <div className="bg-success m-4 p-2 w-25">
            <label className="text-light">Enter your name:</label>
            <input className="ml-2" type='text'
              onChange={this.props.changed}
              value={this.props.currentName}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default OutputUser;