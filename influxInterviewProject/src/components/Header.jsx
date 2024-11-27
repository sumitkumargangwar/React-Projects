import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import svgIcons from '../icons';
import './Header.css';

const Header = () => {
  // State to track whether the user is scrolling down or not
  const [scrollingDown, setScrollingDown] = useState(false);
  // State to track the last scroll position
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // State to determine if the viewport is mobile or not
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Placeholder titles for navigation dropdowns
  const navItems = ["Placeholder Title", "Placeholder Title", "Placeholder Title", "Placeholder Title"];

  // Function to handle scroll events and determine scroll direction
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Update scrollingDown state based on scroll direction
    if (scrollTop > lastScrollTop) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }

    // Update lastScrollTop with the current scroll position
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  // Function to handle window resize events and update mobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  // Effect to add and clean up event listeners for scroll and resize
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollTop]);

  return (
    <Navbar className={`header ${isMobile && scrollingDown ? 'hide-header' : ''}`} expand="lg" fixed="top">
      <div className="d-flex align-items-center w-100">
        {/* Toggle button for mobile navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Home icon, only visible on mobile devices */}
        <div className="ml-auto d-lg-none ms-auto pe-3">
          <img src={svgIcons['Home.svg']} alt="Home" style={{ width: '25px', height: '25px' }} />
        </div>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          {/* Render navigation dropdowns */}
          {navItems.map((title, index) => (
            <NavDropdown key={index} title={title} id={`nav-dropdown-${index}`}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
            </NavDropdown>
          ))}
          {/* Sign In button with an icon */}
          <Button variant="outline-primary" className="ml-auto">
            <img src={svgIcons['login.svg']} alt="Sign In" style={{ width: '15px', height: '15px' }} />
            Sign In
          </Button>
        </Nav>
      </Navbar.Collapse>
      {/* Trending navigation section */}
      <div className='trending-nav'>
        {navItems.map((name, index) => (
          <div key={index} className='trending-nav-name'>{name}</div>
        ))}
      </div>
    </Navbar>
  );
};

export default Header;
