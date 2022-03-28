import React, { Component } from 'react'

export class Employee extends Component {
  render() {
    return (
      <div>
          <br />
            Name of the employee :{this.props.name}
            <br/>
            Salary : {this.props.salary}
      </div>
    )
  }
}

export default Employee;