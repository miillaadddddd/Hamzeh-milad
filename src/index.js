import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App/App";
import { store } from "./redux/store";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
