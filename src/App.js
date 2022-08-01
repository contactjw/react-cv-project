import React from 'react';
import './App.css';
import GeneralInformation from './components/GeneralInfo';
import Experience from './components/Experience';
import EducationInformation from './components/EducationInformation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {},
      experience: {},
      education: {},
    };

    this.getGeneralInfo = this.getGeneralInfo.bind(this);
    this.getExperience = this.getExperience.bind(this);
    this.getEducation = this.getEducation.bind(this);
  }

  getGeneralInfo = (generalInfoObj) => {
    this.setState(
      {
        generalInfo: generalInfoObj,
      },
      () => {
        console.log(this.state.generalInfo);
      }
    );
  };

  getExperience = (experienceObj) => {
    this.setState(
      {
        experience: experienceObj,
      },
      () => {
        console.log(this.state.experience);
      }
    );
  };

  getEducation = (educationObj) => {
    this.setState(
      {
        education: educationObj,
      },
      () => {
        console.log(this.state.education);
      }
    );
  };

  render() {
    return (
      <>
        <GeneralInformation getGeneralInfo={this.getGeneralInfo} />
        <Experience getExperience={this.getExperience} />
        <EducationInformation getEducation={this.getEducation} />
        {/* <Resume /> */}
        {/* <Controls /> */}
      </>
    );
  }
}

export default App;
