/**
 * Absolute imports
 */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/**
 * Global Components
 */
import A from '../A';

const NavLink = styled(A)`
  display: block;
  padding: 8px 16px;
`;

const Root = styled.nav`
  display: flex;
`;

const Header = () => (
  <Root>
    <Link href="/">
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/about">
      <NavLink>About</NavLink>
    </Link>
    <Link href="/shop">
      <NavLink>Shop</NavLink>
    </Link>
  </Root>
);

export default Header;
