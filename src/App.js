import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Blog from "./containers/Blog/Blog";
import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-signup" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
