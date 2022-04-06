import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Aos from "aos";

import Button from "../../UI-Comp/Button/Button";
import "aos/dist/aos.css";
import { useAuth } from "../../../Context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      className="mt-[3rem] text-center text-white"
    >
      <div className="py-[3rem] px-[4rem] mx-[auto] max-w-[30rem] border-2 border-[white]">
        <form action="" onSubmit={handleSubmit}>
          <input
            required
            onChange={(e) => setEmail(e.target.value.trim())}
            type="email"
            className="px-[0.5rem] mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none"
            placeholder="Email:"
          />
          {}
          <br />
          <input
            required
            onChange={(e) => setPassword(e.target.value.trim())}
            type="password"
            className="px-[0.5rem] mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none"
            placeholder="password:"
          />
          <br />
          <Button type="submit" py="py-[0.5rem]" loading={loading}>
            Login
          </Button>
        </form>
        <Link to="/forgot-password" className="block mt-[2rem] underline">
          Did you Forget your Password?
        </Link>
      </div>

      <div className="mt-[2rem] text-red">{error}</div>
    </div>
  );
};

export default Login;
