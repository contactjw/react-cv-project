import React from 'react';

import classes from './EducationInformation.module.css';

class EducationInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState((prevState) => ({
      prevState,
      [event.target.name]: event.target.value,
    }));
  }

  render() {
    return (
      <div className={classes.container}>
        <h3>Education</h3>
        <label htmlFor="university-name">University name: </label>
        <input
          id="university-name"
          type="text"
          placeholder="University name"
          onChange={this.changeHandler}
        />
        <label htmlFor="education-city">City: </label>
        <input
          id="education-city"
          type="text"
          placeholder="City"
          onChange={this.changeHandler}
        />
        <label htmlFor="degree">Degree: </label>
        <input
          id="degree"
          type="text"
          placeholder="Degree"
          onChange={this.changeHandler}
        />
        <label htmlFor="subject">Subject: </label>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          onChange={this.changeHandler}
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          placeholder="From"
          onChange={this.changeHandler}
        />
        <label htmlFor="to">To: </label>
        <input
          id="to"
          type="text"
          placeholder="To"
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default EducationInformation;
