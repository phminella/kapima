import { ApolloProvider } from "@apollo/client";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';
import { GlobalStyles } from "../components/styles/GlobalStyles";
import Header from '../components/Header';
import Router from 'next/router';
import { useEffect } from "react";
import Head from 'next/head';
import styled from "styled-components";
import withData from '../lib/withData';
import store from '../store/store'
import { Provider } from 'react-redux'
import Cart from '../components/Cart';
import Footer from "../components/Footer";

const InnerStyles = styled.div`
  max-width: 1100px;
  margin:0 auto;
  padding: 2rem;
  display:grid;
  justify-content: center;
`;
function Page({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <title>Capybara market!</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Cart />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </>
  );
}

const MyApp = ({ Component, pageProps, apollo }) => {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }, []);
  return (<>
    <ApolloProvider client={apollo}>
      <Provider store={store}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Provider>
    </ApolloProvider></>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};


export default withData(MyApp);
