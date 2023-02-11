import { useState } from "react";
import { NavLink } from "react-router-dom";

export const MobileSidebar = ({links}) => {
    return (
        <section className="sidebar-sec-mobile flex column  ">
      <h1 className="main-title">Spotifly Music</h1>
      <section className="nav-links flex column">
        {links.map(link => (
          <NavLink to={link.to} key={link.name}>
            <link.icon className="icon"></link.icon>
            {link.name}
          </NavLink>
        ))}
      </section>
    </section>
    )
}