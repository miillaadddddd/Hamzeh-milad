import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import StructureContainer from "../StructureContainer/StructureContainer";

function App() {
  return (
    <BrowserRouter>
      <StructureContainer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
