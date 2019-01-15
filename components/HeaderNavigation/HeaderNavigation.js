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

const Root = styled.div`
  flex: 0 0 auto;
`;

const Header = () => (
  <Root>
    <Link href="/">
      <A>Home</A>
    </Link>
    <Link href="/about">
      <A>About</A>
    </Link>
  </Root>
);

export default Header;
