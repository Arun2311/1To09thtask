import React, { Component } from 'react'
import './sixth.css'

export class Sixth extends Component {
  render() {
    return (
      <div className='black'>
          <div className='aa'>
           <h1>Welcome:</h1>
          </div>
          <div className='ba'>
              <h3>Already Registered:</h3>
              <h3>New Customer:</h3>
          </div>
        <div className='ha'>
          <div className='ca'>
              <input type='text' placeholder='Username'></input>
              <br></br>
              <input type='text' placeholder='Email'></input>
          </div><br></br>


          <div className='da'>
          <input type='text' placeholder='Password'></input>
              <br></br>
              <input type='text' placeholder='Password'></input>
          </div><br></br>

          <div className='ea'>
              <button className='fa'>Sign In</button>
              <button className='ga'>Log In</button>
          </div>
          </div>
      </div>
    )
  }
}

export default Sixth