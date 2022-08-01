import React, { Component } from 'react';

class ExperienceResume extends Component {
  render() {
    const { experienceInfo } = this.props;

    return (
      <div>
        <h1>{experienceInfo.position}</h1>
        <p>{experienceInfo.company}</p>
        <p>{experienceInfo.city}</p>
        <p>{experienceInfo.from}</p>
        <p>{experienceInfo.to}</p>
      </div>
    );
  }
}

export default ExperienceResume;
