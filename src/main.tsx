import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
ReactDOM.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />,
    </StoreContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
