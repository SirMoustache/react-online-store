/**
 * Absolute imports
 */

import App, { Container } from 'next/app';

/**
 * Global Components
 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

class StoreApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Header />
        <Main>
          <Component />
        </Main>
        <Footer />
      </Container>
    );
  }
}

export default StoreApp;
