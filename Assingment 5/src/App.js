import React, { Component } from 'react'
import Fifth from './Fifth.js'
import Fourth from './Fourth.js'
import Sixth from './Sixth'
import Seven from './Seven'
import Spline from '@splinetool/react-spline';

export class App extends Component {
  render() {
    return (
      <div>
        <Fourth/>

        <Fifth/>

        <Sixth/>
        <Seven/>
        <Spline/>
      </div>
    )
  }
}

export default App
