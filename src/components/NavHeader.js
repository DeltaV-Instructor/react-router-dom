import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import Login from "../components/Login";
// import Logout from "../components/Logout";
// import Profile from "../components/Profile";
// import SecretContent from "../pages/SecretContent";
import { withAuth0 } from "@auth0/auth0-react";

class NavHeader extends React.Component {
  render() {
    return (
      <>
        <section className="root-layout">
          <header>
            <nav>
              <h1>React Router</h1>
              {/* <NavLink to="login"  className="login-button">LOGIN IN NOW</NavLink>
              <NavLink to="logout" className="login-button">LOG OUT!!!!</NavLink> */}
              {this.props.auth0.isAuthenticated ? (
                <>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="secretcontent">Secret Content</NavLink>
                <NavLink to="logout">Logout</NavLink>
                </>
              ) : (
                <NavLink to="login">Login</NavLink>
              )}


              
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
              <NavLink to="help">Get Help</NavLink>
            </nav>
          </header>

          <main>
            <section>
           
              {/* <Login /> */}
            </section>
            
            <Outlet />
          </main>
        </section>
      </>
    );
  }
}

export default withAuth0(NavHeader);
