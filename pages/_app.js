/**
 * Absolute imports
 */
import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

/**
 * Global Components
 */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

/**
 * Utils
 */
import withApolloClient from '../utils/withApolloClient';

class StoreApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(StoreApp);
