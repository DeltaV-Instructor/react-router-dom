import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';


 class SecretContent extends Component {
  constructor(props){
    super(props);
    this.state ={
      treasure: []
    }
  }
  render() {
    return (
      <h1>SecretContent we hope</h1>

    )
  }
}


export default SecretContent;