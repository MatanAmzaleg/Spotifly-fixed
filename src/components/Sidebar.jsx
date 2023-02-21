import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi'
import { MobileSidebar } from "./MobileSidebar";

import { links } from '../assets/constants'

export const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(()=> {
    setMobileMenuOpen(false)
  },[])

const handleToggleMenu = () =>{
  setMobileMenuOpen(!mobileMenuOpen);
  console.log(mobileMenuOpen)
}
  return(
    <section className={mobileMenuOpen ? 'sidebar-total open' : 'sidebar-total'}>
    <button className="hamburger" onClick={() => {handleToggleMenu()}}> {mobileMenuOpen ? <RiCloseLine className="close-hamburger-icon"></RiCloseLine> : <HiOutlineMenu className="hamburger-icon"></HiOutlineMenu>}   </button>
    <section className="sidebar-sec flex column  ">
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
    <section className={mobileMenuOpen ? 'sidebar-sec-mobile flex column open' : 'sidebar-sec-mobile flex column'}>
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
    {/* <MobileSidebar className={mobileMenuOpen ? 'open' : null} links={links}></MobileSidebar> */}
        </section>
  )
}
