import React from "react";
import { Navigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { useAuth } from "Context/AuthContext";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const AuthPage = () => {
  const { currentUser } = useAuth();

  const [switched, setSwitched] = React.useState(false);

  React.useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <div
        data-aos="fade-down"
        className="mt-[4rem] text-[22px] font-semibold text-center text-white"
      >
        <span
          onClick={() => setSwitched(false)}
          className={`mx-[0.5rem] hover:text-[red] cursor-pointer ${
            switched ? "opacity-[0.6]" : "opacity-[none]"
          }`}
        >
          Login
        </span>
        or
        <span
          onClick={() => setSwitched(true)}
          className={`mx-[0.5rem] cursor-pointer hover:text-[red] ${
            switched ? "opacity-[none]" : "opacity-[0.6]"
          }`}
        >
          Signup
        </span>
      </div>

      <div>{switched ? <Signup /> : <Login />}</div>
    </div>
  );
};

export default AuthPage;
