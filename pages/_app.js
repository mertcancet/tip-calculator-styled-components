import "modern-normalize/modern-normalize.css";
import { GlobalStyle } from "../themes/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
