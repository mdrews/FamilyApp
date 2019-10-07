import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const AppHeader = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  return(<div>
    <Container>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <NavbarBrand href="/">Family App</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="https://github.com/mdrews">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  </div>);
}

export default AppHeader;