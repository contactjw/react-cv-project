import React from 'react';

import classes from './GeneralInformation.module.css';

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First',
      lastName: 'Last',
      email: 'email@email.com',
      phone: '123-456-7890',
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
        <h3>Personal Information</h3>
        {/* <label htmlFor="first-name">First Name: </label> */}
        <input
          id="first-name"
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={this.changeHandler}
        />
        {/* <label htmlFor="last-name">Last Name: </label> */}
        <input
          id="last-name"
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={this.changeHandler}
        />
        {/* <label htmlFor="email">Email: </label> */}
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={this.changeHandler}
        />
        {/* <label htmlFor="phone">Phone Number: </label> */}
        <input
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={this.changeHandler}
        />
        <button onClick={() => this.props.getGeneralInfo(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

export default GeneralInformation;
