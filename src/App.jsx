import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routers from "./Routers/Routers";
import { Provider } from "react-redux";
import createStore from "./utils/store";
import LoadingProvider from "./sections/loading/LoadingProvider";
function App() {
  const store = createStore();
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <LoadingProvider />
    </Provider>
    </>
  );
}

export default App;
