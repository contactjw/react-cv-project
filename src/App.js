import React from 'react';
import classes from './App.module.css';
import GeneralInformation from './components/FormComponents/GeneralInfo';
import Experience from './components/FormComponents/Experience';
import EducationInformation from './components/FormComponents/EducationInformation';
import Resume from './components/ResumeComponents/Resume';

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
      <div className={classes.container}>
        <GeneralInformation getGeneralInfo={this.getGeneralInfo} />
        <Experience getExperience={this.getExperience} />
        <EducationInformation getEducation={this.getEducation} />
        <Resume stateObjects={this.state} />
        {/* <Controls /> */}
      </div>
    );
  }
}

export default App;
