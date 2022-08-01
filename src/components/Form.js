import React, { Component } from 'react';
import GeneralInformation from './GeneralInfo';
import Experience from './Experience';
import EducationInformation from './EducationInformation';

export class Form extends Component {
  render() {
    return (
      <>
        <GeneralInformation />
        <Experience />
        <EducationInformation />
      </>
    );
  }
}

export default Form;
