import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <NavLinks>
        <a href="https://github.com/galibuganesh?tab=repositories">Projects</a>
        <a href="https://github.com/galibuganesh/galibuganesh/blob/main/README.md">About</a>
        <a href="https://github.com/galibuganesh/galibuganesh/blob/main/README.md">Contact</a>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
