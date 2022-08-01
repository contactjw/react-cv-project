import React from 'react';

import classes from './Experience.module.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      company: '',
      city: '',
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
        <h3>Experience</h3>
        <label htmlFor="position">Position: </label>
        <input id="position" type="text" placeholder="Position" />
        <label htmlFor="company">Company: </label>
        <input id="company" type="text" placeholder="Company" />
        <label htmlFor="city">City: </label>
        <input id="city" type="text" placeholder="City" />
        <label htmlFor="from">From: </label>
        <input id="from" type="text" placeholder="From" />
        <label htmlFor="to">To: </label>
        <input id="to" type="text" placeholder="To" />
      </div>
    );
  }
}

export default Experience;
