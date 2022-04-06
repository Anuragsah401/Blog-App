import React from "react";
import { Link, Navigate } from "react-router-dom";
import Aos from "aos";

import { useAuth } from "Context/AuthContext";

import Button from "components/UI-Comp/Button/Button";
import "aos/dist/aos.css";

const Home = () => {
  const { currentUser } = useAuth();

  React.useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="text-center text-[#fff]">
      <div className="mt-[10rem]">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="mb-[2rem] font-[700] text-[3rem]"
        >
          Create Your First Blog
        </h1>
        <Link to="/login-signup" data-aos="fade-down" data-aos-delay="1000">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
