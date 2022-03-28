import React, { Component } from "react";

class Form3 extends Component {
  state = {
    submit: false,
    firstname: "",
    lastname: "",
    age: "",
    showAge: false,
  };
  handleSubmit = () => {
    this.setState({ submit: !this.state.submit });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleToggle = () => {
    this.setState({ showAge: !this.state.showAge });
  };
  handleReset = () => {
    this.setState({
      firstname: "",
      lastname: "",
      age: "",
    });
  };
  render() {
    return (
      <div>
        {!this.state.submit && (
          <div class="m-5 w-50 p-3 border border-2 border-dark">
            <div class="m-2 col-6 d-flex">
              <label>First Name</label>
              <div>
                <input
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  class="form-control ms-4"
                ></input>
              </div>
            </div>
            <div class="m-2 col-6 d-flex">
              <label>Last Name</label>
              <div>
                <input
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  class="form-control ms-4"
                ></input>
              </div>
            </div>
            <div class="m-2 col-5 d-flex">
              <label>Age</label>
              <div class="ms-4">
                <input
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  class="form-control ms-5"
                ></input>
              </div>
            </div>
            <div>
              <button
                class="btn btn-primary mt-2 ms-2 me-2 p-2"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
              <button
                class="btn btn-warning mt-2 ms-2 me-2 p-2"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
        {this.state.submit && (
          <div class="m-5">
            <div>Name : {this.state.firstname + this.state.lastname}</div>
            <div>Age : {this.state.showAge && this.state.age}</div>
            <div>
              <button
                class={
                  this.state.showAge
                    ? "btn btn-warning mt-2 ms-2 me-2 p-2"
                    : "btn btn-primary mt-2 ms-2 me-2 p-2"
                }
                onClick={this.handleToggle}
              >
                {this.state.showAge ? "Hide Age" : "Show Age"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Form3;