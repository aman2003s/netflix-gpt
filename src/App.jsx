import { Provider } from "react-redux";
import "./App.css";
import LoginBody from "./components/LoginBody";
import appStore from "./utils/appStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseBody from "./components/BrowseBody";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginBody />} />
            <Route path="/browse" element={<BrowseBody />} />
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
