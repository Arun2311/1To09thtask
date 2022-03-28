import React, { Component } from "react";
import "./ticket.css";

class Ticketbooking extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    source: "",
    destination: "",
    submit: false,
    checkdecision: false,
    checked: false,
    checkboxvalue: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheckClick = () => {
    this.setState({ checkdecision: !this.state.checkdecision });
  };
  handleSubmit = () => {
    if (this.state.source === "" && this.state.destination === "") {
      alert("Source and Destination should not be empty");
    } else if (this.state.source === this.state.destination) {
      alert("Source and Destination should not be same");
    } else if (this.state.checked === false) {
      this.setState({ checkboxvalue: "Disagree" });
      this.setState({ submit: true });
    } else {
      this.setState({ checkboxvalue: "Agree" });
      this.setState({ submit: true });
    }
  };
  render() {
    return (
      <div>
        <div>
          {!this.state.submit && (
            <div class="form">
              <div class="div-name">
                <label>Name of the Passenger</label>
                <input
                  type="text"
                  class="input-name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div class="div-age">
                <label>Age</label>
                <input
                  type="number"
                  class="input-age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div class="div-gender">
                <label>Gender</label>
                <span class="span-gender">
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.handleChange}
                    value="Male"
                  ></input>
                  <label>Male</label>
                  <input
                    type="radio"
                    class="radio-female"
                    name="gender"
                    onChange={this.handleChange}
                    value="Female"
                  ></input>
                  <label>Female</label>
                </span>
              </div>
              <div class="div-source">
                <label>Source</label>
                <select
                  class="dropdown-source"
                  name="source"
                  onChange={this.handleChange}
                  value={this.state.source}
                >
                  <option></option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>
              <div class="div-destination">
                <label>Destination</label>
                <select
                  class="dropdown-destination"
                  name="destination"
                  onChange={this.handleChange}
                  value={this.state.destination}
                >
                  <option></option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>
              <div class="div-termsandconditions">
                <input
                  type="checkbox"
                  checked={this.state.checkdecision}
                  onChange={this.handleCheckClick}
                ></input>
                <label class="label-termsandconditions">
                  I Agree to all the Terms and Conditions
                </label>
              </div>
              <div class="div-submit">
                <button onClick={this.handleSubmit} class="button-submit">
                  Submit
                </button>
              </div>
            </div>
          )}
          {this.state.submit && (
            <div>
              <h2>Ticket Booking</h2>
              <div>Name: {this.state.name}</div>
              <div>Age: {this.state.age}</div>
              <div>Gender:{this.state.gender}</div>
              <div>Source: {this.state.source}</div>
              <div>Destination:{this.state.destination}</div>
              <div>
                I {this.state.checkboxvalue} to the terms and conditions
              </div>
              <h2>{this.state.checked}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Ticketbooking;
