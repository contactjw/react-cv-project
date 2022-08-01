import React, { Component } from 'react';

class GeneralInfoResume extends Component {
  render() {
    const { generalInfo } = this.props;

    return (
      <div>
        <h1>
          {generalInfo.firstName} {generalInfo.lastName}
        </h1>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </div>
    );
  }
}

export default GeneralInfoResume;
