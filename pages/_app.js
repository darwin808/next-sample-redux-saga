import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import { store } from "../store/Store";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
