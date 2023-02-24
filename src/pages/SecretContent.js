import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
class SecretContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treasure: [],
    };
  }

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log("token: ", jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/our-route",
      };
      //build URL
      let axiosData = await axios(config);

      let treasureData = ["gold", "gems", "pizza"];
    }

    this.setState({
      treasure: treasureData,
    });
  }
  render() {
    console.log(this.state.treasure);
    return <h1>SecretContent we hope</h1>;
  }
}

export default withAuth0(SecretContent);
