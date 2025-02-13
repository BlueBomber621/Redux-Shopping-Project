import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { persistorStore, store } from './redux/cartReducer'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate 
      laoding={"loading"} persistor={persistorStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
