import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../Context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // const navigate = useNavigate();

  return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
