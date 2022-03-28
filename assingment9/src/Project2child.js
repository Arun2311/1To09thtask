import React, { Component } from "react";

class Project2child extends Component {
  state = {
    showitems: false,
    readmore: true,
  };
  handleToggle = () => {
    this.setState({ showitems: true });
  };
  handleRefresh = () => {
    this.setState({ showitems: false });
  };
  handleReadmore = () => {
    this.setState({ readmore: !this.state.readmore });
  };
  render() {
    return (
      <div>
        {!this.state.showitems && (
          <div>
            <img class="singleimg" alt="" property="" src={this.props.image} />
            <div>
              <div class="size">
                <div class="row">
                  <div class="col">
                    <h5 class=" text text-start">{this.props.name}</h5>
                  </div>

                  <div>
                    <h5 class="txt text text-end">${this.props.price}</h5>
                  </div>
                </div>
                <div class=" info">
                  <p>
                    {this.state.readmore
                      ? this.props.info.slice(0, 114)
                      : this.props.info}
                    <a href="#" onClick={this.handleReadmore}>
                      Read More
                    </a>
                  </p>
                </div>
                <div class="text text-center">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg"
                    onClick={this.handleToggle}
                  >
                    Not Interested
                  </button>
                </div>
              </div>
            </div>
            {this.state.showitems === "false" && (
              <a href="#" onClick={this.handleRefresh}>
                Refresh
              </a>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Project2child;