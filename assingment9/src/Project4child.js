import React, { Component } from "react";
import "./reactproject4.css";
class Project4child extends Component {
  state = {
    submit: false,
    sign: "",
  };
  handleclear = () => {
    this.setState({ submit: !this.state.submit });
    this.setState({ info: "" });
    this.setState({ sign: this.state.sign === "+" });
  };

  render() {
    return (
      <div>
        <div>
          <h4 class="title-box">
            {this.props.title}
            <button
              className="button-expantion"
              name="submit"
              onClick={this.handleclear}
            >
              {this.state.submit ? "-" : "+"}
            </button>
          </h4>
        </div>
        {this.state.submit && (
          <div>
            <p>{this.props.info}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Project4child;