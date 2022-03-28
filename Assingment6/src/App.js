
// import { Component } from "react";
// import Employee from "./Employee";
// import Helloword  from './Helloword';
// import Voting from './Voting';

// function App() {
//   return (
//   <div>
//     {/* <h2 class="heading">Voting</h2>
//     <Voting Language="C" />
//     <Voting language="C++" />
//     <Voting language="Java" />
//     <Voting language="Python" /> */}
//     <Employee name={"Pranav S"} salary={19999} />
//     <Employee name={"Shanmugam S"} salary={20000} />
//     <Helloword/>

//   </div>
//   );


import React, { Component } from 'react'
import Helloword from './Helloword'
import Employee from "./Employee"
import Voting from './Voting'

export default class App extends Component {
  render() {
    return (
      <div><Helloword/>
       <Employee name={"Pranav S"} salary={19999} />
       <Employee name={"Shanmugam S"} salary={20000} />
       <h2 class="heading">Voting</h2>
       <Voting language="C" />
  <Voting language="C++" />
    <Voting language="Java" />
    <Voting language="Python" /> 
      </div>
    )
  }
}
