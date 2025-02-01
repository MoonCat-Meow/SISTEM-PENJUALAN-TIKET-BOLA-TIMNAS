import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import Page from "./components/Page/Page";
import PageAdmin from "./components/PageAdmin/Page";
import PageUser from "./components/PageUser/Page";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <div className="font-roboto">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Page />} />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <PageAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/users-dashboard"
            element={
              <PrivateRoute>
                <PageUser />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
