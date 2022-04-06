import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

import "aos/dist/aos.css";
import Button from "../../UI-Comp/Button/Button";
import { useAuth } from "../../../Context/AuthContext";

const ForgotPassword = () => {
  const { sendPasswordReset } = useAuth();

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  //   const [loading, setLoading] = React.useState(false);
  const [sucessMsg, setSucessMsg] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await sendPasswordReset(email);
      setSucessMsg("The reset link has been sent!");
      e.target.reset();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  React.useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="text-center">
      <div className="mt-[2rem] text-center text-white">
        Please submit your email to get reset link
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="mt-[1rem] text-center text-white"
      >
        <div className="py-[3rem] px-[4rem] mx-[auto] max-w-[30rem] border-2 border-[white]">
          <form action="" onSubmit={handleSubmit}>
            <input
              required
              onChange={(e) => setEmail(e.target.value.trim())}
              type="email"
              className="px-[0.5rem] mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none"
              placeholder="Your Email Address:"
            />
            {}
            <br />
            <Button type="submit" py="py-[0.5rem]">
              Send reset link
            </Button>
          </form>
          <Link to="/login-signup" className="block mt-[1rem] underline">
            Back to Login
          </Link>
        </div>
      </div>

      {error ? (
        <div className="inline-block py-[1rem] px-[2rem] mt-[2rem] text-center text-white bg-[red]">
          {error}
        </div>
      ) : null}

      {sucessMsg ? (
        <div className="inline-block py-[1rem] px-[2rem] mt-[2rem] text-center text-white bg-[green]">
          {sucessMsg}
        </div>
      ) : null}
    </div>
  );
};

export default ForgotPassword;
