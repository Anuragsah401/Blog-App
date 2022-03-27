import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext.jsx";
import ForgotPassword from "./components/AuthPage/ForgotPassword/ForgotPassword";
import CreatePost from "./components/CreatePost/CreatePost";
import Main from "./containers/Main/Main";
import SinglePostView from "./components/SinglePostView/SinglePostView";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-signup" element={<AuthPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:id" element={<SinglePostView />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Main>
      </div>
    </AuthProvider>
  );
}

export default App;
