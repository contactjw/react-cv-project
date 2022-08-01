import React, { Component } from 'react';
import classes from './Resume.module.css';
import GeneralInfoResume from './GeneralInfoResume';
import ExperienceResume from './ExperienceResume';
import EducationResume from './EducationResume';

class Resume extends Component {
  render() {
    return (
      <div className={classes.container}>
        <GeneralInfoResume generalInfo={this.props.stateObjects.generalInfo} />
        <ExperienceResume experienceInfo={this.props.stateObjects.experience} />
        <EducationResume educationInfo={this.props.stateObjects.education} />
      </div>
    );
  }
}

export default Resume;
