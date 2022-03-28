import React, { Component } from "react";

class Form2 extends Component {
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
  handleCheckBox = (checked) => {
    if (checked) {
      this.setState({ checkboxvalue: "Accepted" });
    } else {
      this.setState({ checkboxvalue: "Declined" });
    }
  };
  handleCheckBoxClick = () => {
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
            <div className="m-5 p-3 w-50 border border-2 border-dark">
              <div class="m-2 d-flex">
                <label>Name of the Passenger</label>
                <div class="col-7 ps-5">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div class="m-2 d-flex">
                <label class="pe-5">Age</label>
                <div class="col-7 ps-5">
                  <input
                    type="number"
                    class="form-control ms-5"
                    aria-label="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div class="m-2 d-flex">
                <label class="pe-5">Gender</label>
                <span class="ps-4">
                  <input
                    type="radio"
                    name="gender"
                    class="form-check-input ms-5"
                    onChange={this.handleChange}
                    value="Male"
                  ></input>
                  <label class="ps-2">Male</label>
                  <input
                    type="radio"
                    class="form-check-input ms-5"
                    name="gender"
                    onChange={this.handleChange}
                    value="Female"
                  ></input>
                  <label class="ps-2">Female</label>
                </span>
              </div>
              <div class="m-2 d-flex col-8">
                <label class="pe-5">Source</label>
                <select
                  class="form-select ms-5"
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
              <div class="m-2 d-flex col-8">
                <label class="pe-3">Destination</label>
                <select
                  class="form-select ms-5"
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
              <div class="m-2">
                <input
                  type="checkbox"
                  checked={this.state.checkdecision}
                  onChange={this.handleCheckBoxClick}
                ></input>
                <label class="ps-2">
                  I Agree to all the Terms and Conditions
                </label>
              </div>
              <div class="div-submit">
                <button
                  onClick={this.handleSubmit}
                  class="btn btn-primary mt-2 me-2 p-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {this.state.submit && (
            <div>
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

export default Form2;