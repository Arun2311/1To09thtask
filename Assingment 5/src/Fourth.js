import React, { Component } from "react";
import "./fourth.css";

class Fourth extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    num: "",
    comp: "",
    pos: "",
    street: "",
    city: "",
    states: "",
    zip: "",
    reg: "",
    top: "",
    onSubmit: false,
  };
  handleChange = () => {
    this.setState({ onSubmit: true });
    this.setState({ onSubmit: !this.state.onSubmit });
  };
  handlefname = (e) => {
    this.setState({ fname: e.target.value });
  };
  handleLname = (e) => {
    this.setState({ lname: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleNum = (e) => {
    this.setState({ num: e.target.value });
  };
  handleComp = (e) => {
    this.setState({ comp: e.target.value });
  };
  handlePos = (e) => {
    this.setState({ pos: e.target.value });
  };
  handleStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  handleCity = (e) => {
    this.setState({ city: e.target.value });
  };
  handleStates = (e) => {
    this.setState({ states: e.target.value });
  };
  handleZip = (e) => {
    this.setState({ zip: e.target.value });
  };
  handleReg = (e) => {
    this.setState({ reg: e.target.value });
  };
  handleTop = (e) => {
    this.setState({ top: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="a">
          <center>
            <h2>Contact us</h2>
          </center>
          <div className="c">
            <div>
              <label>First Name:</label>
              <br />
              <input
                type="text"
                placeholder={this.state.fname}
                onChange={this.handlefname}
              ></input>
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                placeholder={this.state.lname}
                onChange={this.handleLname}
              ></input>
            </div>
          </div>
          <br></br>
          <div className="d">
            <div>
              <label>Email:</label>
              <br />
              <div>
                <input
                  type="email"
                  placeholder={this.state.email}
                  onChange={this.handleEmail}
                ></input>
              </div>
            </div>
            <div>
              <label>Business Ph:</label>
              <br />
              <div>
                <input
                  type="number"
                  placeholder={this.state.num}
                  onChange={this.handleNum}
                ></input>
              </div>
              <br />
            </div>
          </div>
          <div className="e">
            <div>
              <label>Company Name:</label>
              <br />
              <input
                type="text"
                placeholder={this.state.comp}
                onChange={this.handleComp}
              ></input>
            </div>
            <div>
              <label>Job title:</label>
              <br />
              <input
                type="text"
                placeholder={this.state.pos}
                onChange={this.handlePos}
              ></input>
            </div>
          </div>
          <br></br>

          <div className="f">
            <div>
              <label>Street 1:</label>
              <br></br>
              <input
                type="text"
                placeholder={this.state.street}
                onChange={this.handleStreet}
              ></input>
            </div>
            <div>
              <label>City:</label>
              <br></br>
              <input
                type="text"
                placeholder={this.state.city}
                onChange={this.handleCity}
              ></input>
            </div>
          </div>
          <br></br>

          <div className="g">
            <div>
              <label>State/Province:</label>
              <br></br>
              <input
                type="text"
                placeholder={this.state.states}
                onChange={this.handleStates}
              ></input>
            </div>
            <div>
              <label>Zip/Postal Code</label>
              <br></br>
              <input
                type="text"
                placeholder={this.state.zip}
                onChange={this.handleZip}
              ></input>
            </div>
          </div>
          <br></br>

          <div className="h">
            <div>
              <label>Country/Region:</label>
              <br />
              <input
                type="text"
                placeholder={this.state.reg}
                onChange={this.handleReg}
              ></input>
            </div>
            <div>
              <label>
                Topic:<br></br>
              </label>
              <input
                type="text"
                placeholder={this.state.top}
                onChange={this.handleTop}
              ></input>
            </div>
          </div>
          <br></br>

          <div>
            <button className="k" onClick={this.handleChange}>
              Update
            </button>
          </div>
        </div>
        {/* <div className="raa">
          {this.state.onSubmit && (
            <div>
              <label>First Name:{this.state.fname}</label>
              <br></br>
              <label>Last Name: {this.state.lname}</label>
              <br></br>
              <label>Email:{this.state.email}</label>
              <br></br>
              <label>Business Ph:{this.state.num}</label>
              <br></br>
              <label>Company Name:{this.state.comp}</label>
              <br></br>
              <label>Job Title:{this.state.pos}</label>
              <br></br>
              <label>Street:{this.state.street}</label>
              <br></br>
              <label>City:{this.state.city}</label>
              <br></br>
              <label>State:{this.state.states}</label>
              <br></br>
              <label>Zip/Postal{this.state.zip}</label>
              <br></br>
              <label>Country/Region:{this.state.reg}</label>
              <br></br>
              <label>Topic:{this.state.top}</label>
              <br></br>
            </div>
          )} */}
        {/* </div> */}
      </div>
    );
  }
}

export default Fourth;
