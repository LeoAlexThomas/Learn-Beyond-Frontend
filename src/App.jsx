import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginPage";
import { SWRConfig } from "swr";
import api from "./Utils/api";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/registerPage";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: api,
            errorRetryCount: 5,
            errorRetryInterval: 5000,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* No Match page [404 page not found] */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </SWRConfig>
      </BrowserRouter>
    </div>
  );
};

export default App;
