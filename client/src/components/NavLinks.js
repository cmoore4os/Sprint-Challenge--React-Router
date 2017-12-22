import React from 'react';
import { Link, NavLink, Heading, Container, Divider } from 'rebass';

const NavLinks = () => {
  return (
    <Container>
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/mac">Mac</Link>
      </NavLink>
      <NavLink>
        <Link to="/iPad">iPad</Link>
      </NavLink>
      <NavLink>
        <Link to="/iPhone">iPhone</Link>
      </NavLink>
      <Divider />
      <Heading is="h1" center>
        Maxs Computers
      </Heading>
    </Container>
  );
};
export default NavLinks;
