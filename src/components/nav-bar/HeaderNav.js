import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import { HeaderNavLink } from "./HeaderNav.styled";
import logo from "assets/logo.svg";
/* 
  https://www.iconfinder.com/icons/1243689/call_phone_icon
  Creative Commons (Attribution 3.0 Unported);
  https://www.iconfinder.com/Makoto_msk 
*/

const HeaderNav = () => {
  return (
    <Navbar bg='dark' expand='sm' variant='dark' className='px-sm-5'>
      {/* site logo */}
      <Link to='/'>
        <Navbar.Brand>
          <img src={logo} alt='logo' />
        </Navbar.Brand>
      </Link>

      {/* site navlinks */}
      <Nav className='mr-auto ml-5'>
        <HeaderNavLink to='/'>Products</HeaderNavLink>
      </Nav>

      {/* cart btn */}
      <HeaderNavLink to='/cart'>
        <Button
          variant='secondary'
          className='ml-auto d-flex align-items-center'
        >
          <FaShoppingCart /> <span className='ml-2'>My Cart</span>
        </Button>
      </HeaderNavLink>
    </Navbar>
  );
};

export default HeaderNav;
