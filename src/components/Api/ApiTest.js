import React from 'react';
import PropTypes from 'prop-types';


class NewsApi extends React.Component {

  static propTypes = {
    profile: PropTypes.object,
  }

  render() {
    return (
      <div>
        <h3 className="name">{NewsApi.name}</h3>
      </div>
    );
  }
}

export default NewsApi;