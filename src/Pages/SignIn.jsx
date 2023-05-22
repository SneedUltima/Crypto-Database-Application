import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signIn, UserAuth } from "../Context/AuthContext";

const SignIn = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] md:max-w-[600px] mx-auto min-h-[600px] px-4 py-20 text-white">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 rounded-xl border-none z-0 text-crypto-black"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 rounded-xl border-none z-0 text-crypto-black"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button
            className="px-5 py-2 bg-crypto-purple-button rounded-2xl shadow-lg hover:bg-crypto-purple-light
          border-2 border-crypto-purple-button ease-in-out duration-300 w-full"
          >
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account?{" "}
          <Link className=" text-crypto-purple-button" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
