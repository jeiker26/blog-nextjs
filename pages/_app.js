import PropTypes from 'prop-types';
import '../styles/globals.scss';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default MyApp;
