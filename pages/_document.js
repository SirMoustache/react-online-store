/**
 * Absolute Imports
 */
import React, { Fragment } from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Local Imports
 */
import GlobalStyles from '../GlobalStyles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(
            <Fragment>
              <GlobalStyles />
              <App {...props} />
            </Fragment>,
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }
}
