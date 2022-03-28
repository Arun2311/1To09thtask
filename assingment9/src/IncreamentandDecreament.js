import React, { Component } from "react";

class IncreamentandDecreament extends Component {
  state = {
    inputvalue: 0,
    count: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleIncrement = () => {
    this.setState({
      count: Number(this.state.count) + Number(this.state.inputvalue),
    });
  };
  handleDecrement = () => {
    this.setState({
      count: Number(this.state.count) - Number(this.state.inputvalue),
    });
  };
  render() {
    return (
      <div class="d-flex">
        <label>Count : </label>
        <span> {this.state.count} </span>
        <div class="input-group  w-25">
          <input
            type="number"
            class="form-control"
            name="inputvalue"
            aria-label="default input example"
            value={this.state.inputvalue}
            onChange={this.handleChange}
          ></input>
        </div>

        <button class="btn btn-primary" onClick={this.handleIncrement}>
          Increament
        </button>
        <button class="btn btn-warning" onClick={this.handleDecrement}>
          Decreament
        </button>
      </div>
    );
  }
}

export default IncreamentandDecreament;