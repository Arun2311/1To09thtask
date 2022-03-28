import React, { Component } from 'react'

export class Helloword extends Component {
    state ={
        titlename: "",

    };
    
     change = () => {
        if (this.state.titlename === "welcome") {
            this.setState({ titlename: "Hello sir" });
          } else {
            this.setState({ titlename: "Hello sir" });
          }

     }
  render() {
    return (
      <div>

          <label>Just click to change : </label>
         <h3>Welcome <button onClick={this.change}>change</button></h3>
          <h2>{this.state.titlename}</h2>
      </div>
    )
  }
}

export default Helloword