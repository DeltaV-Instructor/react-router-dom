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
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
              <NavLink to="faq">Faq</NavLink>
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
