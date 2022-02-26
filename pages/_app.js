import "../styles/globals.css";
import "../styles/custom.css";

import { store } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
