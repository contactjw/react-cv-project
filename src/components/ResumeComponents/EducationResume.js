import React, { Component } from 'react';

class EducationResume extends Component {
  render() {
    const { educationInfo } = this.props;
    return (
      <div>
        <h1>{educationInfo.university}</h1>
        <p>{educationInfo.city}</p>
        <p>{educationInfo.degree}</p>
        <p>{educationInfo.subject}</p>
        <p>{educationInfo.from}</p>
        <p>{educationInfo.to}</p>
      </div>
    );
  }
}

export default EducationResume;
