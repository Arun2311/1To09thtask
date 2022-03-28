import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "",
    fname: "",
    lname: "",
    date: "",
    email: "",
    password: "",
    confirmpassword: "",
    submit: false,
    checked: false,
    agreed: false,
    warning: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = () => {
    if (this.state.password === "" && this.state.confirmpassword === "") {
      alert("Passwords should not be empty");
      this.setState({ submit: false });
    } else if (this.state.password !== this.state.confirmpassword) {
      alert("Password and Confirm Password is mismatch");
    } else if (this.state.agreed === false) {
      this.setState({ warning: "*Please accept the terms and Conditions" });
    } else {
      this.setState({ submit: true });
    }
  };
  handleCheckClick = () => {
    this.setState({ agreed: !this.state.agreed });
  };

  handleReset = () => {
    this.setState({
      title: "",
      fname: "",
      lname: "",
      date: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    this.setState({ submit: false });
  };
  render() {
    return (
      <div>
        <div>
          {!this.state.submit && (
            <div className="border border-2 border-dark w-50 mt-5 ms-5 p-4">
              <form>
                <div className="justify-content-center">
                  <div class="row pb-2">
                    <div class="col-2">
                      <label class="label-title">Title</label>
                      <div>
                        <div class="dropdown">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                          >
                            <option selected></option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-5">
                      <label class="label-firstname">First Name</label>
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Firstname"
                          name="fname"
                          onChange={this.handleChange}
                          value={this.state.fname}
                        ></input>
                      </div>
                    </div>
                    <div class="col-5">
                      <div>
                        <label class="label-lastname">Last Name</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Lastname"
                          name="lname"
                          onChange={this.handleChange}
                          value={this.state.lname}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="row pb-2">
                    <div class="col-6">
                      <div>
                        <label>Date of Birth</label>
                      </div>
                      <input
                        type="date"
                        class="form-control"
                        name="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                      ></input>
                    </div>
                    <div class="col-6">
                      <div>
                        <label>Email address</label>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      ></input>
                    </div>
                  </div>
                  <div class="row pb-2">
                    <div class="col-6">
                      <div>
                        <label>
                          Password<label class="text-danger">*</label>
                        </label>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      ></input>
                    </div>
                    <div class="col-6">
                      <div>
                        <label>
                          Confirm Password<label class="text-danger">*</label>
                        </label>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                        name="confirmpassword"
                        onChange={this.handleChange}
                        value={this.state.confirmpassword}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <input
                      class="form-check-input p-2"
                      type="checkbox"
                      checked={this.state.agreed}
                      onChange={this.handleCheckClick}
                    ></input>
                    <span> </span>
                    <label class="form-check-label ps-2">
                      Accept Terms & Conditions
                      <label class="text-danger">*</label>
                    </label>
                    <p class="warning-message">
                      {!this.state.agreed && this.state.warning}
                    </p>
                  </div>
                  <div>
                    <button
                      class="btn btn-primary mt-2 me-2 p-2"
                      onClick={this.handleRegister}
                    >
                      Register
                    </button>
                    <button
                      class="btn btn-secondary mt-2 ms-2 p-2"
                      onClick={this.handleReset}
                    >
                      Reset
                    </button>
                    <label class="info ps-5">
                      (<label class="text-danger">*</label>) Fields indicative
                      are mandatory
                    </label>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        {this.state.submit && (
          <div>
            <h2>Registeration Form</h2>
            Name : {this.state.title + this.state.fname + this.state.lname}
            <br />
            Date of Birth : {this.state.date}
            <br />
            Email : {this.state.email}
            <br />I Agreed to the Terms & Conditions
          </div>
        )}
      </div>
    );
  }
}

export default Form;
