import React from "react";
import { NavLink, Outlet } from "react-router-dom";

class NavHeader extends React.Component {
  render() {
    return (
      <>
        <section className="root-layout">
          <header>
            <nav>
              <h1>React Router</h1>
              <NavLink to="login" className="login-button" >LOGIN IN NOW</NavLink>
              <NavLink to="logout" className="login-button" >LOG OUT!!!!</NavLink>

              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
              <NavLink to="help">Get Help</NavLink>
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
        </section>
      </>
    );
  }
}

export default NavHeader;
