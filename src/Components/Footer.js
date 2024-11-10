import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  color: #555;
  font-size: 0.9rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return <FooterContainer>© 2024 My Portfolio</FooterContainer>;
}

export default Footer;
